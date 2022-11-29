function walk(current: BinaryNode<number> | null, path: number[]): number[] {
    if (!current) return path;

    // * recursion steps
    // pre
    path.push(current.value);

    // recurse
    walk(current.left, path);
    walk(current.right, path);

    // post
    return path;
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}
