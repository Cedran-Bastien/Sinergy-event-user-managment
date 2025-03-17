import 'dotenv/config';
import { Client, Events, GatewayIntentBits } from 'discord.js';
import { register_command } from './src/register_command';
import { set_handler } from './src/set_handler';

const bot_token = process.env.DISCORD_TOKEN;

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

set_handler(client);

register_command();

client.login(bot_token);