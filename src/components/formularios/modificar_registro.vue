<template>
  <div>
    <!-- Encabezado con clase header -->
    <header class="header">
      <div class="header-content">
        <router-link to="/menu" class="volver-btn">VOLVER</router-link>
      </div>
      <h1>MODIFICAR REGISTRO FORENSE</h1>
    </header>
    <!-- Contenedor principal -->
    <main class="container">
      <form @submit.prevent="modificarRegistro" class="form-modificar">
        <label for="id-ruc">Indicar ID o RUC</label>
        <input
          type="text"
          id="id-ruc"
          v-model="idRuc"
          placeholder="000001"
          required
        />
        <button type="submit">MODIFICAR</button>
      </form>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      idRuc: "", // Vinculado al campo de entrada
    };
  },
  methods: {
    modificarRegistro() {
      // Aquí puedes manejar el envío del formulario
      // Por ejemplo, enviar los datos a un backend
      console.log("ID o RUC a modificar:", this.idRuc);
      // Redirigir o mostrar un mensaje según la lógica
    },
  },
};
</script>

<style scoped>
/* Estilo para el cuerpo de la página */
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

/* Estilo para el encabezado */
.header {
  background-color: #4caf50; /* Fondo verde oscuro */
  color: white; /* Color blanco para todo el texto dentro del encabezado */
  text-align: center; /* Centrado del texto */
  padding: 20px 0; /* Espaciado interno */
  position: relative; /* Necesario para posicionar el botón */
}

/* Asegurarnos de que el título h1 tenga color blanco */
.header h1 {
  color: white !important; /* Asegura que el título sea blanco */
  margin: 0; /* Elimina márgenes por defecto */
  font-size: 24px; /* Tamaño de fuente del encabezado */
  font-weight: bold; /* Resalta el texto */
}

/* Contenedor para el botón de volver */
.header .header-content {
  position: absolute;
  top: 15px;
  right: 15px; /* Alinea el botón al lado derecho */
}

/* Estilo para el botón de volver */
.volver-btn {
  padding: 6px 12px; /* Ajuste de tamaño del botón */
  background-color: white;
  border: 1px solid black;
  color: black;
  text-decoration: none;
  font-size: 14px; /* Fuente consistente con los demás elementos */
  font-weight: bold;
  cursor: pointer;
  border-radius: 4px; /* Bordes redondeados */
  transition: background-color 0.3s ease;
}

.volver-btn:hover {
  background-color: #e7e7e7; /* Fondo al pasar el mouse */
}

/* Estilo para el contenedor principal */
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 60px); /* Altura total menos el encabezado */
  background-color: #a8d08d; /* Fondo verde claro */
  padding: 20px; /* Espaciado interno */
}

/* Estilo para los botones */
.container button {
  margin: 10px 0; /* Espaciado entre botones */
  padding: 10px 20px; /* Espaciado interno ajustado */
  font-size: 14px; /* Tamaño de fuente consistente */
  font-weight: bold; /* Resalta el texto */
  border: 1px solid black; /* Borde del botón */
  background-color: white; /* Fondo del botón */
  cursor: pointer;
  border-radius: 4px; /* Bordes redondeados */
  transition: background-color 0.3s ease;
}

.container button:hover {
  background-color: #e7e7e7; /* Fondo al pasar el mouse */
}

/* Estilo para las etiquetas y texto */
.container label {
  font-size: 16px; /* Tamaño de fuente */
  font-weight: bold; /* Resalta las etiquetas */
  color: #333; /* Color de texto */
  margin-bottom: 5px; /* Espaciado entre etiqueta y campo */
}

/* Campos de entrada */
.container input {
  width: 100%;
  padding: 8px 10px; /* Espaciado interno */
  font-size: 14px; /* Tamaño de texto consistente */
  border: 1px solid #ccc; /* Borde claro */
  border-radius: 4px; /* Bordes redondeados */
  margin-bottom: 15px; /* Espaciado entre campos */
  box-sizing: border-box;
  transition: border-color 0.3s ease;
}

.container input:focus {
  border-color: #4caf50; /* Borde verde al enfocar */
  outline: none;
}
</style>
