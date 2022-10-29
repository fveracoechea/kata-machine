export default function two_crystal_balls(breaks: boolean[]): number {
    const jumpAmount = Math.floor(Math.sqrt(breaks.length));
    let i = jumpAmount;

    while (i < breaks.length) {
        if (breaks[i]) {
            break;
        }
        i += jumpAmount;
    }

    i -= jumpAmount;

    for (let j = 0; j < jumpAmount + 1 && i < breaks.length; i++, j++) {
        if (breaks[i]) return i;
    }

    return -1;
}
