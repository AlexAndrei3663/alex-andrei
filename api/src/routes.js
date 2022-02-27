
const express = require('express')

const router = express.Router()

const apiV2 = require('./controllers/TimeController')
const apiQuestao = require('./controllers/QuestaoController')

router.use('/', apiV2)
router.use('/', apiQuestao)


module.exports = router