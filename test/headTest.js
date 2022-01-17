const assertEqual = require('../assertEqual');
const head = require('../head');

assertEqual(head([]), 5); //false
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); //true