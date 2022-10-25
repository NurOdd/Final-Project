
<template>
 <div>
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
<p>Ya estas registrado?  <router-link :to="({name:'logIn'})">Inicia sesión</router-link></p>
</div>
</template>

<!-- // hacer un div con mensaje, de que tienes que confirmar el registro. -->

<script setup>
import {ref} from 'vue';
import {registro} from '../API';
import {useAuthStore} from '../Store/auth';
import {useRouter} from 'vue-router';

//crear formulario + funcion reactivo
//submit formu envia a funcion registro (supabase)
const email= ref();
const password= ref();
const password2= ref();


const SignUpUser = async () => {
    if(password.value!==password2.value){
        alert("la contraseña tiene que ser la misma")
    } else {
    const response = await registro(email.value, password.value)
    alert("tu usuario ha sido registrado, revisa tu email")

    //  console.log(response)
    }
  
};



</script>


<style scoped>
</style>