<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
const apiBaseUrl = 'http://localhost:8000/api';
export default {
    name: 'App',
    components: { AppHeader },
    data: () => ({
        projects: []
    }),
    methods: {
        fetchProjects() {
            axios.get('')
        }
    }
};

</script>

<template>
    <app-header></app-header>
    <main class="container">
        <ul>
            <li></li>
        </ul>
    </main>
</template>

<style></style>