<script>
export default {
    name: 'ProjectCard',
    props: { project: Object },
};

</script>

<template>
    <div class="col-12">


    </div>
    <div class="card mb-3">
        <img :src="project.image" class="card-img-top w-25 py-3" :alt="project.name">
        <div class="card-header">
            <h5 class="card-title">{{ project.title }}</h5>
        </div>
        <div class="card-body">
            <h6 class="card-subtitle mb-2 text-muted">Slug: {{ project.slug }}</h6>
            <p class="card-text">Url: {{ project.url }}</p>
            <p class="card-text">Description: {{ project.description }}</p>
            <div v-if="project.type">
                <p>Type of project: {{ project.type.label }}</p>
            </div>
            <div v-if="project.technologies.length">
                <p>Technology:</p>
                <div v-for="technology in project.technologies">
                    {{ technology.label }}
                </div>
            </div>
            <div v-else>
                No technologies
            </div>
        </div>
        <div class="card-footer">
            <div>
                <small>Author: {{ project.author.name }}</small>
            </div>
            <p class="card-text"><small class="text-muted">Last updated: {{ project.updated_at }}</small></p>
        </div>
    </div>
</template>

<style></style>