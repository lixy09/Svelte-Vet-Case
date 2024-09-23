<script>
	import { onMount } from 'svelte';
	import { apiUrl } from '../../config';
	import TimeSlot from './TimeSlot.svelte';
	import { appointmentStore, dateStore, timeslotStore, selectedDateStore } from '../../store';

	let timeslots = [];
	let loading = true;
	let error = null;

	// Fetching timeslots on component mount
	onMount(async () => {
		try {
			// first fetch
			const response = await fetch(`${apiUrl}/timeslots/`);
			const itemUrls = await response.json();
			// console.log(itemUrls);

			// second fetch
			const itemPromises = itemUrls.data.map(async (url) => {
				const res = await fetch(`${apiUrl}${url}`);
				return res.json();
			});

			// wait for all fetches
			timeslots = await Promise.all(itemPromises);
			timeslotStore.set(timeslots);
		} catch (err) {
			error = err.message;
		} finally {
			loading = false;
		}
	});

	// $: console.log($timeslotStore, $appointmentStore, $dateStore[0]);
</script>

<!-- Loading state -->
{#if loading}
	<p>Loading...</p>
{/if}

<!-- Error state -->
{#if error}
	<p>Error: {error}</p>
{/if}

<!-- Render timeslots when available -->
{#if !loading && !error}
	<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
		{#each $timeslotStore as item}
			<TimeSlot timeslot={item} 
			appointment={$appointmentStore.find((app) => parseInt(app.timeslotId) === parseInt(item.id) && parseInt(app.theDateId) === $selectedDateStore)} />
		{/each}
	</div>
{/if}
