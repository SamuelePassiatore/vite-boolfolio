<script>
import axios from 'axios';
const apiBaseUrl = 'http://localhost:8000/api/';
import AppAlert from '../components/AppAlert.vue';
import ProjectsList from '../components/projects/ProjectsList.vue';
import AppPagination from '../components/AppPagination.vue';

export default {
    name: 'TypeProjectsPage',
    components: { AppAlert, ProjectsList, AppPagination },
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
            if (!endpoint) endpoint = `${apiBaseUrl}types/${this.$route.params.id}/projects`;
            axios.get(endpoint).then(res => {
                const { data, links } = res.data.projects;
                this.projects = { data, links };
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
    <div v-if="type?.label" class="d-flex justify-content-between">
        <h2>{{ type?.label }} projects</h2>
        <div>
            <button class="btn btn-secondary" @click="$router.back()">Back</button>
        </div>
    </div>

    <app-loader v-if="isLoading"></app-loader>
    <div v-else>
        <projects-list :projects="projects.data"></projects-list>
        <footer>
            <app-pagination :links="projects.links" @change-page="fetchProjects"></app-pagination>
        </footer>
    </div>
</template>

<style scoped lang="scss"></style>