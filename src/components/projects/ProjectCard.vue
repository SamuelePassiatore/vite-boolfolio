<script>
export default {
    name: 'ProjectCard',
    props: { project: Object },
};

</script>

<template>
    <div class="card" style="width: 18rem;">
        <div>
            <img :src="project.image" class="img-fluid w-50 " :alt="project.name">
        </div>
        <div class="card-header">
            <h5 class="card-title">{{ project.title }}</h5>
        </div>
        <div class="card-body">
            <h6 class="card-subtitle mb-2 text-muted">{{ project.slug }}</h6>
            <p class="card-text">{{ project.description }}</p>
        </div>
        <div class="card-footer">
            <div>
                <small>{{ project.author.name }}</small>
            </div>
            <small><time>{{ project.updated_at }}</time></small>
        </div>
    </div>
</template>

<style></style>