<script>
import AppHeader from './components/AppHeader.vue';

export default {
    name: 'Boolfolio',
    components: { AppHeader },
};

</script>

<template>
    <app-header></app-header>
    <main class="container">
        <router-view></router-view>
    </main>
</template>

<style></style>