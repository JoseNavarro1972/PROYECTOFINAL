<template>
  <div v-if="isAuthenticated">
    <div class="header">
      <h2>DEPARTAMENTO ANTIDROGAS O.S.7</h2>
      <h2>JEFATURA INTELIGENCIA ANTIDROGAS</h2>
    </div>

    <div class="container">
      <button @click="redirectTo('ingreso_registro')">INGRESO REGISTRO</button>
      <br />
      <button @click="redirectTo('modificar_registro')">MODIFICAR REGISTRO</button>
      <br />
      <button @click="redirectTo('consultar_registro')">CONSULTAR REGISTRO</button>
    </div>
  </div>
  <div v-else>
    <p>Acceso denegado. No estás autenticado.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isAuthenticated: false,  // Inicialmente no está autenticado
    };
  },
  methods: {
    redirectTo(page) {
      window.location.href = page; // Redirige a las páginas deseadas
    },
    // Aquí puedes tener alguna lógica para autenticar al usuario
    login() {
      // Simula un inicio de sesión exitoso
      this.isAuthenticated = true;
    },
  },
  created() {
    // Llamamos a 'login' para simular que el usuario está autenticado.
    // Esto debe ser reemplazado por tu lógica de autenticación real.
    this.login();
  },
};
</script>

<style scoped>
/* Estilo para el cuerpo de la página */
body {
    margin: 0;
    font-family: Arial, ;
}

/* Estilo para el encabezado */
.header {
    background-color: #4CAF50; /* Fondo verde oscuro */
    color: white;
    text-align: center;
    padding: 20px 0; /* Espaciado interno */
}

/* Estilo para el contenedor */
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 60px); /* Altura total menos el encabezado */
    background-color: #A8D08D; /* Fondo verde claro */
}

/* Estilo para los botones */
.container button {
    margin: 10px 0; /* Espaciado entre botones */
    padding: 10px 20px; /* Espaciado interno */
    font-size: 16px; /* Tamaño de letra */
    border: 1px solid black; /* Borde negro */
    background-color: white; /* Fondo blanco */
    cursor: pointer; /* Cambia el cursor al pasar */
}

/* Estilo hover para los botones */
.container button:hover {
    background-color: #e7e7e7; /* Fondo gris claro al pasar el mouse */
}

</style>
