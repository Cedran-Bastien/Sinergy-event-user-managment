import { Client, Events } from 'discord.js';
import { create_event_command } from '@/command/create_event';

export const set_handler = (client: Client<boolean>) => {
	client.on(Events.InteractionCreate, async (interaction) => {
		if (!interaction.isChatInputCommand()) return;

		await create_event_command.execute(interaction);
	});
};