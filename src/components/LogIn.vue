<template>
<div> 
    <h1>Log In</h1>

<form @submit.prevent="EntradaUsuario" >
            <label for="email">e-mail</label>
        <input type="email" id="email" name="email" v-model="email"/>
        <label for="password">contraseña</label>
        <input type="password" id="password" name="password" v-model="password" />
        <button type="submit">Enviar</button>
</form>

    <div>
        <p>No tienes cuenta aún? <route-link to SignUp>Registrate!</route-link></p>
    </div>
    <div>
        <p>Has olvidado la contraseña? <route-link >Recuerda la contraseña</route-link></p>
    </div>

</div>
<!--  routa link ahome -->
</template>

<script setup>
import {ref} from 'vue';
import {login} from '../API';
import {useAuthStore} from '../Store/auth';

//poner una alerta! comprovacion de que el usuario ha confirmado el mail si no nada
//alerta! en caso de que hay error en caso de que contra y user no esten bien. 
const email= ref();
const password= ref();
const authStore = useAuthStore();

const EntradaUsuario = async () => {
    const response = await login(email.value, password.value)
    // console.log(response)
    authStore.login(response)
};



</script>

<style scoped>
</style>