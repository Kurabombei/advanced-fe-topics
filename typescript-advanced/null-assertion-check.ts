// Null checks with assertion functions:
function assertIsNotNullish<T>(
	value: T,
	message: string
): asserts value is NonNullable<T> {
	if(value === null || value === undefined){
		throw Error(message);
	}
}
const root = document.getElementById('root');
// root returns HTMLElement or null type;
assertIsNotNullish(root, "Coundn't find DOM element #root");
// now root is HTMLElement;
root.addEventListener("click", (e) => {
	// ...
})