<script>
export default {
    name: 'ProjectCard',
    props: { project: Object, isDetail: Boolean },
    computed: {
        projectDate() {
            const date = new Date(this.project.updated_at);
            let day = date.getDay();
            let month = date.getMonth();
            const year = date.getFullYear();
            const hours = date.getHours();
            const minutes = date.getMinutes();
            const seconds = date.getSeconds();

            if (day < 10) day = "0" + day;
            if (month < 10) month = "0" + month;
            return `${day}/${month}/${year} at ${hours}:${minutes}:${seconds}`
        },
        abstract() {
            const abstract = this.project.description.slice(0, 50);
            return abstract + '...';
        }
    }
};

</script>

<template>
    <div class="card mb-3">
        <img :src="project.image" class="card-img-top w-25 py-3" :alt="project.title">
        <div class="card-header">
            <h5 class="card-title">{{ project.title }}</h5>
        </div>
        <div class="card-body">
            <h6 class="card-subtitle mb-2 text-muted">Slug: {{ project.slug }}</h6>
            <p class="card-text">Url: {{ project.url }}</p>
            <p class="card-text">Description: {{ isDetail ? project.description : abstract }}</p>
            <div v-if="project.type">
                <p>Type of project: {{ project.type.label }}</p>
            </div>
            <div v-else>
                <p>No type</p>
            </div>
            <div v-if="project.technologies.length">
                <p>Technology:</p>
                <div v-for="technology in project.technologies">
                    {{ technology.label }}
                </div>
            </div>
            <div v-else>
                <p>No technologies</p>
            </div>
        </div>
        <div class="card-footer d-flex justify-content-between">
            <div>
                <div>
                    <small>Author: {{ project.author.name }}</small>
                </div>
                <p class="card-text"><small class="text-muted">Last updated: {{ projectDate }}</small></p>
            </div>
            <div>
                <router-link v-if="!isDetail" class="btn btn-primary"
                    :to="{ name: 'project-detail', params: { id: project.id } }">See
                    more</router-link>
            </div>

        </div>
    </div>
</template>

<style></style>