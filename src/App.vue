<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
    name: 'Boolfolio',
    components: { AppHeader, AppFooter },
};

</script>

<template>
    <app-header></app-header>
    <main class="container">
        <router-view></router-view>
    </main>
    <app-footer></app-footer>
</template>

<style></style>