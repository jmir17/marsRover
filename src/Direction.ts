const directions = ["N", "E", "S", "W"];

export class Direction {
    private postion = 0;

    toString(): string {
        return directions[this.postion];
    }

    rotateRight(): void {
        this.postion++;
        if (this.postion === 4) this.postion = 0;
    }

    rotateLeft(): void {
        this.postion--;
        if (this.postion === -1) this.postion = 3;
    }
}