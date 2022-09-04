"use strict";
var _a;
// typescript will trust us with !, yet not recommended to use it.
/**
 *  The safest way to work with properties is to initialize all of them in the constructor.
 *  That's what I would recommend. If you initialize all of your properties in the constructor,
 *  you don't need a definite assignment assertion and typescript can give you more type safety.
 * **/
class User {
    constructor(username) {
        // this.username = username;
        // if there is no assignment in constructor, property will give error in class type without (!) in name!
    }
    initialize(username) {
        this.username = username;
    }
}
const user = new User('john');
// user.setUsername('johnvolos');
const username = (_a = user.username) === null || _a === void 0 ? void 0 : _a.toLowerCase();
console.log(`Username: ${username}`);
