<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppAlert from './components/AppAlert.vue';
import ProjectsList from './components/projects/ProjectsList.vue';
const apiBaseUrl = 'h://localhost:8000/api';
export default {
    name: 'Boolfolio',
    components: { AppHeader, AppAlert, ProjectsList },
    data: () => ({
        isLoading: false,
        hasError: false,
        projects: []
    }),
    methods: {
        fetchProjects() {
            this.isLoading = true;
            axios.get(apiBaseUrl + '/projects').then(res => {
                this.projects = res.data;
            }).catch(() => {
                this.hasError = true;
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
        <app-alert :is-open="hasError" @close="hasError = false"></app-alert>
        <app-loader v-if="isLoading"></app-loader>
        <projects-list v-else :projects="projects"></projects-list>
    </main>
</template>

<style></style>