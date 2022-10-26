<template>
<!-- pagina donde irán las task  -->   
 <div class="homeDiv">
<!-- <RouterView/> -->

    <h1>Home</h1>
    <Navbar/>
    <Board/>

</div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue';

import Board from '../views/Board.vue';
import {useRouter} from 'vue-router';
import Task from '../components/Task.vue';
import NewTask from '../components/NewTask.vue';


</script>

<style scoped>
.homeDiv{
background-color: coral;

}
</style>