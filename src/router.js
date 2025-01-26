import { createRouter, createWebHistory } from 'vue-router';
import Menu from './components/Menu.vue'; 
import UserLogin from './components/User_Login.vue'; // Corregido el path
import IngresoRegistro from './components/formularios/ingreso_registro.vue'; // Importación de ingreso_registro
import ModificarRegistro from './components/formularios/modificar_registro.vue'; // Ajusta esta ruta según la ubicación del componente
import ConsultarRegistro from './components/formularios/consultar_registro.vue'; // Ajusta esta ruta según la

const routes = [
  {
    path: '/',
    name: 'User_Login',
    component: UserLogin,
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu,
  },
  {
    path: '/ingreso_registro',  // Nueva ruta para ingreso_registro
    name: 'IngresoRegistro',
    component: IngresoRegistro,
  },
  {
    path: '/modificar_registro',
    name: 'ModificarRegistro',
    component: ModificarRegistro, // Ruta para modificar registro
  },
  {
    path: '/consultar_registro',
    name: 'ConsultarRegistro',
    component: ConsultarRegistro, // Ruta para modificar registro
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
