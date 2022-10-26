<template>
<!-- pagina donde irán las task  -->   
 <div class="homeDiv">
<!-- <RouterView/> -->

    <h1>Home</h1>
    <Navbar/>
    <NewTask/>
    <Task/>
</div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
import Task from '../components/Task.vue';
import NewTask from '../components/NewTask.vue';

</script>

<style scoped>
.homeDiv{
background-color: coral;

}
</style>