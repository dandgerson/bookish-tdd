const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('stub-server/db.json')
const middlewares = jsonServer.defaults()

server.use((req, res, next) => {
  if (req.method === 'DELETE' && req.query['_cleanup']) {
    const db = router.db
    db.set('books', []).write()
    res.sendStatus(204)

    return
  }

  next()
})

server.use(middlewares)
server.use(router)

server.listen(8080, () => {
  console.log('JSON Server is running')
})
