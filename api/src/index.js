/*
 * Run the project and access the documentation at: http://localhost:3000/doc
 *
 * Use the command below to generate the documentation without starting the project:
 * $ npm start
 *
 * Use the command below to generate the documentation at project startup:
 * $ npm run start-gendoc
 */


const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('../swagger-output.json')
const express = require('express')
var cors = require('cors')
const app = express()
const bodyParser = require('body-parser');

/* Routes */
const router = require('./routes')

/* Middlewares */
app.use(bodyParser.json());
app.use(cors())
app.use(router)
app.use('/swagger-ui', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.listen(4000, () => {
  console.log("Server is running!\nAPI documentation: http://localhost:4000/swagger-ui")
})
