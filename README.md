### Maze Solver - BFS Pathfinding

This project demonstrates a **Maze Solver** using **Breadth-First Search (BFS)** to find the shortest path between a starting point and a goal on a maze. The maze is represented on a 2D grid, where `0` denotes an open path and `1` represents a wall.

### Features:
1. **Breadth-First Search Algorithm**:
   - BFS is used to explore the maze level by level. It guarantees that the shortest path (if one exists) will be found.
   - The algorithm explores all neighboring cells before moving to the next level, ensuring that the shortest path is always discovered first.
   
2. **Interactive Visualization**:
   - The maze is visually displayed on a 20x20 grid, with different colors to distinguish between walls, paths, and the start/end points.
   - The BFS algorithm’s progress is represented in real-time on the grid, providing visual feedback as it explores the maze.

3. **Path Reconstruction**:
   - Once the goal is reached, the algorithm reconstructs the shortest path by tracing back from the end point to the start point using the parent references stored during BFS.

4. **Performance Analysis**:
   - The code measures and logs the time taken to find the path, providing insight into the efficiency of BFS for solving the maze.

### Key Files:
1. **HTML (index.html)**:
   - Contains the structure of the maze solver application, including the title, layout, and linking to the CSS and JavaScript files.
   
2. **CSS (style.css)**:
   - Provides the styles for displaying the maze and its elements (walls, paths, start/end).
   
3. **JavaScript (script.js)**:
   - Implements the BFS algorithm to solve the maze, along with functions to create the maze, visualize the algorithm’s process, and reconstruct the path.

### Setup:
1. Clone or download the repository.
2. Ensure you have all the files (HTML, CSS, and JavaScript) in the same directory.
3. Open `index.html` in a web browser to interact with the maze solver.

### Installation:
1. Clone the repository:
   ```bash
   git clone https://github.com/MohitKumarSingh01/Maze-Solver.git
   ```
2. Navigate to the directory:
   ```bash
   cd maze-solver
   ```
3. Open `index.html` in any web browser.

### How to Use:
1. The maze is displayed as a 20x20 grid with walls and open paths.
2. The BFS algorithm will start at the top-left corner (start point) and search for the shortest path to the bottom-right corner (end point).
3. The maze solver will visually highlight the path found by BFS in yellow and the start and end points with icons.

### Example:
- **Start**: `(0, 0)` (top-left corner)
- **End**: `(19, 9)` (bottom-right corner)

### Code Explanation:
1. **Maze Representation**:
   - The maze is represented as a 2D array where `0` indicates an open space and `1` indicates a wall.
   
2. **BFS Algorithm**:
   - A queue is used to explore the maze, starting from the start position.
   - The algorithm explores all possible directions (up, down, left, right) and checks whether the new position is within bounds and not yet visited.
   - If a cell is valid and open, it is added to the queue for further exploration. The parent of each cell is recorded for path reconstruction.

3. **Reconstruct Path**:
   - Once the goal is reached, the path is reconstructed by following the parent cells from the goal to the start.
   
4. **Performance**:
   - The `performance.now()` function measures the time taken for the BFS search, giving insights into the algorithm's efficiency.

### Example Output:
Upon running the script, the maze will be displayed with walls marked in black, the start point in the top-left corner, and the end point in the bottom-right corner. The BFS algorithm will explore the maze, and the path will be highlighted in yellow.

### License:
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

### Contributions:
Feel free to fork this project, make improvements, or open issues if you encounter any bugs.

For further improvements, you could:
- Add different maze generation algorithms.
- Implement other pathfinding algorithms like A* or DFS for comparison.

---

### Notes:
1. The maze is hardcoded in the `script.js` file. You can modify the `maze` array to create different mazes.
2. The algorithm assumes that the start and end points are accessible and part of the open path (`0`).

You can explore and contribute to the project via the GitHub repository: [Maze Solver - BFS Pathfinding](https://github.com/MohitKumarSingh01/Maze-Solver).
