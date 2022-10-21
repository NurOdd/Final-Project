<template >
   <Welcome/>


</template>
<script setup>
import Welcome from './views/Welcome.vue';
import Home from './views/Home.vue';
import {onMounted} from 'vue'; 

import {createClient} from '@supabase/supabase-js'
const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY)

const registro = async() =>{
   const result = await supabase.auth.signUp({
   email: 'nur.rodga@gmail.com',
   password: '1234'
}) 
console.log (result)}

onMounted() => {
   registro()
}

</script>


<style scoped>
</style>