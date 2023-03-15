<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
const apiBaseUrl = 'http://localhost:8000/api';
export default {
    name: 'App',
    components: { AppHeader },
    data: () => ({
        projects: []
    }),
    methods: {
        fetchProjects() {
            axios.get(apiBaseUrl + '/projects').then(res => {
                this.projects = res.data;
            });
        }
    },
    created() {
        this.fetchProjects();
    }
};

</script>

<template>
    <app-header></app-header>
    <main class="container">
        <ul v-if="projects.length" class="my-4">
            <li v-for="project in projects" :key="project.id">{{ project.title }}</li>
        </ul>
        <h5 v-else class="text-center my-4">There aren't projects in this portfolio</h5>
    </main>
</template>

<style></style>