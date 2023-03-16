import { createApp } from 'vue';
import {router} from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.vue';
import AppLoader from './components/AppLoader.vue';

const app = createApp(App);

app.component('AppLoader', AppLoader);
app.use(router);
app.mount('#app')
