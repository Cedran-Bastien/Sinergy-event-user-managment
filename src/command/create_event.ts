import {
	CacheType,
	ChatInputCommandInteraction,
	SlashCommandBuilder,
} from 'discord.js';
import { EventUserList } from '../entities/event_user_list';
import { LobbyDisplayBuilder } from '../component/molecule/Lobby_display';

export const create_event_command = {
	data: new SlashCommandBuilder().setName('create_event').setDescription('Create an event'), async execute(interaction: ChatInputCommandInteraction<CacheType>) {
		const event_list = new EventUserList();

		const lobby_display = LobbyDisplayBuilder(event_list);
		const create_response = await interaction.reply(lobby_display);

		const collector = create_response.createMessageComponentCollector();

		collector.on('collect', async i => {
			try {
				if (i.customId === 'join') {
					event_list.addUser(i.user);
					const lobby_display_updated = LobbyDisplayBuilder(event_list);
					await i.update(lobby_display_updated);
				}
				else if (i.customId === 'leave') {
					event_list.deleteUser(i.user);
					const lobby_display_updated = LobbyDisplayBuilder(event_list);
					await i.update(lobby_display_updated);
				}
			}
			catch {
				await interaction.editReply({ content: 'i not received within 1 minute, cancelling', components: [] });
			}
		});
	} };

