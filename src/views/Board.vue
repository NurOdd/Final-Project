<template>
<h1>Task Board Blablabla </h1>

<NewTask/>



<div v-for="data in tasks" v-bind:key="data.id">
    <Task :task="data"/>
</div>

</template>


<script setup>
import {onMounted, ref} from 'vue';
import {getTasks} from '../API';
import {useTaskStore} from '../Store/task'

import NewTask from '../components/NewTask.vue';
import Task from '../components/Task.vue';
import { trackSlotScopes } from '@vue/compiler-core';



// console.log("task", taskStore.setTask)

// const chores =  taskStore.setTask;
// console.log ("chores", chores);


const taskStore = useTaskStore();
taskStore.setTask();
console.log ("1", taskStore.setTask());
const tasks = taskStore.tasks;
console.log("2",tasks);



</script>


<style scoped>


</style>