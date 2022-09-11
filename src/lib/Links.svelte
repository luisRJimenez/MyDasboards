
<script lang="ts">
	import { page } from '$app/stores';
  import Milink from './Milink.svelte';
  import { createEventDispatcher } from 'svelte/internal';

  const dispatch = createEventDispatcher()

  let open:boolean = false

  $: abrir = ()=>dispatch('abrir', open)

  let link:any = [
    {
      href: "/panel",
      title: "Panel",
     
    
      icono: '../home.svg'

    },
    {
      href: "/panel/about",
      title: "About",
     
    
      icono: '../about.svg'

    },
    {
      href: "/panel/ejemplos",
      title: "Ejemplos",
      
     
      icono: '../ejemplo.svg'

    },
    {
      href: "/panel/todos",
      title: "Todos",

   
      icono: '../todos.svg'

    }
  ]

</script>

    <!-- Navbar -->


  <ul tabindex="0"  class="menu py-4 px-4 overflow-y-auto w-80 bg-base-100 ">
    <!-- Navbar menu content here -->
    <!-- class:active={$page.url.pathname === '/about'} -->

    
      
  {#each link as el, key }
    
  <li on:click={abrir} class={$page.url.pathname != el.href?'hover-bordered':'bordered'}  >
    <Milink {...link[key]}/>

  </li>
  {/each}

  
  </ul>

<style lang="postcss">



</style>

    
