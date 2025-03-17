import { CacheType, ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js';

export const ping_command = {
	data: new SlashCommandBuilder().setName('ping').setDescription('answer pong'), async execute(interaction: ChatInputCommandInteraction<CacheType>) {
		await interaction.reply('Pong!');
	} };

