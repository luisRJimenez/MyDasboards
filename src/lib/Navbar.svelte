<script lang="ts">
 import {page} from '$app/stores'

let urls = $page.url.pathname
</script>
<div class="w-full navbar bg-base-300 sticky top-0 z-10">
  {#if urls != '/' }
    
  <div class="lg:hidden">
    <label tabindex="0" for="my-drawer-2" class="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
    </label>
  </div> 
  {/if}
  <div class="navbar-start px-2 mx-2"><a href="/" class="btn btn-ghost normal-case text-xl">Navbar</a></div>
  
  <div class="navbar-end mr-4">
    
    <ul class="menu menu-horizontal">
      
      <li><a href="/panel">Panel</a></li>
      <li><a href="/auth/register">Register</a></li>
      <li><a href="/auth/login">Login</a></li>
    </ul>

  
    <div class="dropdown dropdown-end">
      <label for="" tabindex="0" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
          <img src="https://placeimg.com/80/80/people" alt=""/>
        </div>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a href="/" class="justify-between">
            Profile
            <span class="badge">New</span>
          </a>
        </li>
        <li><a href="/">Settings</a></li>
        <li><a href="/">Logout</a></li>
      </ul>
    </div>


  </div>
</div>