"use strict";
function intersperse(array, separator) {
    const newArray = [];
    for (const element of array) {
        if (newArray.length !== 0) {
            newArray.push(separator);
        }
        newArray.push(element);
    }
    return newArray;
}
const values = ['A', 'B', 'C', 'D'];
const valuesWithSeparators = intersperse(values, 'X');
console.log(values);
console.log(valuesWithSeparators);
