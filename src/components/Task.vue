<template>
  
  <div class="max-w-sm rounded overflow-hidden shadow-lg postIt">

    <div class="px-6 py-4" v-if="changeTask==false" :class={classIsCompleted:prop.task.isCompleted}>
      <div class="font-bold text-xl mb-2">{{ prop.task.title }}</div>
      <p class="text-gray-600 text-base">{{ prop.task.description }}</p>
      <span
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >{{ prop.task.tag }}</span
      >
    </div>
<!--cambiar status finishTask a   -->
    <div class="px-6 pt-4 pb-2"  v-if="changeTask==false">
      <button
        @click="finishTask"
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
      >
        Done
      </button>
      <button
        @click="changeTask=true"
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
      <!-- pantalla de edición -->
      <div class="max-w-sm rounded overflow-hidden shadow-lg" v-if="changeTask==true" :class={classIsCompleted:prop.task.isCompleted}>
      <div class="px-6 py-4"  >
      <input type="text" v-model="task.title" placeholder ="Title" class="font-bold text-xl mb-2">
      <input type="textarea" v-model="task.description" placeholder ="Description" class="text-gray-700 text-base">        
      <input type="text" v-model="task.tag" placeholder="Tags" class="text-gray-700 text-base">

      <button @click="editTask" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"> Guardar Cambios</button>
    </div>
      </div>

  <!--  routa link ahome -->
</template>

<script setup>
import { ref } from "vue";
import { updateTask, doneTask, deleteTask } from "../API";
import { useTaskStore} from "../Store/task"

const taskStore=useTaskStore();
const changeTask = ref(false);
// const doneTask = ref(false);
//TODO arreglar el defineProps creo q pq no está vinculado (revisar funcionamiento de los props)

const prop = defineProps({
  task: Object,
});

//TODO mirar como hacer que se ponga más opaco? greyscale? tachado? opciones opciones! + mensaje de bien hecho!)
// :class es dinamico segun
const finishTask = async () => {
prop.task.isCompleted=!prop.task.isCompleted
  const response = await doneTask(prop.task.id, prop.task.isCompleted);
  console.log("Terminado?",response);
  console.log("estado en supabase:", doneTask);
  
  alert("Well done!");
};


//crear formulario que solo se muestre para editar, crear variable con ref true/false si se edita, cambiar valor y crear funcion q cambie la variable
const editTask = async () => {
  const response = await updateTask(prop.task.title, prop.task.description, prop.task.tag);
  changeTask.value=false;
  // console.log(response);
};

const removeTask = async () => {
  const response = await deleteTask(prop.task.id);
  taskStore.setTask();
};
</script>

<style scoped>
.postIt{
background-color: #738f3ecf;
}
.classIsCompleted {
  background-color: rgba(0, 100, 0, 0.802);
  text-decoration: line-through;
}

</style>