<template>
<!-- pagina donde irán las task  -->   
<Navbar/>

 <div class="bg-green-100">
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

</style>