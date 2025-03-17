import { REST, Routes } from 'discord.js';
import { commands } from './command';

const bot_token = process.env.DISCORD_TOKEN;
const client_id = process.env.CLIENT_ID;

export const register_command = () => {
	const rest = new REST().setToken(bot_token);

	commands.forEach(command => {
		rest.put(Routes.applicationCommands(client_id), { body: [command.data] });
	});
};