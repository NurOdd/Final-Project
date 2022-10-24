<template>
<div> 
    <h1>Log In</h1>

<form @submit.prevent="entradaUsuario" >
            <label for="email">e-mail</label>
        <input type="email" id="email" name="email" v-model="email"/>
        <label for="password">contraseña</label>
        <input type="password" id="password" name="password" v-model="password" />
        <button type="submit">Enviar</button>
</form>

        <div>
    <p>No tienes cuenta aún? <route-link :to="({name:'signUp'})">Registrate!</route-link></p>
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
}
};

</script>

<style scoped>
</style>