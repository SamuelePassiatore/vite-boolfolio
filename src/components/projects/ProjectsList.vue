<script>
import ProjectCard from './ProjectCard.vue';
export default {
    name: 'ProjectsList',
    components: { ProjectCard },
    props: { projects: Array },
};

</script>

<template>
    <section id="projects-list" class="my-4">
        <div v-if="projects.length">
            <project-card v-for="project in projects" :key="project.id" :project="project"></project-card>
        </div>
        <h5 v-else class="text-center">There aren't projects in this portfolio</h5>
    </section>
</template>

<style></style>