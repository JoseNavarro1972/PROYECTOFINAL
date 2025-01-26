<template>
  <div>
    <header>
      <router-link to="/menu" class="volver-btn">Volver</router-link>
      <h1>Ingreso de Registro</h1>
    </header>
    <main>
      <div class="form-container">
        <!-- Formulario -->
        <div class="form-group" v-for="campo in campos" :key="campo.id">
          <label :for="campo.id">{{ campo.label }}</label>
          <input
            :type="campo.type"
            :id="campo.id"
            :placeholder="campo.placeholder"
            v-model="registro[campo.id]"
            :readonly="campo.readonly"
          />
        </div>
        <!-- Botón "Ingresar" -->
        <div class="ingresar-btn-container">
          <button class="ingresar-btn" type="button" @click="ingresarRegistro">
            Ingresar
          </button>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "ingreso_registro",
  data() {
    return {
      registro: {
        "nro-registro": "ID 000001",
        "fecha-recepcion": "",
        "nombre-perito": "",
        "grado-perito": "",
        "fecha-asignacion": "",
        "causa-ruc": "",
        "fiscalia": "",
        "fecha-ip": "",
        "tribunal-de-garantia": "",
        "fecha-orden-judicial": "",
        nue: "",
        "nombre-juez": "",
        marca: "",
        modelo: "",
        "numero-telefono": "",
        plazo: "",
        seccion: "",
        "tipo-extraccion": "",
        "estado-de-la-pericia": "",
        región: "",
        "cantidad-celulares": "",
        delito: "",
        observacion: "",
      },
      campos: [
        { id: "nro-registro", label: "NRO. REGISTRO", type: "text", readonly: true },
        { id: "fecha-recepcion", label: "FECHA RECEPCIÓN", type: "date" },
        { id: "nombre-perito", label: "NOMBRE PERITO", type: "text", placeholder: "Ingrese el nombre" },
        { id: "grado-perito", label: "GRADO PERITO", type: "text", placeholder: "Ingrese el grado" },
        { id: "fecha-asignacion", label: "FECHA ASIGNACIÓN", type: "text", placeholder: "Haga clic para agregar texto" },
        { id: "causa-ruc", label: "CAUSA RUC", type: "text", placeholder: "Haga clic para agregar texto" },
        { id: "fiscalia", label: "FISCALÍA", type: "text", placeholder: "Haga clic para agregar texto" },
        { id: "fecha-ip", label: "FECHA I.P", type: "text", placeholder: "Haga clic para agregar texto" },
        { id: "tribunal-de-garantia", label: "TRIBUNAL DE GARANTÍA", type: "text", placeholder: "Haga clic para agregar texto" },
        { id: "fecha-orden-judicial", label: "FECHA ORDEN JUDICIAL", type: "text", placeholder: "Haga clic para agregar texto" },
        { id: "nue", label: "N.U.E", type: "text", placeholder: "Haga clic para agregar texto" },
        { id: "nombre-juez", label: "NOMBRE JUEZ", type: "text", placeholder: "Haga clic para agregar texto" },
        { id: "marca", label: "MARCA", type: "text", placeholder: "Haga clic para agregar texto" },
        { id: "modelo", label: "MODELO", type: "text", placeholder: "Haga clic para agregar texto" },
        { id: "numero-telefono", label: "NÚMERO TELÉFONO", type: "text", placeholder: "Haga clic para agregar texto" },
        { id: "plazo", label: "PLAZO", type: "text", placeholder: "Haga clic para agregar texto" },
        { id: "seccion", label: "SECCIÓN", type: "text", placeholder: "Haga clic para agregar texto" },
        { id: "tipo-extraccion", label: "TIPO EXTRACCIÓN", type: "text", placeholder: "Haga clic para agregar texto" },
        { id: "estado-de-la-pericia", label: "ESTADO DE LA PERICIA", type: "text", placeholder: "Haga clic para agregar texto" },
        { id: "región", label: "REGIÓN", type: "text", placeholder: "Haga clic para agregar texto" },
        { id: "cantidad-celulares", label: "CANTIDAD CELULARES", type: "text", placeholder: "Haga clic para agregar texto" },
        { id: "delito", label: "DELITO", type: "text", placeholder: "Haga clic para agregar texto" },
        { id: "observacion", label: "OBSERVACIÓN", type: "text", placeholder: "Haga clic para agregar texto" },
      ],
    };
  },
  methods: {
    ingresarRegistro() {
      console.log("Registro ingresado:", this.registro);
      alert("Registro ingresado correctamente");
    },
  },
};
</script>

<style scoped>
/* Estilo general */
body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #a8d08d; /* Fondo verde claro */
    color: #333;
}

header {
    text-align: center;
    background-color: #4CAF50; /* Verde oscuro para el encabezado */
    color: white;
    padding: 15px;
    position: relative;
}

/* Estilo para el botón de volver */
.volver-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 6px 12px;
    background-color: white; /* Fondo blanco */
    border: 1px solid black; /* Borde negro */
    color: black; /* Letras negras */
    text-decoration: none;
    font-size: 16px;
    cursor: pointer;
}

.volver-btn:hover {
    background-color: #f0f0f0; /* Fondo gris claro al pasar el ratón */
}

/* Estilo del formulario */
.form-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    max-width: 1000px;
    margin: 20px auto;
    background-color: transparent; /* Fondo transparente para mostrar el verde claro del body */
    padding: 0px;
    border-radius: 0;
}

.form-group {
    display: flex;
    flex-direction: column;
    align-items: start;
}

.form-group input {
    padding: 5px;
    border: 1px solid #ccc;
    font-size: 10px;
    background-color: #f9f9f9;
    width: 80%;
}

/* Botón Ingresar en la parte inferior izquierda */
.ingresar-btn-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 20px 20px 10px 20px;
}

.ingresar-btn {
    background-color: white; /* Fondo blanco */
    color: black; /* Letras negras */
    border: 1px solid #333; /* Borde oscuro */
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
}

.ingresar-btn:hover {
    background-color: #f0f0f0; /* Fondo gris claro al pasar el ratón */
}

/* Responsivo */
@media (max-width: 768px) {
    .form-container {
        grid-template-columns: 1fr;
    }

    header h1 {
        font-size: 20px;
    }
}

</style>
