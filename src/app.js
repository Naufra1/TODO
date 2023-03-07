import express from 'express'
import usuarioController from './controllers/usuario-controller'
import tarefaController from './controllers/tarefa-controller'

const app = express()
app.use(express.json())

usuarioController(app)
tarefaController(app)

export default app