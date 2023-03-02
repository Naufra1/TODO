import express from 'express'
import getUsuarios from './controllers/usuario-controller'
import getTarefa from './controllers/tarefa-controller'

const app = express()
const port = 3000

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

export default app