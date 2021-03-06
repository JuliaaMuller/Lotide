# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @juliamuller/lotide`

**Require it:**

`const _ = require('@juliamuller/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:


* `function assertArraysEqual(array1, array2)`: asserts if two arrays are identical ;
* `assertEqual(actual, expected)`: asserts if two values are identical;
* `assertObjectsEqual(actual, expected)`: asserts if two objects are identical;
* `countLetters(strings)`: takes in string, outputs an object containing number count value of each letter that appears;
* `countOnly(allItems, itemsToCount)`: takes in an array and an object, returns new object that contains the count of all array elements present in object;
* `eqArrays(array1, array2)`: checks to see if two arrays are equal;
* `eqObjects(object1, object2)`: checks to see if two objects are equal;
* `findKey(object, callback)`: takes in object, and callback condition. if object contains callback condition, return key;
* `findKeyByValue(obj, name)`: takes in an object and a key, loops through object looking for the key;
* `head(array, result)`: takes in array, returns first value in the array;
* `letterPositions(sentence)`: takes in a string, returns object with letter positions;
* `map(array, callback)`: takes in array and callback function, returns array after modification of callback function;
* `middle(array)`: takes in array, counts array length for even or odd and then returns middle value or the averaged value of the middle 2
* `tail(array)`: takes in array, removes arr[0] and returns the rest
* `takeUntil(array, callback)`: takes in array and callback function, return array contents until callback function's requirements are satsified
* `without(arrayIn, arraySupp)`: takes in 2 arrays, returns a new array without the items in rmvArray