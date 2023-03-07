import { bdUsuarios } from "../infra/db"

function usuarioController(app) {
  app.get('/usuario', listar)
  app.post('/usuario', inserir)
  app.get('/usuario/email/:email', verificarEmail)
  app.delete('usuario/email/:email', deletarEmail)

  function listar(req, res) {
      const usuarios = bdUsuarios
      res.send(usuarios)
  }
  
  function inserir(req, res) {
      res.send('Método POST')
      console.log(req.body)
  }

  function verificarEmail(req, res) {
    const usuario = bdUsuarios.find(usuario => usuario.email === req.params.email)

    if(!usuario) {
      res.status(404).send('Não encontrado')
    }
    res.send(usuario)
  }

  function deletarEmail(req, res) {
    const usuario = bdUsuarios.find(usuario => usuario.email === req.params.email)
    
    res.send(`{${usuario} deletado}`)
  }
}

export default usuarioController