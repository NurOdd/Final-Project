<template>
<h1>New task</h1>
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
 <div class="px-6 py-4">
  <input type="text" v-model="task.title" placeholder ="Title" class="font-bold text-xl mb-2">
  <input type="textarea" v-model="task.description" placeholder ="Description" class="text-gray-700 text-base">        
 <input type="text" v-model="task.tag" placeholder="Tags" class="text-gray-700 text-base">
</div>
<div class="px-6 pt-4 pb-2">
  <button  @click="createNewTask" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"> Create New Task </button>
</div>
</div>
</template>

<script setup>
import {ref} from 'vue';
import {newTask} from '../API'
import {useAuthStore} from '../store/auth'

const store = useAuthStore()

  const task = ref ({
  user_id: store.id,
  title: "", 
  description: "",
  })

const createNewTask = async () =>{
  console.log(task.value)
const response = await newTask (task.value)
  console.log (task.value)
}
</script>

<style scoped>
</style>