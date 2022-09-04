// typescript will trust us with !, yet not recommended to use it.
/**
 *  The safest way to work with properties is to initialize all of them in the constructor.
 *  That's what I would recommend. If you initialize all of your properties in the constructor,
 *  you don't need a definite assignment assertion and typescript can give you more type safety.
 * **/
class User {
	username!: string;
	constructor(username: string) {
		// this.username = username;
		// if there is no assignment in constructor, property will give error in class type without (!) in name!
	}

	private initialize(username: string) {
		this.username = username;
	}
}

const user = new User('john');
// user.setUsername('johnvolos');

const username = user.username?.toLowerCase();
console.log(`Username: ${username}`)