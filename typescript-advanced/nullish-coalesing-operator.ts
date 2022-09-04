//Nullish Coalescing Operator ( ?? )
console.log('default OR operator')
console.log('null',null || 2); // res: 2
console.log('undefined',undefined || 2); // res: 2
console.log('0',0 || 2); // res: 2
console.log('false',false || 2); // res: 2
console.log('NaN',NaN || 2); // res: 2
console.log('""',"" || 2); // res: 2

console.log('Nullish Coalescing Operator')
console.log('null',null ?? 2); // res: 2
console.log('undefined',undefined ?? 2); // res: 2
console.log('0',0 ?? 2); // res: 0
console.log('false',false ?? 2); // res: false
console.log('NaN',NaN ?? 2); // res: NaN
console.log('""',"" ?? 2); // res: ""
