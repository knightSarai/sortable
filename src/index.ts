import { NumbersCollection } from './NumbersCollection';
import { CharachterCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';
// Makethis alghorithem to work with almost any sort of iterable
// Change the way we're doing comparaision, becuase of the string
// Handle swaping in different way. *Strings are immutable

const numbersCollection= new NumbersCollection( [10, -3, -5, 0])
numbersCollection.sort()
console.log(numbersCollection.data);

const charachterCollection = new CharachterCollection("knight")
charachterCollection.sort()
console.log(charachterCollection.data);

const linkedList = new LinkedList()
linkedList.add(10)
linkedList.add(-3)
linkedList.add(-5)
linkedList.add(0)
linkedList.sort()
linkedList.print()
