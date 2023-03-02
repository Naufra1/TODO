import app from '../app.js'

const tarefa = app

function getTarefa(tarefa) {
  tarefa.get('/tarefa', (req, res) => {
    res.send('Utilizando a rota tarefas e pegando o dados da tarefa')
  })
}

export default getTarefa