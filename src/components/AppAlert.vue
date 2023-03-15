<script>
export default {
    name: 'AppAlert',
    props: { isOpen: Boolean },
    emits: ['close']
};

</script>

<template>
    <div v-if="isOpen" class="alert alert-danger alert-dismissible fade show my-3" role="alert">
        <strong>Error! </strong> An error occurred in the recovery of projects!
        <button type="button" class="btn-close" @click="$emit('close')"></button>
    </div>
</template >

<style scoped lang ="scss"></style>
