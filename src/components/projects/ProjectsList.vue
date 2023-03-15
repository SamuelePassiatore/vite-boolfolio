<script>
export default {
    name: 'ProjectsList',
    props: { projects: Array },
};

</script>

<template>
    <section id="projects-list" class="my-4">
        <ul v-if="projects.length">
            <li v-for="project in projects" :key="project.id">{{ project.title }}</li>
        </ul>
        <h5 v-else class="text-center">There aren't projects in this portfolio</h5>
    </section>
</template>

<style></style>