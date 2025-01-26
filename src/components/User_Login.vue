<template>
  <div class="login">
    <h2>Iniciar sesión</h2>
    <form @submit.prevent="login">
      <div>
        <label for="username">Nombre de usuario:</label>
        <input
          type="text"
          v-model="username"
          id="username"
          required
          placeholder="Ingrese su nombre de usuario"
        />
      </div>
      <div>
        <label for="password">Contraseña:</label>
        <input
          type="password"
          v-model="password"
          id="password"
          required
          placeholder="Ingrese su contraseña"
        />
      </div>
      <button type="submit">Iniciar sesión</button>
    </form>
    <p v-if="errorMessage" style="color: red;">{{ errorMessage }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'UserLogin',
  data() {
    return {
      username: '',
      password: '',
      errorMessage: '',
    };
  },
  methods: {
    login() {
      // Hacer la solicitud HTTP a json-server
      axios
        .get('http://localhost:3001/users', {
          params: {
            username: this.username,
            password: this.password,
          },
        })
        .then((response) => {
          const user = response.data;
          if (user.length > 0) {
            // Login exitoso
            this.errorMessage = '';
            alert('Login exitoso');
            // Aquí puedes redirigir al usuario a otra página si lo deseas
            // this.$router.push('/dashboard');
          } else {
            // Login fallido
            this.errorMessage = 'Usuario o contraseña incorrectos';
          }
        })
        .catch((error) => {
          console.error('Error al intentar iniciar sesión:', error);
          this.errorMessage = 'Hubo un error en la conexión';
        });
    },
  },
};
</script>

<style scoped>
.login {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

input {
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  background-color: #4caf50;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
