export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length;

    do {
        const midPoint = Math.floor(low + (high - low) / 2);
        const value = haystack[midPoint];

        if (value === needle) {
            return true;
        } else if (value > needle) {
            high = midPoint;
        } else {
            low = midPoint + 1;
        }
    } while (low < high);

    return false;
}
