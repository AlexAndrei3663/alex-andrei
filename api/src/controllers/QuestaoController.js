const express = require('express')

const router = express.Router()
const authorize = require('../middlewares/auth')

var questoes = []

router.route('/questao').get(authorize, (req, res, next) => {
    /* 	#swagger.tags = ['Questao']
       #swagger.description = 'Endpoint listar os questoes cadastradas' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    res.status(200).json({
        data: questoes,
        message: 'Dados recuperados com sucesso!'
    })
})

router.route('/questao').post(authorize, async (req, res, next) => {
    /* 	#swagger.tags = ['Questao']
        #swagger.description = 'Endpoint para cadastrar o time' */

    /*	#swagger.parameters['obj'] = {
            in: 'body',
            description: 'Informacoes da questoes',
            required: true,
            schema: { $ref: "#/definitions/Questao" }
    } */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    let questao = { id: questoes.length + 1, ...req.body }

    questoes.push(questao)

    res.status(201).json({
        data: questoes,
        message: 'Salvo com sucesso!'
    })
})

module.exports = router