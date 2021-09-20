import { Sorter } from "./Sorter";

export class CharachterCollection extends Sorter{
    constructor(public data: string){
        super();
    }

    get length() {
        return this.data.length;
    }

    compare(lefIndex: number): boolean {
        return this.data[lefIndex].toLowerCase() >  this.data[lefIndex + 1].toLowerCase()
    }

    swap(lefIndex: number): void{
        const characters = this.data.split('');
        const leftHand = characters[lefIndex];
        characters[lefIndex] = characters[lefIndex + 1];
        characters[lefIndex + 1] = leftHand;
        this.data = characters.join('');
    }
}