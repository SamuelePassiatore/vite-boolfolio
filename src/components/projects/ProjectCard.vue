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
        },
        fullName() {
            if (!this.project.author.details && this.project.author) return this.project.author.name;
            if (!this.project.author.details && !this.project.author) return 'Anonymous';
            const { first_name, last_name } = this.project.author.details;
            return `${first_name} ${last_name}`;
        }
    }
};

</script>

<template>
    <div class="card mb-3">
        <div v-if="project.image">
            <img :src="project.image" class="card-img-top w-25 py-3" :alt="project.title">
        </div>
        <div class="card-header">
            <h5 class="card-title">{{ project.title }}</h5>
        </div>
        <div class="card-body">
            <h6 class="card-subtitle mb-2 text-muted">Slug: {{ project.slug }}</h6>
            <p class="card-text">Url: {{ project.url }}</p>
            <p class="card-text">Description: {{ isDetail ? project.description : abstract }}</p>
            <div v-if="project.type" class="d-flex">
                <span>Type of project: </span>
                <router-link v-if="project.type" :to="{ name: 'type-projects', params: { id: project.type.id } }">
                    <p class="badge rounded-pill" :style="{ backgroundColor: project.type.color }">{{ project.type.label }}
                    </p>
                </router-link>
            </div>
            <div v-else>
                <p>No type</p>
            </div>
            <div v-if="project.technologies?.length">
                <p>Technology:</p>
                <div v-for="technology in project.technologies" :key="technology.id" class="badge"
                    :style="{ backgroundColor: technology.color }">
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
                    <small>Author: {{ fullName }}</small>
                </div>
                <p class="card-text"><small class="text-muted">Last updated: {{ projectDate }}</small></p>
            </div>
            <div>
                <router-link v-if="!isDetail" class="btn btn-primary"
                    :to="{ name: 'project-detail', params: { slug: project.slug } }">See
                    more</router-link>
            </div>
            <div v-if="isDetail">
                <button class="btn btn-secondary" @click="$router.back()">Back</button>
            </div>
        </div>
    </div>
</template>

<style></style>