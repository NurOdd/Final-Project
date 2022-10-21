<template>
<h1>Navbar</h1>

<button @click="userOut" >Log Out</button>


</template>

<script setup>
import {useAuthStore} from '../Store/auth';
import {useRouter} from 'vue-router';
import {logOut} from '../API'


const redirectWelcome = useRouter();
const authStore= useAuthStore();

const userOut = async () => {
    const response = await logOut()
    // confirm('estas seguro que quieres salir?') 
    //confirm ok
    authStore.logout()
    console.log('has hecho el logout con exito')
    redirectWelcome.push({
        name: 'welcome'
    } );
    

}

</script>

<style scoped>
</style>