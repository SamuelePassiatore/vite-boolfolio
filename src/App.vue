<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppAlert from './components/AppAlert.vue';
import AppPagination from './components/AppPagination.vue';
import ProjectsList from './components/projects/ProjectsList.vue';
const apiBaseUrl = 'http://localhost:8000/api';
export default {
    name: 'Boolfolio',
    components: { AppHeader, AppAlert, AppPagination, ProjectsList },
    data: () => ({
        isLoading: false,
        hasError: false,
        projects: {
            data: [],
            links: [],
        }
    }),
    methods: {
        fetchProjects(endpoint = null) {
            this.isLoading = true;
            if (!endpoint) endpoint = apiBaseUrl + '/projects';
            axios.get(endpoint).then(res => {
                const { data, links } = res.data;
                this.projects = { data, links };
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
        <projects-list v-else :projects="projects.data"></projects-list>
        <footer>
            <app-pagination :links="projects.links" @change-page="fetchProjects"></app-pagination>
        </footer>
    </main>
</template>

<style></style>