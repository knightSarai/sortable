import { Sorter } from "./Sorter";

class Node {
    next: Node | null= null;
    constructor(public data: number){}
}

export class LinkedList extends Sorter {
    head: Node | null = null;

    get length(): number{
        if(!this.head) return 0;
        let length = 0
        let currentNode = this.head;
        while (currentNode.next) {
            length++;
            currentNode = currentNode.next;
        }
        return length;
    }

    add(data: number): void {
        const node = new Node(data);

        if(!this.head) {
            this.head = node;
            return;
        }

        let currentNode = this.head;
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = node;
    }

    at(index: number): Node {
        if(!this.head) {
            throw new Error("Index Out of bounds")
        }

        let currentNode: Node | null = this.head;
        let counter = 0;
        while (currentNode.next) {
            if(counter === index) return currentNode;
            counter++;
            currentNode = currentNode.next;
        }
        throw new Error("Index out of bounds")
    }

    compare(lefIndex: number): boolean {
        if(!this.head) throw new Error("List is empty");
        return this.at(lefIndex).data > this.at(lefIndex + 1).data;
    }

    swap(lefIndex: number): void{
        // TODO: Swap the refrences instead of the data
        const leftHand = this.at(lefIndex).data;
        this.at(lefIndex).data = this.at(lefIndex + 1).data;
        this.at(lefIndex + 1).data = leftHand
    }

    print(): void {
        if (!this.head) return;
        let currentNode: Node | null = this.head;
        let listRepersintaion = ``;
        while (currentNode) {
            listRepersintaion  += `${currentNode.data}`
            currentNode = currentNode.next;
            listRepersintaion += currentNode ? ` -> ` : ''
        }
        console.log(listRepersintaion);
        
    }
}