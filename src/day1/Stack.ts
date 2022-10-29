class Node<T> {
    value: T;
    prev?: Node<T>;
    constructor(value: T, prev?: Node<T> | undefined) {
        this.value = value;
        this.prev = prev;
    }
}

export default class Stack<T> {
    public length: number;
    public head?: Node<T>;

    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    push(item: T): void {
        this.length++;
        const node = new Node(item);
        if (!this.head) {
            this.head = node;
            return;
        }

        node.prev = this.head;
        this.head = node;
    }
    pop(): T | undefined {
        this.length = Math.max(0, this.length - 1);
        if (this.length === 0) {
            const tempHead = this.head;
            this.head = undefined;
            return tempHead?.value;
        }
        if (this.head) {
            const tempHead = this.head;
            this.head = tempHead.prev;
            return tempHead.value;
        }
        return;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}
