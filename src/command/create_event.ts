import {
	CacheType,
	ChatInputCommandInteraction,
	SlashCommandBuilder,
} from 'discord.js';
import { EventUserList } from '@/entities/event_user_list';
import { useEventUi } from '@/hooks/useEventUi';


export const create_event_command = {
	data: new SlashCommandBuilder().setName('create_event').setDescription('Create an event'),
	async execute(interaction: ChatInputCommandInteraction<CacheType>) {
		const event_list = new EventUserList();

		const { reply, onEvent } = useEventUi(event_list);

		const create_response = await interaction.reply(reply);

		const collector = create_response.createMessageComponentCollector();

		collector.on('collect', onEvent);
	} };

