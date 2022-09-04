// private class fields
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
