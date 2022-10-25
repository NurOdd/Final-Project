<template>
<!-- pagina donde irán las task  -->   
 <div>
<!-- <RouterView/> -->

    <h1>Home</h1>
    <Navbar/>
    <Task/>
</div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
import Task from '../components/Task.vue';
</script>

<style scoped>
</style>