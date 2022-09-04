"use strict";
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
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _PrivatePerson_age;
class Person {
    constructor() {
        this._age = 0;
    }
    get age() {
        return this._age;
    }
    birthday() {
        this._age++;
    }
}
// true private field
class PrivatePerson {
    constructor() {
        // @ts-ignore
        _PrivatePerson_age.set(this, 0);
    }
    get age() {
        return __classPrivateFieldGet(this, _PrivatePerson_age, "f");
    }
    birthday() {
        var _a;
        __classPrivateFieldSet(this, _PrivatePerson_age, (_a = __classPrivateFieldGet(this, _PrivatePerson_age, "f"), _a++, _a), "f");
    }
}
_PrivatePerson_age = new WeakMap();
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
// Another way, in a closure:
function createPerson() {
    let age = 0; // here's the catch; (not global scope)
    return {
        incrementAge() {
            age += 1;
        },
        get getAge() {
            return age;
        }
    };
}
const bill = createPerson();
bill.incrementAge();
bill.incrementAge();
bill.incrementAge();
// bill.age = -3; // error Property 'age' does not exist on type '{ incrementAge(): void; readonly getAge: number; }'.(2339)
console.log("bill.getAge", bill.getAge);
