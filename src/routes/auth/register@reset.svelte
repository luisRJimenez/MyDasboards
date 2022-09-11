<script lang="ts">
import Cabecera from '$lib/Cabecera.svelte';
import createAccountOfficeDark from '$lib/create-account-office-dark.jpeg'
</script>


	<Cabecera/>

  <section>

    <div class="pt-28 max-w-4xl mx-auto rounded-xl shadow-xl">
      <div class="flex flex-col md:flex-row">
        <div class="h-24 md:h-auto md:w-1/2 ">
  
          <img
            aria-hidden="true"
            class=" object-cover w-full h-full rounded-l-xl "
            src={createAccountOfficeDark}
            alt="Office"
          />
        </div>
        <div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2 ">
          <div class="w-full space-y-4">
            <h1 class="mb-4 text-2xl font-semibold text-base-content ">
              Registrar Cuenta
            </h1>
            <div class="relative">
              <input type="text" id="nombre" 
              class="input input-float peer" placeholder=" " />
              <label for="nombre" class="label-float">
                Nombre de Usuario</label>
            </div>
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
            <!-- <div class="relative ">
              <input type="password" id="password2" 
              class="input block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-100 bg-transparent rounded-lg border-1
              border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 
              focus:border-sky-300 peer" placeholder=" " />
              <label for="password2" 
              class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-base-100
               dark:bg-gray-800 px-2 peer-focus:px-2 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 
               peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                Password</label>
            </div> -->
  
            <div class="flex mt-6 text-sm">
              <label class="flex items-center dark:text-gray-400">
                <input
                  type="checkbox"
                  class="checkbox checkbox-xs checkbox-primary"
                />
                <span class="ml-2">
                  Acepta las 
                  <span class="underline">Politicas de privacidady</span>
                </span>
              </label>
            </div>
  
            <!-- You should use a button here, as the anchor is only used for the example  -->
            <a
              class="btn w-full"
              href="register"
            >
              Crear cuenta
            </a>
  
           
  
            <p class="mt-4">
              <a
                class="link-hover link-primary text-sm"
                href="login"
              >
                Already have an account? Login
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