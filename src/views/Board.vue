<template>
  <div class="bg-fixed" style="background-image: url(https://i.pinimg.com/564x/36/3f/d9/363fd9159ff7a0fa9466726a071a4ca9.jpg);">
    <div>
      <NewTask />
    </div>
    <div v-for="data in taskStore.tasks" v-bind:key="data.id">
      <Task :task="data" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { getTasks } from "../API";
import { useTaskStore } from "../Store/task";
import NewTask from "../components/NewTask.vue";
import Task from "../components/Task.vue";
import { trackSlotScopes } from "@vue/compiler-core";

const taskStore = useTaskStore();
taskStore.setTask();
</script>

<style scoped></style>
