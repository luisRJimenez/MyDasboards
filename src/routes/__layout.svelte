<script lang="ts">
import Transicion from '$lib/Transicion.svelte';
import {page} from '$app/stores'
import Navbar from '$lib/Navbar.svelte';


import '../app.css';
let open:boolean

</script>





<div class="drawer drawer-mobile ">
	
  <input id="my-drawer-1" type="checkbox" 
	class="drawer-toggle" bind:checked={open}
 />

  <div class="drawer-content flex flex-col ">
    <!-- Page content here -->
		
		<Navbar />
		
	


		<main class="overflow-hidden">
			<Transicion url={$page.url.pathname}  >
				<slot/>
			</Transicion>
		</main>
		
		<footer>
			<p>visit <a class="link-accent link-hover" href="https://kit.svelte.dev">LuisRJimenez</a> Desarrollador Full Stack</p>
		</footer>
  </div> 
	

  
</div>


<style lang="postcss">
	
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
		

	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
		
	}

	

</style>
