<script>
    export let data;
    import Date from '$lib/components/Date.svelte';
    import { dateStore } from '../../store.js';
    import { onMount } from 'svelte';

    onMount(() => {
        if (data && data.items) {
            dateStore.set(data.items);
        }
    });
    // $: console.log($dateStore);
</script>

<h1 class="text-center text-2xl">Dates</h1>
<ul>
    {#each $dateStore as item}
        <Date date = {item}/>
    {/each}
</ul>