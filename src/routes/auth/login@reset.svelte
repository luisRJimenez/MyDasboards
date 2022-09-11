<script lang="ts">
import Cabecera from '$lib/Cabecera.svelte';
import loginOfficeDark from '$lib/login-oficina.jpeg';
</script>


	<Cabecera/>

  <section>
      

    <div class="pt-36 max-w-4xl mx-auto bg-base-100 rounded-lg shadow-xl ">
      <div class="flex flex-col md:flex-row">
        <div class="h-24 md:h-auto md:w-1/2">
          <img
            aria-hidden="true"
            class="object-cover w-full h-full rounded-l-xl"
            src={loginOfficeDark}
            alt="Office"
          />
        </div>
        <div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2 ">
          <div class="w-full">
            <h1 class="mb-4 text-2xl font-semibold text-neutral-content">
              Login</h1>
            <form method="post" class="space-y-4">
  
              <div class="relative ">
                <input type="email" id="email" 
                class="input input-float peer" placeholder=" " />
                 <label for="email" 
                 class="label-float">
                  Email</label>
              </div>
  
              <div class="relative ">
                <input type="password" id="password" 
                class="input input-float peer" placeholder=" " />
                <label for="password" 
                class="label-float">
                  Password</label>
              </div>
  
              <!-- You should use a button here, as the anchor is only used for the example  -->
             <button
                type="submit"
                class="btn w-full"
              >
                Log In
              </button>
            </form>
  
           
  
            <p class="mt-4">
              <a
                class="text-sm link-hover link-primary"
                href="/"
              >
                Recuperar su password?
              </a>
            </p>
            <p class="mt-1">
              <a
                class="text-sm link-hover link-primary"
                href="register"
              >
                Crear cuenta
              </a>
            </p>
          </div>
        </div>
      </div>
    </div> 
  </section>

  
 


   



<style lang="postcss">
  .input-float {
      @apply w-full input-bordered input-info px-2.5 pb-2.5 pt-4 text-xl;
  }

  .input-float:focus { 
    @apply  ring-0 ;
  } 

  .label-float {
      @apply absolute text-sm rounded-full text-gray-400 z-10 origin-[0] bg-base-100 px-2 left-1
      duration-300 transform  -translate-y-4 scale-75 top-1.5   ;
  }

	.peer:focus ~ .label-float{
		@apply px-2 text-primary  -translate-y-4 scale-75 top-1.5;
	}
	
	.peer:placeholder-shown ~ label{
		@apply scale-100 -translate-y-3 top-7;
	}
	
	
	</style>