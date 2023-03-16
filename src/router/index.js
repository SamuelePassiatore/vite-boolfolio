// import vue router function
import { createRouter, createWebHistory } from "vue-router";
// import pages 
import HomePage from '../pages/HomePage.vue';
import ContactPage from '../pages/ContactPage.vue';

// Define routes and create router
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'home', component: HomePage },
        { path: '/contact', name: 'contact', component: ContactPage},
    ]
});

export {router};