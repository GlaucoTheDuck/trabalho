// server/server.js (backend simulado com json-server)
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 5000;

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use('/api', router);

server.listen(port, () => {
  console.log(`JSON Server está rodando na porta ${port}`);
});