<script>
export default {
    name: 'NotFoundPage'
};

</script>

<template>
    <div class="d-flex flex-column justify-content-center align-items-center error-div">
        <h2>404 | Not Found</h2>
        <button @click="$router.back()" class="btn btn-secondary mt-3">Back</button>
        <!-- <router-link to="/" class="btn btn-secondary mt-3">Back to home</router-link> -->
    </div>
</template>

<style scoped lang="scss">
.error-div {
    height: calc(100vh - 60px);
}
</style>