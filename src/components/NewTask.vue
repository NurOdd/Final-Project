<template>
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
 <div class="px-6 py-4">
  <input type="text" v-model ="tarea.tittle" placeholder = "Title" class="font-bold text-xl mb-2">
  <input type="textarea" v-model ="tarea.description" placeholder ="Description" class="text-gray-700 text-base">        
 </div>
<div class="px-6 pt-4 pb-2">
  <button  @click="crearTarea" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"> Crear </button>
</div>
</div>
</template>

<script setup>
import {ref} from 'vue';
import {newTask} from '../api/index'
import {useAuthStore} from '../store/auth'
const store = useAuthStore()
console.log(store.id,'sdasdsadsad')
  const tarea = ref ({
  user_id: store.id,
  title: "", 
  description: "",
  })
const crearTarea = async () =>{
  console.log(tarea.value)
const response = await newTask (tarea.value)
  console.log (tarea.value)
}
</script>

<style scoped>
</style>