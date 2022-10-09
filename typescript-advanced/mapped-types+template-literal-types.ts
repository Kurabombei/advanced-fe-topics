type PropGetters<TObj extends Record<string, any>> = {
	[TKey in string & keyof TObj as `get${Capitalize<TKey>}`]: () => TObj[TKey];
};

function createGetterObject<TObj extends Record<string, any>>(obj: TObj): PropGetters<TObj> {
	const newObj: any = {};
	for (const key of Object.keys(obj)) {
		const capitalizedKey = key[0].toUpperCase() + key.substring(1);
		const getterKey = `get${capitalizedKey}`;
		newObj[getterKey] = () => obj[key];
	}
	return newObj;
}

const userWithGetters = createGetterObject({
	id: 1234,
	name: "John Volos",
	twitter: 'kurabombei'
})
console.log(Object.keys(userWithGetters)); // [ 'getName', 'getTwitter' ]
console.log(userWithGetters); // { getName: [Function (anonymous)], getTwitter: [Function (anonymous)] }
console.log(userWithGetters.getName()); // "John Volos";
console.dir(userWithGetters.getTwitter()); // 'kurabombei';