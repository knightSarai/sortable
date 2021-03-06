import { Sorter } from "./Sorter";

export class NumbersCollection extends Sorter{
    constructor(public data: number[]){
        super();
    }

    get length() {
        return this.data.length;
    }

    compare(lefIndex: number): boolean {
        return this.data[lefIndex] >  this.data[lefIndex + 1]
    }

    swap(lefIndex: number): void{
        const leftHand = this.data[lefIndex];
        this.data[lefIndex] = this.data[lefIndex + 1];
        this.data[lefIndex + 1] = leftHand
    }
}