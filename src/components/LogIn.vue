<template>
<div> 
    <h1>Inicia sesión</h1>

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
        <p>Has olvidado la contraseña? <router-link >Recuerda la contraseña</router-link></p>
    </div>
</div>
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
const email= ref('nurietta@gmail.com');
const password= ref('12345678');
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