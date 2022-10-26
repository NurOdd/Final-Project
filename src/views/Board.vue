<template>
<h1>Task Board </h1>>
<NewTask/>


<div v-for="data in chores" v-bind:key="data.id">
    <Task :task="data"/>
</div>

</template>


<script setup>
import {onMounted, ref} from 'vue';
import {getTask} from '../API';


import NewTask from '../components/NewTask.vue';
import Task from '../components/Task.vue';

const chores = ref();

const showTask =async() => {
    const response = await getTask()
    chores.value=await response
}

onMounted (async()=>{
    await showTask()
})

</script>


<style scoped>


</style>