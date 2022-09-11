<script>
  import {page} from '$app/stores'
  import Transicion from '$lib/Transicion.svelte';
  
 
  import '../app.css';

</script>





    

<main >
  
<Transicion url={$page.url.pathname}>

  <slot/>
</Transicion>

        
<footer>
  <p>visit <a class="link-accent link-hover" href="https://kit.svelte.dev">LuisRJimenez</a> Desarrollador Full Stack</p>
</footer>
</main>






<style>
   main {
    
		display: flex;
		flex-direction: column;
		padding: 1rem 1rem 0rem 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
    min-height: 100vh;
    justify-content: space-between;
    
    background-color: transparent;
    overflow: hidden;
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