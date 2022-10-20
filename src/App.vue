<template >
   <Welcome/>

</template>
<script setup>
import Welcome from './views/Welcome.vue'
import Home from './views/Home.vue'

import {createClient} from '@supabase/supabase-js'
const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY)

</script>


<style scoped>
</style>