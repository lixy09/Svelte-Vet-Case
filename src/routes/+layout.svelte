<script>
	import '../app.css';
</script>

<div class="flex flex-col h-screen justify-between">
	<nav class="bg-orange-50 p-4 shadow-sm">
		<div class="flex items-left">
			<a href="/" class="nav-item"><h1 class="text-xl font-semibold">🐍 Veterinarian</h1></a>
			<a href="/appointments" class="nav-item"><h1 class="text-lg ml-5">Appointments</h1></a>
			<a href="/dates" class="nav-item"><h1 class="text-lg ml-5">Dates</h1></a>

		</div>
	</nav>
	
	<main>
		<slot />
	</main>

	<footer class="">
		<p class="p-2 text-center">Made with ❤️ </p>
	</footer>
</div>

<style>
	.nav-item {
        transition: background-color 0.3s ease, color 0.3s ease;
    }

    .nav-item:hover {
        color: #f6d7a0;
    }
</style>
