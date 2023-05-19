const joi = require('joi')

const schemaUsuario = joi.object({
  nome: joi.string().regex(/^[^0-9]*$/).required().trim().messages({
    'any.required': 'É obrigatório informar o nome!',
    'string.empty': 'Nome não pode ser um campo vazio.',
    'string.base': 'Insira um nome válido',
    'string.pattern.base': 'Insira um nome válido.'
  }),

  email: joi.string().email().required().messages({
    'any.required': 'É obrigatório informar o email!',
    'string.empty': 'Email não pode ser um campo vazio.',
    'string.email': 'O Email informado não é válido'
  }),

  senha: joi.string().trim().min(4).required().messages({
    'any.required': 'É obrigatório informar a senha!',
    'string.empty': 'Senha não pode ser um campo vazio.',
    'string.base': 'O campo senha deve ser do tipo string.',
    'string.min': 'A senha precisa conter, no mínimo, 4 caracteres.'
  })
})

const schemaLogin = joi.object({
  email: joi.string().email().required().messages({
    'any.required': 'É obrigatório informar o email!',
    'string.empty': 'Email não pode ser um campo vazio.',
    'string.email': 'O Email não é válido.'
  }),

  senha: joi.string().trim().min(4).required().messages({
    'any.required': 'É obrigatório informar a senha!',
    'string.empty': 'Senha não pode ser um campo vazio.',
    'string.min': 'A senha precisa conter, no mínimo, 4 caracteres.'
  })
})

const schemaProdutos = joi.object({
  descricao: joi.string().trim().required().messages({
    'any.required': 'É obrigatório informar a descrição do produto!',
    'string.empty': 'Descrição não pode ser um campo vazio.'
  }),
  quantidade_estoque: joi.number().required().min(0).integer().messages({
    'any.required': 'É obrigatório informar a quantidade em estoque!',
    'number.base': 'quantidade_estoque deve ser um campo numérico.',
    'string.empty': 'categoria_id não pode ser um campo vazio.',
    'number.min': 'A quantidade em estoque deve ser no mínimo 0.',
    'number.integer': 'A quantidade em estoque deve ser um número inteiro.'
  }),
  valor: joi.number().required().min(1).integer().messages({
    'any.required': 'É obrigatório informar o valor do produto!',
    'number.base': 'Valor deve ser um campo numérico.',
    'string.empty': 'categoria_id não pode ser um campo vazio.',
    'number.min': 'O valor do produto deve ser no mínimo 1 centavo.',
    'number.integer': 'O valor informado não é valido.'
  }),
  categoria_id: joi.number().required().messages({
    'any.required': 'É obrigatório informar o ID da categoria!',
    'number.base': 'categoria_id deve ser um campo numérico.',
    'string.empty': 'categoria_id não pode ser um campo vazio.'
  }),
  produto_imagem: joi.string().uri().optional().allow(null).messages({
    'string.uri': 'produto_imagem deve ser uma URL válida.',
    'string.empty': 'produto_imagem não pode ser um campo vazio.',
    'string.base': 'produto_imagem deve ser um campo do tipo string.'
  })
})

const schemaClientes = joi.object({
  nome: joi.string().trim().regex(/^[^0-9]*$/).required().messages({
    'any.required': 'É obrigatório informar o nome do cliente!',
    'string.empty': 'Nome não pode ser um campo vazio.',
    'string.base': 'Nome deve ser um campo do tipo string.',
    'string.pattern.base': 'Insira um nome válido.'
  }),
  email: joi.string().email().required().messages({
    'any.required': 'É obrigatório informar o email do cliente!',
    'string.empty': 'Email não pode ser um campo vazio.',
    'string.email': 'O Email informado é inválido.',
    'string.base': 'O Email informado não é válido.'
  }),
  cpf: joi.string().trim().length(11).required().messages({
    'any.required': 'É obrigatório informar o CPF do cliente!',
    'string.empty': 'CPF não pode ser um campo vazio.',
    'string.length': 'O campo CPF deve conter 11 digitos.',
    'string.base': 'CPF deve ser um campo do tipo string.'
  }),
  cep: joi.string().trim().length(8).required().messages({
    'any.required': 'É obrigatório informar o CEP do cliente!',
    'string.empty': 'CEP não pode ser um campo vazio.',
    'string.length': 'O CEP deve conter 8 caracteres.',
    'string.base': 'CEP deve ser um campo do tipo string.'
  }),
  estado: joi.string().trim().regex(/[A-Z]/).length(2).messages({
    'string.empty': 'Estado não pode ser um campo vazio.',
    'string.length': 'O campo estado deve conter 2 caracteres.',
    'string.pattern.base': 'O estado deve ser informado no formato UF.'
  }),
  rua: joi.string().messages({
    'string.base': 'Rua deve ser um campo do tipo string.'
  }),
  numero: joi.string().messages({
    'string.base': 'Número deve ser um campo do tipo string.'
  }),
  bairro: joi.string().messages({
    'string.base': 'Bairro deve ser um campo do tipo string.'
  }),
  cidade: joi.string().messages({
    'string.base': 'Cidade deve ser um campo do tipo string.'
  })
})

const schemaUpload = joi.object({
  imagem: joi.string().uri().optional().allow(null).messages({
    'string.uri': 'imagem deve ser uma URL válida.',
    'string.empty': 'imagem não pode ser um campo vazio.',
    'string.base': 'imagem deve ser um campo do tipo string.'
  })
})

const schemaPedidos = joi.object({
  cliente_id: joi.number().integer().required().messages({
    'any.required': 'É obrigatório informar o ID do cliente!',
    'number.base': 'cliente_id deve ser um campo numérico.',
    'string.empty': 'cliente_id não pode ser um campo vazio.',
  }),
  observacao: joi.string().allow('').messages({
    'string.base': 'observacao deve ser uma string.',
  }),
  pedido_produtos: joi.array().min(1).required().messages({
    'object.unknown': 'É obrigatório informar os produtos do pedido!',
    'any.required': 'É obrigatório informar os produtos do pedido!',
    'array.min': 'É obrigatório informar pelo menos um produto no pedido!'
  }).items({
    produto_id: joi.number().integer().required().messages({
      'any.required': 'É obrigatório informar o ID do produto!',
      'number.base': 'produto_id deve ser um campo numérico.',
      'number.empty': 'produto_id não pode ser um campo vazio.',
    }),
    quantidade_produto: joi.number().integer().required().messages({
      'any.required': 'É obrigatório informar a quantidade do produto!',
      'number.base': 'quantidade deve ser um campo numérico.',
      'string.empty': 'quantidade não pode ser um campo vazio.',
    }),
  })
})

module.exports = {
  schemaUsuario,
  schemaLogin,
  schemaProdutos,
  schemaClientes,
  schemaUpload,
  schemaPedidos
}