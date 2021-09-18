"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
// Makethis alghorithem to work with almost any sort of iterable
// Change the way we're doing comparaision, becuase of the string
// Handle swaping in different way. *Strings are immutable
var numbersCollection = new NumbersCollection_1.NumbersCollection([10, -3, -5, 0]);
var numberSorter = new Sorter_1.Sorter(numbersCollection);
numberSorter.sort();
console.log(numbersCollection.data);
var charachterCollection = new CharactersCollection_1.CharachterCollection("knight");
var stringSorter = new Sorter_1.Sorter(charachterCollection);
stringSorter.sort();
console.log(charachterCollection.data);
