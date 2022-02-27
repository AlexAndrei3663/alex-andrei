const express = require('express')

const router = express.Router()
const authorize = require('../middlewares/auth')

var times = []

router.route('/times').get(authorize, (req, res, next) => {
    /* 	#swagger.tags = ['Time']
       #swagger.description = 'Endpoint listar os times cadastrados' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    res.status(200).json({
        data: times,
        message: 'Dados recuperados com sucesso!'
    })
})

router.route('/times').post(authorize, async (req, res, next) => {
    /* 	#swagger.tags = ['Time']
        #swagger.description = 'Endpoint para cadastrar o time' */

    /*	#swagger.parameters['obj'] = {
            in: 'body',
            description: 'Informacoes do time',
            required: true,
            schema: { $ref: "#/definitions/Time" }
    } */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    let time = { id: times.length + 1, ...req.body }

    times.push(time)

    res.status(201).json({
        data: time,
        message: 'Salvo com sucesso!'
    })
})

module.exports = router