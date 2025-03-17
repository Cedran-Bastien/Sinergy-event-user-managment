import { User } from 'discord.js';

export class EventUserList {
	private users: User[];


	constructor() {
		this.users = [];
	}

	addUser(user: User) {
		if (this.users.includes(user)) {
			return;
		}
		this.users.push(user);
	}

	deleteUser(user: User) {
		this.users = this.users.filter(user_item => user_item !== user);
	}

	getUsers() {
		return this.users;
	}
}