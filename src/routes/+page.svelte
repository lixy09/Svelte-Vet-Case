<script>
	import Calendar from '$lib/components/Calendar.svelte';
	import Client from '$lib/components/Client.svelte';
	import Clients from '$lib/components/Clients.svelte';
	import TimeSlots from '$lib/components/TimeSlots.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="container w-full mx-auto">
	<section class="mt-10">
		<h2 class="text-6xl">
			Ap<span class="inline-block bg-pink-500 rounded-lg p-2">pointments</span>
		</h2>
	</section>
	<section class="text-right mb-5">
		<Calendar />
	</section>
	<section class="flex flex-col lg:flex-row mt-5">
		<div class="basis-4/6 bg-slate-50 rounded-lg p-10 lg:mr-8">
			<TimeSlots />
		</div>
		<div id="details" class="basis-2/6 bg-slate-50 rounded-lg p-10 sm:mt-4 lg:mt-0">
			<Client />
		</div>
	</section>
</div>
<div class="container w-full mx-auto mt-4">
	<section class="mt-4">
		<h2 class="text-4xl">
			Cl<span class="inline-block bg-emerald-200 rounded-lg p-2">ients</span>
		</h2>
	</section>
	<section class="flex flex-col lg:flex-row mt-5">
		<div class="basis-4/6 bg-slate-50 rounded-lg p-10 lg:mr-8">
			<!-- <Clients clients={timeSlots} /> -->
			<Clients />
		</div>
	</section>
</div>

<style>
</style>
