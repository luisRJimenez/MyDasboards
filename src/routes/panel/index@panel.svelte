<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Cabecera from '$lib/Cabecera.svelte';
	import Counter from '$lib/Counter.svelte';
</script>



<Cabecera/>
<section >
	<h1 class="text-4xl">
		<div class="welcome">
			<picture>
				<source srcset="svelte-welcome.webp" type="image/webp" />
				<img src="svelte-welcome.png" alt="Welcome" />
			</picture>
		</div>
		<span>to your new </span><br/>
		<span>SvelteKit app</span>		
		
	</h1>

	<h2 class="py-4">
		try editing <strong>src/routes/index.svelte</strong>
	</h2>

	<Counter />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
		
	}

	h1 {
		width: 100%;
		text-align: center;
		padding-top: 1.5rem;
		padding-bottom: 1.5rem;
		
	
	}

	.welcome {
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
