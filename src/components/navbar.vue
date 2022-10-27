<template>
    <!-- <div class="bg-gray-100 font-sans w-full min-h-screen m-0"> -->
        <div class="navbarWhite shadow-xl bg-opacity-100">
            <div class="container mx-auto px-4">
                <div class="flex items-center justify-between py-4">
                    <div>
                        <img class=catLogo src="../images/gato-02.png" alt="gato" />
                    </div>

                    <div class="hidden sm:flex sm:items-center">
                        <h1 class=" text-4xl font-bold text-green-900 md:underline">To-Do Task</h1>
                    </div>

                    <div class="hidden sm:flex sm:items-center">
                        <button @click="userOut"
                            class="text-gray-800 text-sm font-semibold border px-4 py-2 rounded-lg hover:text-green-600 hover:border-green-600">Log
                            Out</button>
                    </div>

                </div>

                <div class="block sm:hidden bg-white border-t-2 py-2">
                    <div class="flex flex-col">
                        <div class="flex justify-between items-center border-t-2 pt-2">

                            <button @click="userOut"
                                class="text-gray-800 text-sm font-semibold border px-4 py-1 rounded-lg hover:text-green-600 hover:border-green-600">Log Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <!-- </div> -->




</template>

<script setup>
import { useAuthStore } from '../Store/auth';
import { useRouter } from 'vue-router';
import { logOut } from '../API'


const redirectWelcome = useRouter();
const authStore = useAuthStore();

const userOut = async () => {
    const response = await logOut()
    // confirm('estas seguro que quieres salir?') 
    //confirm ok
    authStore.logout()
    console.log('has hecho el logout con exito')
    redirectWelcome.push({
        name: 'welcome'
    });


}

</script>

<style scoped>
.catLogo {
    width: 100px;
}

.navbarWhite {
    background-color: #f8f8f8;
}
</style>