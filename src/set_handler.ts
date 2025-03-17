import { Client, Events } from 'discord.js';
import { ping_command } from './command/ping';

export const set_handler = (client: Client<boolean>) => {
	client.on(Events.InteractionCreate, async (interaction) => {
		if (!interaction.isChatInputCommand()) return;

		await ping_command.execute(interaction);
	});
};