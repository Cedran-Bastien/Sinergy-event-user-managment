import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js';
import { EventUserList } from '../../entities/event_user_list';


export const LobbyDisplayBuilder = (event_list: EventUserList) => {
	const accept = new ButtonBuilder().setCustomId('join').setLabel('Join').setStyle(ButtonStyle.Success);
	const reject = new ButtonBuilder().setCustomId('leave').setLabel('Leave').setStyle(ButtonStyle.Danger);
	const action_row = new ActionRowBuilder<ButtonBuilder>().addComponents(accept, reject);

	return {
		content: `Hey! Event is created, You want to participate ? let's accept! Participant: ${event_list.getUsers()}`, components: [action_row] };
};