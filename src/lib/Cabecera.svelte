<script lang="ts">

import {page} from '$app/stores'

let urls = $page.url.pathname

function title(path:string) {

  let pagina = path.substring(path.lastIndexOf("/")+1)
  
  return pagina[0].toUpperCase() + pagina.slice(1)
}

let titulo = title(urls)


</script>

<svelte:head>
	<title>{titulo}</title>
</svelte:head>
