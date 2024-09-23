<script>
	import { appointmentStore, dateStore, selectedDateStore } from '../../store.js';

	let selectedDate = null;
	let currentYear = 2024;
	let currentMonth = new Date().getMonth();
	let daysInMonth = [];
	let showCalendar = false;

	function toggleCalendar() {
		showCalendar = !showCalendar;
	}

	// Calculate the days in the current month
	function generateDays(year, month) {
		const days = [];
		const date = new Date(year, month, 1);
		while (date.getMonth() === month) {
			days.push(new Date(date));
			date.setDate(date.getDate() + 1);
		}
		return days;
	}

	// Recalculate days when the month or year changes
	$: daysInMonth = generateDays(currentYear, currentMonth);

	// Navigate between months
	function prevMonth() {
		if (currentMonth === 0) {
			currentMonth = 11;
			currentYear--;
		} else {
			currentMonth--;
		}
	}

	function nextMonth() {
		if (currentMonth === 11) {
			currentMonth = 0;
			currentYear++;
		} else {
			currentMonth++;
		}
	}

	// Select the day and store the selectedDateId
	function selectDate(day) {
		selectedDate = day;

		const selectedDateId = $dateStore.find(
			(d) =>
				d.day === day.getDate() && 
				d.month === day.getMonth() + 1 && 
				d.year === day.getFullYear()
		)?.id;
		selectedDateStore.set(selectedDateId);
	}

	// Reset selected date
	function reset() {
		selectedDate = null;
		selectedDateStore.set(0);
	}

	// $: console.log($selectedDateStore);
</script>

<!-- Calendar Component -->
<div class="inline-flex">
	<button on:click={toggleCalendar} class="border rounded-lg p-2 hover:bg-slate-100">
		{selectedDate
			? `${selectedDate.getDate()}/${selectedDate.getMonth() + 1}/${selectedDate.getFullYear()}`
			: 'Select Date'}
	</button>
	<button on:click={reset} class="p-2 hover:bg-slate-100 text-black rounded">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="w-6 h-6">
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"/>
		</svg>
	</button>
</div>

<!-- Calendar Dropdown -->
{#if showCalendar}
	<div class="calendar mt-2">
		<div class="header flex justify-between mb-2">
			<button on:click={prevMonth}>&lt; Prev</button>
			<h3>{currentMonth + 1}/{currentYear}</h3>
			<button on:click={nextMonth}>Next &gt;</button>
		</div>
		<div class="grid grid-cols-7 gap-1">
			{#each daysInMonth as day}
				<button
					class="border p-2"
					class:selected={selectedDate && selectedDate.getTime() === day.getTime()}
					on:click={() => {
						selectDate(day);
						toggleCalendar();
					}}>
					{day.getDate()}
				</button>
			{/each}
		</div>
	</div>
{/if}

<style>
	.calendar {
		max-width: 400px;
		margin: auto;
	}

	.selected {
		background-color: lightblue;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(7, 1fr);
	}
</style>
