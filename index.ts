import 'dotenv/config';
import { Client, Events, GatewayIntentBits } from 'discord.js';
import { ping_command } from './src/command/ping';
import { register_command } from './src/register_command';

const bot_token = process.env.DISCORD_TOKEN;

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.on(Events.InteractionCreate, async (interaction) => {
	if (!interaction.isChatInputCommand()) return;
	console.log(interaction.commandName);

	await ping_command.execute(interaction);
});

register_command();

client.login(bot_token);