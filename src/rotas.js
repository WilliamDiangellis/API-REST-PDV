// TODO: Requisições de controladores e midweres.

const { Router } = require('express')
const { listarCategorias } = require('./controladores/categorias')
const { cadastroDeUsuario } = require('./controladores/usuarios')
const rotas = Router()

//Teste inicial
rotas.get('/', (req, res) => {
  return res.status(200).json({ mensagem: 'Teste de API' })
})

//Endpoints oficiais de CATEGORIAS:
rotas.get('/categoria', listarCategorias) // Listar todas as categorias cadastradas

//Endpoints oficiais de USUARIOS:
rotas.post('/usuario', cadastroDeUsuario) //Cadastro de usuario
rotas.post('/login') // Login de usuario

//TODO: Validação obrigatoria com Token

rotas.get('/usuario') // Dedatalhar dados do perfil de usuario
rotas.put('/usuario') // Atualizar/Editar perfil

module.exports = rotas
