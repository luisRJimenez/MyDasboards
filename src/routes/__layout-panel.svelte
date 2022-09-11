

<script lang="ts">


  import {page} from '$app/stores'
  import Transicion from '$lib/Transicion.svelte';
  import Navbar from '$lib/Navbar.svelte';
  import Links from '$lib/Links.svelte';
  import { fade } from 'svelte/transition';
  import PageLoader from '$lib/Pageloader.svelte';
  
  import { navigating } from '$app/stores';
  import '../app.css';

  let open:boolean

  function evento(e:any){
    open = e.detail
  }

  </script>
  


  {#if $navigating}
    <div out:fade={{ duration: 0, delay: 300 }}>
        <PageLoader />
    </div>
    {/if}


  <div class="drawer drawer-mobile ">
  
      
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" bind:checked={open}
   />

    <div class="drawer-content flex flex-col scrollbar ">
      <!-- Page content here -->
      <Navbar />

      

    

      <main>
        <Transicion url={$page.url.pathname}  >
        <slot/>
      </Transicion>
      </main>

        
  
  
      <footer>
        <p>visit <a class="link-accent link-hover" href="https://kit.svelte.dev">LuisRJimenez</a> Desarrollador Full Stack</p>
      </footer>
      
    
    
    </div> 
    <div class="drawer-side">
      <label for="my-drawer-2" class="drawer-overlay"></label> 
      <Links on:abrir={evento} />
    
    
    </div>
  
  </div>


  <style>
    
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

    .scrollbar::-webkit-scrollbar {
    width: 10px;
    height: 4px;
    border-radius: 100vh;
    }

    .scrollbar::-webkit-scrollbar-track {
        border-radius: 100vh;
        background: #74726c;
    }

    .scrollbar::-webkit-scrollbar-thumb {
        background: #504c4c;
        border-radius: 100vh;
        border: 3px solid #3e3f3c;
    }

    .scrollbar::-webkit-scrollbar-thumb:hover {
        background: #958792;
    }
  </style>
  

