<script>
export default {
    name: 'AppPagination',
    props: { links: Array },
    emits: ['close']
};

</script>

<template>
    <nav>
        <ul class="pagination">
            <li v-for="link in links" :key="link.label" class="page-item"
                :class="[{ 'active': link.active }, { 'disabled': !link.url }]">
                <button type="button" :disabled="!link.url" class="page-link" v-html="link.label"
                    @click="$emit('change-page', link.url)"></button>
            </li>
        </ul>
    </nav>
</template >

<style scoped lang ="scss"></style>