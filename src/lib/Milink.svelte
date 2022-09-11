<script>
  import { page } from "$app/stores";

  export let href = '';
  export let title = '';
  export let icono = '';
  

 
</script>


  <a sveltekit:prefetch href={href} class:active={$page.url.pathname === href} 
  >
    <img src="{icono}" alt="" class="w-6 h-6 icon">
    {title}
     
  </a>

<style>

  .icon {
    
    filter: invert(78%) sepia(23%) saturate(104%) hue-rotate(152deg) brightness(94%) contrast(89%);
  }

  
  .active .icon {
    filter: invert(20%) sepia(64%) saturate(308%) hue-rotate(169deg) brightness(92%) contrast(91%);
  }

  .active:focus .icon {
    filter: invert(20%) sepia(64%) saturate(308%) hue-rotate(169deg) brightness(92%) contrast(91%);
  }

  .active:active .icon {
    filter: invert(20%) sepia(64%) saturate(308%) hue-rotate(169deg) brightness(92%) contrast(91%);
  }

</style>