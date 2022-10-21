
<template>
 
<form @submit.prevent="SignUpUser" >
            <label for="email">e-mail</label>
        <input type="email" id="email" name="email" v-model="email"/>
        <label for="password">contraseña</label>
        <input type="password" id="password" name="password" v-model="password" />
        <label for="password">repite la contraseña</label>
        <input type="password" id="password2" name="password2" v-model="password" />
        <button type="submit">Enviar</button>
</form>
</template>

<!-- // hacer un div con mensaje, de que tienes que confirmar el registro. -->

<script setup>

import {registro} from "../API"
//crear formulario + funcion reactivo
//submit formu envia a funcion registro (supabase)

password= password2


</script>


<style scoped>
</style>