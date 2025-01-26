import { createApp } from 'vue';
import App from './App.vue';
import router from './router';  // Asegúrate de importar el router correctamente

const app = createApp(App);
app.use(router);  // Asegúrate de usar el router aquí
app.mount('#app');
