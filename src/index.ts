import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharachterCollection } from './CharactersCollection';

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
