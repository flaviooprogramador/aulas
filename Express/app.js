const express = require('express')
const rotasProdutos = require('./rotas/rotasProdutos')

let app = express()

app.get('/', (req, res) => res.send(`Olá mundo`))
app.get('/contatos', (req,res)=> res.send("pagina contatos"))



app.use('/produtos', rotasProdutos);

//criando servidor
app.listen(3000, ()=> console.log("Servidor rodando na porta 3000"))

