<template>
    <div> 
        <h1>Task</h1>
    
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