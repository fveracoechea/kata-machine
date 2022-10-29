class Node<T> {
    value: T;
    next?: Node<T>;
    constructor(value: T, next?: Node<T> | undefined) {
        this.value = value;
        this.next = next;
    }
}

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        this.length++;
        const node = new Node(item);
        if (!this.tail) {
            this.tail = this.head = node;
        }

        this.tail.next = node;
        this.tail = node;
    }

    deque(): T | undefined {
        if (!this.head) {
            return undefined;
        }
        this.length--;
        const tempHead = this.head;
        this.head = this.head.next;
        if (this.length === 0) {
            this.tail = undefined;
        }
        return tempHead.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}
