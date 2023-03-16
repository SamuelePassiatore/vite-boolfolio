<script>
import axios from 'axios';
import AppAlert from '../components/AppAlert.vue';
import ProjectCard from '../components/projects/ProjectCard.vue';
export default {
    name: 'ProjectDetailPage',
    components: { AppAlert, ProjectCard },
    data: () => ({
        project: null,
        hasError: false,
        isLoading: false,
    }),
    methods: {
        getProject(endpoint = null) {
            this.isLoading = true;
            if (!endpoint) endpoint = apiBaseUrl + '/projects';
            axios.get(endpoint).then(res => {
                this.projects = res.data;
            }).catch(() => {
                this.hasError = true;
            }).then(() => {
                this.isLoading = false;
            });
        }
    },
    created() {
        this.getProject();
    }

};

</script>

<template>
    <app-alert :is-open="hasError" @close="hasError = false"></app-alert>
    <app-loader v-if="isLoading"></app-loader>
    <project-card v-else :project="project"></project-card>
</template>

<style scoped lang="scss"></style>