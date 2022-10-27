<template>
  <main
    class="mx-auto flex min-h-screen w-full items-center justify-center bg-fixed text-white"
    style="background-image: url(https://i.pinimg.com/564x/a9/64/c5/a964c550774ffc0f4073307dc0935102.jpg);"
  >
  <div >
  <div class="flex w-[30rem] flex-col space-y-10 bg-green-800 mb-8 ">
        <h1 class=" text-center  text-4xl font-medium">Cozy Task</h1>
        <p>
          Welcome! <br />
          Please take a seat, a cup of your favourite tea, put some music on, and be prepare to work on
          all your projects.<br />
          <span><br></span>
          We hope that this app will make it more pleaseful to visualize and
          organize your thoughts and task!
        </p>
        <span><br></span>
      </div>
    <section class="flex w-[30rem] flex-col space-y-10 bg-green-900">
      <div>
        <div class="text-center text-4xl font-medium">Sign Up</div>

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
        <div
          class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-green-500"
        >
          <input
            type="password"
            placeholder="Confirm Password"
            class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
            v-model="password2"
          />
        </div>

        <button
          class="transform rounded-sm bg-green-600 py-2 font-bold duration-300 hover:bg-green-400"
          @click.prevent="SignUpUser"
        >
          Enviar
        </button>
      </div>
 

      <a
        href="#"
        class="transform text-center font-semibold text-green-400 duration-300 hover:text-green-200"
        >FORGOT PASSWORD?</a
      >
      <!-- TODO por alguna razon, cuando cambio de componente desde aquí no me muestra nada del login -->
      <p class="text-center text-lg">
        You already have an account?
        <router-link
          :to="{ name: 'logIn' }"
          class="font-medium text-green-500 underline-offset-4 hover:underline"
          >Log in
        </router-link>
      </p>
      
    </section>
  </div>
  </main>

  <!-- parte antigua q si funcionaba -->
  <!-- <div>
    <h1>Registro de Usuario</h1>
<form @submit.prevent="SignUpUser" >
            <label for="email">e-mail</label>
        <input type="email" id="email" name="email" v-model="email"/>
        <label for="password">contraseña</label>

        <input type="password" id="password" name="password" v-model="password" />
        <label for="password">repite la contraseña</label>
        <input type="password" id="password2" name="password2" v-model="password2" />
        <button type="submit">Enviar</button>
</form>
<p>Ya estas registrado?  <router-link :to="({name:'logIn'})"> Inicia sesión </router-link> </p>
</div> -->
</template>

<!-- // hacer un div con mensaje, de que tienes que confirmar el registro. -->

<script setup>
import { ref } from "vue";
import { registro } from "../API";
import { useAuthStore } from "../Store/auth";

//crear formulario + funcion reactivo
//submit formu envia a funcion registro (supabase)
const email = ref();
const password = ref();
const password2 = ref();

const SignUpUser = async () => {
  if (password.value !== password2.value) {
    alert("la contraseña tiene que ser la misma");
  } else {
    const response = await registro(email.value, password.value);
    alert("tu usuario ha sido registrado, revisa tu email");

    //  console.log(response)
  }
};
</script>

<style scoped></style>
