const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('bd.json'); // Ruta al archivo JSON
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.get('/login', (req, res) => {
  const { username, password } = req.query;
  const user = router.db.get('users').find({ username, password }).value();
  if (user) {
    res.json(user);
  } else {
    res.status(404).send('Usuario no encontrado');
  }
});

// Usa el router para manejar otros endpoints
server.use(router);

server.listen(3001, () => {
  console.log('JSON Server está corriendo en http://localhost:3001');
});
