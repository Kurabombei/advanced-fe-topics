function intersperse<T>(array: readonly T[], separator: T): T[] {
	const newArray: T[] = [];
	for (const element of array) {
		if(newArray.length !== 0) {
			newArray.push(separator);
		}
		newArray.push(element);
	}
	return newArray;
}

const values: readonly string[] = ['A', 'B', 'C', 'D']; // here is the catch.
// values.push('F'); // error: TS2339: Property 'push' does not exist on type 'readonly string[]'.
// values.pop(); // error: TS2339: Property 'pop' does not exist on type 'readonly string[]'.
const valuesWithSeparators = intersperse(values, 'X'); // error shows if readonly was not set in type

console.log(values);
console.log(valuesWithSeparators);