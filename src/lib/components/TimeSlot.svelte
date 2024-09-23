<script>
	export let timeslot, appointment;
</script>

<div class="appointment cursor-pointer" id={timeslot.timeslotId}>
	<ul class="flex bg-slate-100 rounded-lg w-full">
		{#if !appointment}
			<li class="bg-slate-100 p-2 rounded-l-lg">{timeslot.starttime}</li>
			<li class="bg-slate-100 p-2">---</li>
		{/if}
		{#if appointment}
			<li class="bg-orange-100 p-2 rounded-l-lg">{timeslot.starttime}</li>
			<li class="bg-amber-200 p-2 rounded-r-lg flex-1">{appointment.name}</li>
			<!-- <li class="bg-slate-100 p-2"></li> -->
		{/if}
	</ul>
</div>
