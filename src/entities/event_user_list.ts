import { User } from 'discord.js';

export class EventUserList {
	participant: User[];
	reservist: User[];


	constructor() {
		this.participant = [];
		this.reservist = [];
	}

	addParticipant(user: User) {
		if (this.participant.includes(user)) {
			return;
		}

		if (this.reservist.includes(user)) {
			this.deleteUser(user);
		}

		this.participant.push(user);
	}

	addReservist(user: User) {
		if (this.reservist.includes(user)) {
			return;
		}

		if (this.participant.includes(user)) {
			this.deleteUser(user);
		}

		this.reservist.push(user);
	}

	deleteUser(user: User) {
		this.participant = this.participant.filter(user_item => user_item !== user);
		this.reservist = this.reservist.filter(user_item => user_item !== user);
	}
}