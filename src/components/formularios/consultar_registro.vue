<template>
  <div>
    <header class="header">
      <router-link to="/menu" class="volver-btn">Volver</router-link>
      <h1>Consulta Registro Forense</h1>
    </header>
    <div class="container">
      <main class="form-container">
        <!-- Formulario -->
        <div class="form-group">
          <label>Fecha Ingreso</label>
          <div>
            <button @click="buscarFecha('desde')">Desde</button>
            <input type="date" v-model="fechaIngresoDesde" />
          </div>
          <div>
            <button @click="buscarFecha('hasta')">Hasta</button>
            <input type="date" v-model="fechaIngresoHasta" />
          </div>
        </div>
        <div class="form-group">
          <label for="busqueda-por-año">Búsqueda por Año</label>
          <input type="date" v-model="busquedaPorAño" />
          <button @click="buscarPorAño">Buscar</button>
        </div>
        <div class="form-group">
          <label for="busqueda-por-estado-de-pericia">Búsqueda por Estado de Pericia</label>
          <input
            type="text"
            id="busqueda_por_estado_de_pericia"
            v-model="busquedaPorEstadoDePericia"
            placeholder="Ingrese el estado"
          />
          <button @click="buscarPorEstado">Buscar</button>
        </div>
        <div class="form-group">
          <label for="busqueda-por-nue">Búsqueda por NUE</label>
          <input
            type="text"
            id="busqueda_por_nue"
            v-model="busquedaPorNue"
            placeholder="Ingrese el NUE"
          />
          <button @click="buscarPorNue">Buscar</button>
        </div>
        <div class="form-group">
          <label for="busqueda-por-ruc">Búsqueda por RUC</label>
          <input
            type="text"
            id="busqueda_por_ruc"
            v-model="busquedaPorRuc"
            placeholder="Ingrese el RUC"
          />
          <button @click="buscarPorRuc">Buscar</button>
        </div>
        <div class="form-group">
          <label for="busqueda-por-marca">Búsqueda por Marca</label>
          <input
            type="text"
            id="busqueda_por_marca"
            v-model="busquedaPorMarca"
            placeholder="Ingrese la marca"
          />
          <button @click="buscarPorMarca">Buscar</button>
        </div>
        <div class="form-group">
          <label for="busqueda-por-seccion">Búsqueda por Sección</label>
          <input
            type="text"
            id="busqueda_por_seccion"
            v-model="busquedaPorSeccion"
            placeholder="Ingrese la sección"
          />
          <button @click="buscarPorSeccion">Buscar</button>
        </div>
        <!-- Campos adicionales -->
        <div v-for="(campo, index) in camposAdicionales" :key="index" class="form-group">
          <label :for="campo.id">{{ campo.label }}</label>
          <input
            type="text"
            :id="campo.id"
            v-model="campo.valor"
            :placeholder="campo.placeholder"
          />
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: "ingreso_registro",
  data() {
    return {
      fechaIngresoDesde: "",
      fechaIngresoHasta: "",
      busquedaPorAño: "",
      busquedaPorEstadoDePericia: "",
      busquedaPorNue: "",
      busquedaPorRuc: "",
      busquedaPorMarca: "",
      busquedaPorSeccion: "",
      camposAdicionales: [
        { id: "tipo-extraccion", label: "TIPO EXTRACCIÓN", placeholder: "Haga clic para agregar texto", valor: "" },
        { id: "estado-de-la-pericia", label: "ESTADO DE LA PERICIA", placeholder: "Haga clic para agregar texto", valor: "" },
        { id: "región", label: "REGIÓN", placeholder: "Haga clic para agregar texto", valor: "" },
        { id: "cantidad-celulares", label: "CANTIDAD CELULARES", placeholder: "Haga clic para agregar texto", valor: "" },
        { id: "delito", label: "DELITO", placeholder: "Haga clic para agregar texto", valor: "" },
        { id: "observacion", label: "OBSERVACIÓN", placeholder: "Haga clic para agregar texto", valor: "" },
      ],
    };
  },
  methods: {
    buscarFecha(tipo) {
      console.log(`Buscar fecha: ${tipo}`);
    },
    buscarPorAño() {
      console.log(`Buscar por año: ${this.busquedaPorAño}`);
    },
    buscarPorEstado() {
      console.log(`Buscar por estado: ${this.busquedaPorEstadoDePericia}`);
    },
    buscarPorNue() {
      console.log(`Buscar por NUE: ${this.busquedaPorNue}`);
    },
    buscarPorRuc() {
      console.log(`Buscar por RUC: ${this.busquedaPorRuc}`);
    },
    buscarPorMarca() {
      console.log(`Buscar por marca: ${this.busquedaPorMarca}`);
    },
    buscarPorSeccion() {
      console.log(`Buscar por sección: ${this.busquedaPorSeccion}`);
    },
  },
};
</script>
<style scoped>
/* General */
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

.header {
  background-color: #4caf50;
  color: white;
  text-align: center;
  padding: 20px 0;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #a8d08d;
  height: calc(100vh - 60px);
  overflow: auto;
  padding: 20px;
}

.form-container {
  display: grid;
  grid-template-columns: 1fr 2fr; /* Una columna para etiquetas y otra para campos */
  gap: 20px;
  width: 100%;
  max-width: 900px;
}

.labels-column {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.inputs-column {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

label {
  font-weight: bold;
  margin-bottom: 5px;
}

input {
  padding: 10px;
  font-size: 14px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  padding: 10px 20px;
  font-size: 14px;
  border: none;
  background-color: #4caf50;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

div.inputs-column > div {
  display: flex;
  gap: 10px; /* Espacio entre botón y campo */
  align-items: center;
}
</style>
