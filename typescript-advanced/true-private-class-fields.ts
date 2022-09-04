// private class fields
/**
 * Usage of #field over private _field ->
 * 1) private can be accessed outside of class with object["_field"] = -5, which is not private at all;
 * 2) #field does not even show in dropdown menu of fields of object, and is not a valid syntax.
 *
 * 2*) #field has a little caveat, it needs to be run in ES2015 and higher.
 * If truly private field should run in ES2015 and lower:
 * - do it as a closure,
 *
 *
 * **/




class Person {
	private _age: number = 0;

	get age(){
		return this._age;
	}

	birthday() {
		this._age++;
	}
}

// true private field
class PrivatePerson {
	// @ts-ignore
	#age: number = 0;

	get age(){
		return this.#age;
	}

	birthday() {
		this.#age++;
	}
}

// not working, I can get _age and change it;
const john = new Person();
john.birthday();
john.birthday();
john['_age'] = -5; // private doesn't help;

console.log('john.age', john.age); // age: -5;

// not working, i can get _age and change it;
const jack = new PrivatePerson();
jack.birthday();
jack.birthday();
// jack['#age'] = -5; // ts error. Private identifier;

console.log('jack.age', jack.age); // age: 2;
