require('dotenv').config()

const rotas = require('./rotas')
const swagger = require('swagger-ui-express')
const swaggerDoc = require('../swagger.json')
const express = require('express')
const app = express()

const port = process.env.PORT || 3030

app.use(express.json())
app.use('/api-docs', swagger.serve, swagger.setup(swaggerDoc))
app.use(rotas)

// app.listen(process.env.PORT, () => {
//   console.log(`Servidor conectado a porta: ${process.env.PORT || 3030}`)
// })

app.listen(port, () => {
  console.log(
    `Server running on port ${port}\nhttp://localhost:${port}\npress CTRL+C to stop server`
  )
})
