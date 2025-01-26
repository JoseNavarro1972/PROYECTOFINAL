axios
  .get('http://localhost:3001/user', {
    params: {
      username: this.username,
      password: this.password,
    },
  })
  .then((response) => {
    const users = response.data;
    const user = users.find((u) => u.username === this.username && u.password === this.password);
    if (user) {
      this.errorMessage = '';
      alert('Login exitoso');
      // Aquí puedes redirigir al usuario a otra página si lo deseas
      // this.$router.push('/dashboard');
    } else {
      this.errorMessage = 'Usuario o contraseña incorrectos';
    }
  })
  .catch((error) => {
    console.error('Error al intentar iniciar sesión:', error);
    this.errorMessage = 'Hubo un error en la conexión';
  });
