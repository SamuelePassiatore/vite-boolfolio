<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import ProjectsList from './components/projects/ProjectsList.vue';
const apiBaseUrl = 'http://localhost:8000/api';
export default {
    name: 'Boolfolio',
    components: { AppHeader, ProjectsList },
    data: () => ({
        isLoading: false,
        projects: []
    }),
    methods: {
        fetchProjects() {
            this.isLoading = true;
            axios.get(apiBaseUrl + '/projects').then(res => {
                this.projects = res.data;
            }).catch((err) => {
                console.error(err);
            }).then(() => {
                this.isLoading = false;
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
        <app-loader v-if="isLoading"></app-loader>
        <projects-list v-else :projects="projects"></projects-list>
    </main>
</template>

<style></style>