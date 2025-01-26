<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="password">Contraseña</label>
        <input type="password" id="password" required autocomplete="current-password" />
      </div>
      <button type="submit">Iniciar sesión</button>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    handleSubmit() {
      // Lógica para el envío del formulario
    }
  }
}
</script>
