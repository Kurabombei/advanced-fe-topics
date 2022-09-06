function swap<T, U>(tuple: readonly [T, U]): [U, T] {
	const [first, second] = tuple;
	return [second, first];
}

const keyValuePair: readonly [number, string] = [1, 'one']; // here is the catch. Type
const valueKeyPair = swap(keyValuePair); // throws error if type is not set for keyValue

console.log(keyValuePair);
console.log(valueKeyPair);