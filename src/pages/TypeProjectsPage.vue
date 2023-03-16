<script>
import axios from 'axios';
const apiBaseUrl = 'http://localhost:8000/api/';
import AppAlert from '../components/AppAlert.vue';
import ProjectsList from '../components/projects/ProjectsList.vue';

export default {
    name: 'TypeProjectsPage',
    components: { AppAlert, ProjectsList },
    data: () => ({
        isLoading: false,
        hasError: false,
        projects: [],
        type: null,
    }),
    methods: {
        fetchProjects(endpoint = null) {
            this.isLoading = true;
            if (!endpoint) endpoint = `${apiBaseUrl}types/${this.$route.params.id}/projects`;
            axios.get(endpoint).then(res => {
                this.projects = res.data.projects;
                this.type = res.data.type;
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
    <app-alert :is-open="hasError" @close="hasError = false"></app-alert>
    <h2>{{ type?.label }} projects</h2>
    <app-loader v-if="isLoading"></app-loader>
    <projects-list v-else :projects="projects"></projects-list>
</template>

<style scoped lang="scss"></style>