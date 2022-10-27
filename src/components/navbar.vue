<template>
<h1>Navbar</h1>

<button @click="userOut" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Log Out</button>


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