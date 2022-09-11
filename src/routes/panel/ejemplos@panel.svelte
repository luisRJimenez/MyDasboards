<script context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<script lang="ts">
  import Title1 from '$lib/Title1.svelte'
  import Title2 from '$lib/Title2.svelte'
  import Contador from '$lib/Counter.svelte'
  import { fade } from "svelte/transition";
  import { flip } from "svelte/animate";
  import { quintOut } from "svelte/easing";
  import Mylink from '$lib/Milink.svelte';
  import Cabecera from '$lib/Cabecera.svelte';

  const myHtml = "<span><strong>My text:</strong> text</span>"

  function hasClick(e: any) {
		alert("I've been clicked!!!")
    console.log(e.target)
	}

  let link = [
    
    {
      href: "http://www.mysite.com",
      title: "my sitie",
     
    
    }
    ]

  let list: any[] = [1, 2, 3];
  
  export let condition = false;

  let component = Title1
  let name = 'world';

  let num = 0
    $: squared = num * num
    $: cubed = squared * num
    $: reducir = cubed/ num

    function myFunction(node: any) {
    // the node has been mounted in the DOM
		console.log("Node mounted in the DOM")
    return {
      destroy() {
        // the node has been removed from the DOM
				console.log("Node removed from the DOM")
      }
    };
  }

</script>



<Cabecera/>
<section>
  <div use:myFunction>Use</div>
  <Mylink {...link[0]}></Mylink>
  <select bind:value={component}>
    <option value={Title1}>Title 1</option>
    <option value={Title2}>Title 2</option>
    <option value={Contador}>Contador</option>
  </select>
  
  
  <svelte:component this={component}></svelte:component>

 
  
  <button class="btn" on:click={() => num = num + 1}>
    Increment: {num}
  </button>
  
  <p>{squared}</p>
  <p>{cubed}</p>
  <p>{reducir}</p>

  <button class="btn" on:click={()=> condition = !condition}>
    Toggle
  </button>

  {#if condition}
  <div class="touster" transition:fade={{ delay: 250, duration: 2000 }}>
    fades in  and out
  </div>
{/if}

{#each list as n (n)}
  <div animate:flip={{ 
    delay: 250, 
    duration: 2000, 
    easing: quintOut
  }}>
    {n}
  </div>
{/each}

<button class="btn" on:click={() => {
  let n = list.pop()
 
  list = [n, ...list]
}}>
Cycle
</button>

{@html '<div>Contenido</div>'}
{@html myHtml}

<button on:click={hasClick}>
  Press me
</button>
<button on:click={() => console.log('I was pressed')}>
  Press me
</button>
<button on:click|once={hasClick}>
  Press me once!!!
</button>
<button on:submit|preventDefault={hasClick}>
  Press me
</button>
</section>
 

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
		
	}
  .touster {
    position: absolute;
    top:0;
    right: 0;
		padding: 10px;
		background-color: #ff3d00e0;
		color: white;
		margin: 2px;
		text-align: center;
    z-index: 9999;
	}

  div {
    width: 300px;
		padding: 10px;
		background-color: #ff3d00e0;
		color: white;
		margin: 2px;
		text-align: center;
	}

</style>