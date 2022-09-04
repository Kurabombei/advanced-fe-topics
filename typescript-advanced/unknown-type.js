"use strict";
// unknown type practice
function assert(condition, message) {
    if (!condition) {
        throw Error(message);
    }
}
function assertIsNumber(value, name) {
    if (typeof value !== 'number') {
        throw Error(`Expected ${name} to be a number`);
    }
}
function range(from, to) {
    assertIsNumber(from, 'from');
    assertIsNumber(to, 'to');
    const values = [];
    for (let i = from; i < to; i++) {
        values.push(i);
    }
    return values;
}
// console.log(range(-5, 'A'));
