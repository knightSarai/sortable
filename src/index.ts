class Sorter {
    constructor(public collection: number[]){}

    sort(): void {
        const {length} = this.collection;
        for (let i = 0; i < length; i++) {
            for(let j=0; j < length - i -1; j++){
                const leftHand = this.collection[j];
                const rightHand = this.collection[j + 1]
               if (leftHand > rightHand){
                this.collection[j] = this.collection[j + 1] 
                this.collection[j + 1] = leftHand;
               }
            }
        }
    }
}

// Makethis alghorithem to work with almost any sort of iterable
// Change the way we're doing comparaision, becuase of the string
// Handle swaping in different way. *Strings are immutable

const collection = [10, 3, -5, 0]
const sorter = new Sorter(collection);
sorter.sort()
console.log(sorter.collection);
