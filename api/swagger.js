const swaggerAutogen = require('swagger-autogen')()


const doc = {
    info: {
        version: "1.0.0",
        title: "Minha API de Times",
        description: "Exemplo de API para o curso de React Native"
    },
    host: "localhost:4000",
    basePath: "/",
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
        {
            "name": "Time",
            "description": "Endpoints"
        },
        {
            "name": "Questao",
            "description": "Endpoints"
        }
    ],
    securityDefinitions: {
        apiKeyAuth:{
            type: "apiKey",
            in: "header",       
            name: "X-API-KEY",  
            description: "Descricao qualquer"
        }
    },
    definitions: {
        Time:{
            nome: "Flamengo",
            descricao: "Maior de todos"

        },
        Questao:{
            pergunta: "Palmeiras tem mundial?",
            resposta: "Óbvio que nao"

        }
    }
}

const outputFile = './swagger-output.json'
const endpointsFiles = ['./src/index.js']

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./src/index')          
})