import {
	ActionRowBuilder,
	ButtonBuilder, ButtonInteraction,
	ButtonStyle, CacheType,
	EmbedBuilder,
} from 'discord.js';
import { EventUserList } from '@/entities/event_user_list';

export const useEventUi = (event_list: EventUserList) => {
	const getEventUi = () => {
		const join = new ButtonBuilder().setCustomId('join').setLabel('Join').setStyle(ButtonStyle.Success);
		const join_reservist = new ButtonBuilder().setCustomId('join_reservist').setLabel('Join reservists').setStyle(ButtonStyle.Primary);
		const leave = new ButtonBuilder().setCustomId('leave').setLabel('Leave').setStyle(ButtonStyle.Danger);

		const action_row = new ActionRowBuilder<ButtonBuilder>().addComponents(join, join_reservist, leave);

		const embed = new EmbedBuilder().setTitle('Come playing valorant !').addFields([{ name: 'Participant', value: event_list.participant.join('\n') }, { name: 'Reservist', value: event_list.reservist.join('\n') }]);

		return {
			embeds: [embed],
			components: [action_row],
		};
	};


	const onEvent = async (interaction: ButtonInteraction<CacheType>) => {
		try {
			if (interaction.customId === 'join') {
				event_list.addParticipant(interaction.user);
			}
			if (interaction.customId === 'join_reservist') {
				event_list.addReservist(interaction.user);
			}
			if (interaction.customId === 'leave') {
				event_list.deleteUser(interaction.user);
			}

			const lobby_display_updated = getEventUi();
			await interaction.update(lobby_display_updated);
		}
		catch {
			await interaction.editReply({ content: 'Failed to reply query', components: [] });
		}
	};

	return {
		reply: getEventUi(),
		onEvent,
	};
};