<script>
	export let appointment;
	import { timeslotStore, dateStore, selectedDateStore } from '../../store';

	let date = $dateStore.find(date => date.id === appointment.theDateId);
</script>

{#if !$selectedDateStore || appointment.theDateId === $selectedDateStore}
	<tr class="white even:bg-slate-100">
		<td class="px-4 py-2">
			{#if date}
				{date.year}.{date.month}.{date.day}
			{/if}
			{#if !date}
				{appointment.theDateId}
			{/if}	
		</td>
		<td class="px-4 py-2">
			{$timeslotStore.find(time => time.id === appointment.timeslotId)?.starttime}
		</td>
		<td class="px-4 py-2">{appointment.name}</td>
		<td class="px-4 py-2">{appointment.breed}</td>
		<td class="px-4 py-2">{appointment.state}</td>
	</tr>
{/if}
