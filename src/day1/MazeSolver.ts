// Recursion:
// Base cases:
// 1. off the map
// 2. wall
// 3. then end
// 4. if we have seen it

const dir = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
];

function walk(
    maze: string[],
    wall: string,
    current: Point,
    end: Point,
    seen: boolean[][],
    path: Point[],
): boolean {
    // 1. base case - off the map
    if (
        current.x < 0 ||
        current.x >= maze[0].length ||
        current.y < 0 ||
        current.y >= maze.length
    ) {
        return false;
    }

    // 2. base case - is it a wall
    if (maze[current.y][current.x] === wall) {
        return false;
    }

    // 3. base case - are we at the end
    if (current.x === end.x && current.y === end.y) {
        path.push(end);
        return true;
    }

    // 4. base case - have we seen it
    if (seen[current.y][current.x]) {
        return false;
    }

    // pre
    seen[current.y][current.x] = true;
    path.push(current);

    // recurse
    for (let i = 0; i < dir.length; i++) {
        const [x, y] = dir[i];
        const moveTo = {
            x: current.x + x,
            y: current.y + y,
        };

        if (walk(maze, wall, moveTo, end, seen, path)) {
            return true;
        }
    }
    // post
    path.pop();

    return false;
}

export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    const seen: boolean[][] = [];
    const path: Point[] = [];
    for (let i = 0; i < maze.length; i++) {
        seen.push(new Array(maze[0].length).fill(false));
    }

    walk(maze, wall, start, end, seen, path);

    return path;
}
