<script>
  import { onDestroy, onMount } from 'svelte';
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';
  import navigationState from '../stores/navigationState';
  import { navigating } from '$app/stores';

  const progress = tweened(0, {
      duration: 2500,
      easing: cubicOut
  });
  const unsubscribe = () => {
      if ($navigating) {
          progress.set(1, { duration: 250 });
      }
  };

  onMount(() => {
      progress.set(0.7);
  });
  onDestroy(() => {
      unsubscribe();
  });
</script>

<progress class="progress progress-primary w-full" value="{$progress * 100}" max="100" >
  <!-- <div class="progress-sliver" style={`--width: ${$progress * 100}%`} /> -->
</progress>

<style>
  .progress {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 0.2rem;
      z-index: 9999;
      
  }
  /* .progress-sliver {
      width: var(--width);
      background-color: #f8485e;
      height: 100vh;
  } */
</style>