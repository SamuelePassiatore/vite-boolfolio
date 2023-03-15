<script>
export default {
    name: 'AppLoader'
};

</script>

<template>
    <div class="loader-overlay">
        <div class="spinner-border text-light" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
</template>

<style scoped lang="scss">
.loader-overlay {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;

    .spinner-border {
        width: 200px;
        height: 200px;
    }
}
</style>