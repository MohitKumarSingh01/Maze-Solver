// Maze dimensions
const mazeWidth = 20;
const mazeHeight = 20;

// Maze data (0: open, 1: wall)
let maze = [
    [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0],
    [0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0],
    [1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

const start = { x: 0, y: 0 };
const end = { x: 19, y: 9 };

// Initialize the maze visually
function createMaze() {
    const mazeElement = document.getElementById('maze');
    for (let y = 0; y < mazeHeight; y++) {
        for (let x = 0; x < mazeWidth; x++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            if (maze[y][x] === 1) {
                cell.classList.add('wall');
            }
            if (x === start.x && y === start.y) {
                cell.classList.add('start');
            }
            if (x === end.x && y === end.y) {
                cell.classList.add('end');
            }
            cell.id = `cell-${x}-${y}`;
            mazeElement.appendChild(cell);
        }
    }
}

// BFS algorithm to find the shortest path
function bfs(maze, start, end) {
    const startTime = performance.now(); // Start time
    
    let queue = [start];
    let visited = Array.from({ length: mazeHeight }, () => Array(mazeWidth).fill(false));
    let parent = Array.from({ length: mazeHeight }, () => Array(mazeWidth).fill(null));

    visited[start.y][start.x] = true;

    const directions = [
        { x: 0, y: 1 },  // Down
        { x: 1, y: 0 },  // Right
        { x: 0, y: -1 }, // Up
        { x: -1, y: 0 }  // Left
    ];

    while (queue.length > 0) {
        let current = queue.shift();
        
        // If we reached the end, reconstruct the path
        if (current.x === end.x && current.y === end.y) {
            const endTime = performance.now(); // End time
            console.log(`Path found in ${(endTime - startTime).toFixed(2)} milliseconds`);
            reconstructPath(parent, end); // Reconstruct and display the path
            return true;
        }

        // Explore neighbors
        for (let direction of directions) {
            let newX = current.x + direction.x;
            let newY = current.y + direction.y;

            if (newX >= 0 && newX < mazeWidth && newY >= 0 && newY < mazeHeight && !visited[newY][newX] && maze[newY][newX] === 0) {
                queue.push({ x: newX, y: newY });
                visited[newY][newX] = true;
                parent[newY][newX] = current; // Track the parent
            }
        }
    }

    const endTime = performance.now(); // End time if no solution is found
    console.log(`No solution found. Search took ${(endTime - startTime).toFixed(2)} milliseconds`);
    return false;
}

// Reconstruct the path from end to start using parent information
function reconstructPath(parent, end) {
    let current = end;
    while (current) {
        const cellElement = document.getElementById(`cell-${current.x}-${current.y}`);
        cellElement.classList.add('path');
        current = parent[current.y][current.x]; // Move to the parent cell
    }
}

// Run the code
createMaze();
bfs(maze, start, end);
