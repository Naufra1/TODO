import app from '../app.js'

function getUsuarios(app) {
  app.get('/usuarios', (req, res) => {
    res.send('Utilizando a rota usuarios e pegando o dados do usuario')
  })
}

export default getUsuarios