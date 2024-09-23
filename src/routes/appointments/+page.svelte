<script>
	import Appointment from '$lib/components/Appointment.svelte';
	import { appointmentStore, dateStore, selectedDateStore } from '../../store.js';
	import { onMount } from 'svelte';
	import Calendar from '$lib/components/Calendar.svelte';
	export let data;

	onMount(() => {
		if (data && data.items) {
			appointmentStore.set(data.items);
		}
	});
	// $: console.log(data.items);
</script>

<div class="container w-full m-auto">
	<section class="m-auto">
		<h2 class="text-center text-5xl">Appointments</h2>
	</section>

	<section class="text-right mt-5">
		<Calendar />
	</section>

	<section class="items-center text-center flex mt-5">
		<table class="table-auto -collapse w-full">
			<thead>
				<tr>
					<th class="text-lg px-4 py-2">Date</th>
					<th class="text-lg px-4 py-2">Timeslot</th>
					<th class="text-lg px-4 py-2">Name</th>
					<th class="text-lg px-4 py-2">Breed</th>
					<th class="text-lg px-4 py-2">Status</th>
				</tr>
			</thead>
			<tbody>
				{#each $appointmentStore as item}
					<Appointment appointment={item} />
				{/each}
			</tbody>
		</table>
	</section>
</div>
