const express = require('express')
const produtoControler = require('../controllers/produtoController')

const router = express.Router();

router.get('/criar', produtoControler.cirarProduto)
router.get('/deletar/:id', produtoControler.deletarProduto )


module.exports = router;

