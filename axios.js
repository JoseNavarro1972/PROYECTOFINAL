import axios from './axios'; // Asegúrate de que la ruta sea correcta

axios.post('/login', {
    username: 'JOSE',
    password: '••••••',
})
.then(response => {
    console.log('Login exitoso:', response.data);
})
.catch(error => {
    console.error('Error en la conexión:', error);
});
