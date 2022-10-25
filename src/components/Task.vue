<template>
    <div> 
        <h1>Task</h1>


    <!-- <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains">
          <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
         <p class="text-gray-700 text-base">
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
         </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div> -->

    </div>
<div>
    <form @submit.prevent="crearNuevaTarea" >
                <label for="title">titulo</label>
            <input type="text" id="title" name="title" v-model="title"/>
            <label for="description">Descripción</label>
            <input type="description" id="description" name="description" v-model="description" />
            <label for="tag">Etiquetas</label>
            <input type="tag" id="tag" name="tag" v-model="tag" />
            <button type="submit">Nueva Tarea</button>
    </form>    
    </div>
    <!--  routa link ahome -->
    </template>
    
    <script setup>
    import {ref} from 'vue';
    import {newTask} from '../API';
    import {useTaskStore} from '../Store/task';
   
    const title= ref();
    const description= ref();
    const tag= ref();
    const taskStore = useTaskStore();
    
    
    const crearNuevaTarea = async () => {
        const response = await newTask(title.value, description.value, tag.value)
        /console.log(response)
        // if (response){
      taskStore.addTask(response)
        // redirectHome.push({
        //     name: 'home'
        // }); 
        // alert('te redirijo a Home')
    }
    // };
    
    </script>
    
    <style scoped>
    </style>