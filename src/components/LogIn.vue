<template>

    <!-- Por alguna razon no me aparece la información completa y va repitiendo la primera parte del template -->
  

    <main
  class="mx-auto flex min-h-screen w-full items-center justify-center text-white bg-fixed"
  style="background-image: url(https://i.pinimg.com/564x/48/56/7a/48567a38b7176af7d2c48cc4b650bc02.jpg);"
>

  <section class="flex w-[30rem] flex-col space-y-10 bg-green-800">
    <span><br></span>
    <div class="text-center text-4xl font-medium">Log in</div>

    <div
      class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-green-500"
    >
      <input
        type="mail"
        placeholder="Email"
        class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
        v-model="email"
      />
    </div>

    <div
      class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-green-500"
    >
      <input
        type="password"
        placeholder="Password"
        class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
        v-model="password"
      />
    </div>
  

    <button
      class="transform rounded-sm bg-green-600 py-2 font-bold duration-300 hover:bg-green-400"
      @click.prevent="entradaUsuario"
    >
      Submit
    </button>

    <a
      href="#"
      class="transform text-center font-semibold text-green-500 duration-300 hover:text-green-300"
      >FORGOT PASSWORD?</a
    >
<!-- TODO por alguna razon, cuando cambio de componente desde aquí no me muestra nada del login -->
    <p class="text-center text-lg">
      Don't have an account?
      <router-link :to="({name:'signUp'})"
        class="font-medium text-green-500 underline-offset-4 hover:underline"
        >Sign Up</router-link>
      
    </p>
    <span><br></span>
  </section>
</main>
<!-- 
<form @submit.prevent="entradaUsuario" >
            <label for="email">e-mail</label>
        <input type="email" id="email" name="email" v-model="email"/>
        <label for="password">contraseña</label>
        <input type="password" id="password" name="password" v-model="password" />
        <button type="submit">Enviar</button>
</form>

        <div>
    <p>No tienes cuenta aún? <router-link :to="({name:'signUp'})">Registrate!</router-link></p>
    </div>
    <div>
        <p>Has olvidado la contraseña? <span >Recuerda la contraseña</span></p>
</div> --> 


<!--  routa link ahome -->
</template>

<script setup>
import {ref} from 'vue';
import {login} from '../API';
import {useAuthStore} from '../Store/auth';
import {useRouter} from 'vue-router';

//poner una alerta! comprovacion de que el usuario ha confirmado el mail si no nada
//alerta! en caso de que hay error en caso de que contra y user no esten bien. 

//TODO acordarse de quitar la contraseña y el usuario para practicar
const email= ref();
const password= ref();
const authStore = useAuthStore();
const redirectHome = useRouter();

const entradaUsuario = async () => {
    const response = await login(email.value, password.value)
    // console.log(response)
    if (response){
  authStore.login(response)
    redirectHome.push({
        name: 'home'
    }); 
    // alert('te redirijo a Home')
} else {alert ('¡Parece que ha habido un error! Por favor, comprueba que el correo y la contraseña sean los correctos')}
};
//TODO Hay opción de hacer aparecer este mensaje como un div? Creo que quedaria más bonito
</script>

<style scoped>
</style>