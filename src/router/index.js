import { createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'welcome',
        component: () => import ("../views/Welcome.vue"),
        redirect: {
            name: 'signUp'
        },
            children: [{
                 path: 'login',
                 name: 'logIn',
                 component: () => import ("../components/LogIn.vue"),
    
                },
                
                {
                path: 'signup',
                name: 'signUp',
                component: () => import ("../components/SignUp.vue"),
                }]

    },
    
    {
        path: '/home',
        name: 'home',
        component: () => import ("../views/Home.vue"),

    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,


})

export default router