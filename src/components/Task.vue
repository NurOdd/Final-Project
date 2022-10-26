<template>
  <h1>Created Task</h1>

  <div class="max-w-sm rounded overflow-hidden shadow-lg">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ prop.task.title }}</div>
      <p class="text-gray-600 text-base">{{ prop.task.description }}</p>
      <span
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >{{ prop.task.tag }}</span
      >
    </div>
    <div class="px-6 pt-4 pb-2">
      <button
        @click="finishTask"
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
      >
        Done
      </button>
      <button
        @click="editTask"
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
      >
        Edit
      </button>
      <button
        @click="removeTask"
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
      >
        Delete
      </button>
    </div>
  </div>
  <!-- <div>
    <form @submit.prevent="crearNuevaTarea" >
                <label for="title">titulo</label>
            <input type="text" id="title" name="title" v-model="title"/>
            <label for="description">Descripción</label>
            <input type="description" id="description" name="description" v-model="description" />
            <label for="tag">Etiquetas</label>
            <input type="tag" id="tag" name="tag" v-model="tag" />
            <button type="submit">Nueva Tarea</button>
    </form>    
    </div> -->
  <!--  routa link ahome -->
</template>

<script setup>
import { ref } from "vue";
import { updateTask } from "../API";
import { deleteTask } from "../API";

//TODO arreglar el defineProps creo q pq no está vinculado (revisar funcionamiento de los props)

const prop = defineProps({
  task: object,
});

//TODO mirar como hacer que se ponga más opaco? greyscale? tachado? opciones opciones! + mensaje de bien hecho!)
const finishTask = async () => {
  alert("Well done!");
};

const editTask = async () => {
  const response = await updateTask(title.value, description.value, tag.value);
  console.log(response);
};

const removeTask = async () => {
  const response = await deleteTask(prop.task.id);
};
</script>

<style scoped></style>
