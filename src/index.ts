import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharachterCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';
// Makethis alghorithem to work with almost any sort of iterable
// Change the way we're doing comparaision, becuase of the string
// Handle swaping in different way. *Strings are immutable

const numbersCollection= new NumbersCollection( [10, -3, -5, 0])
const numberSorter = new Sorter(numbersCollection);
numberSorter.sort()
console.log(numbersCollection.data);

const charachterCollection = new CharachterCollection("knight")
const stringSorter = new Sorter(charachterCollection);
stringSorter.sort()
console.log(charachterCollection.data);

const linkedList = new LinkedList()
linkedList.add(10)
linkedList.add(-3)
linkedList.add(-5)
linkedList.add(0)
const linkedListSorter = new Sorter(linkedList);
linkedListSorter.sort()
linkedList.print()
