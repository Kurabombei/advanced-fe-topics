"use strict";
//Nullish Coalescing Operator ( ?? )
console.log('default OR operator');
console.log('null', null || 2); // res: 2
console.log('undefined', undefined || 2); // res: 2
console.log('0', 0 || 2); // res: 2
console.log('false', false || 2); // res: 2
console.log('NaN', NaN || 2); // res: 2
console.log('""', "" || 2); // res: 2
console.log('Nullish Coalescing Operator');
console.log('null', null !== null && null !== void 0 ? null : 2); // res: 2
console.log('undefined', undefined !== null && undefined !== void 0 ? undefined : 2); // res: 2
console.log('0', 0 !== null && 0 !== void 0 ? 0 : 2); // res: 0
console.log('false', false !== null && false !== void 0 ? false : 2); // res: false
console.log('NaN', NaN !== null && NaN !== void 0 ? NaN : 2); // res: NaN
console.log('""', "" !== null && "" !== void 0 ? "" : 2); // res: ""
