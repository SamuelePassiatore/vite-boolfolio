<script>
import AppHeader from './components/AppHeader.vue';
import HomePage from './pages/HomePage.vue';

export default {
    name: 'Boolfolio',
    components: { AppHeader, HomePage },
};

</script>

<template>
    <app-header></app-header>
    <!-- <router-view></router-view> -->
    <home-page></home-page>
</template>

<style></style>