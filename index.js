const express = require('express')
const path = require('path')

const ex = express()

ex.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
ex.use('/js', express.static(path.join(__dirname, 'node_modules/booststrap/dist/js')))
ex.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')))



ex.set('view engine', 'ejs')

ex.use(express.static('public')) // which folder to use for static files

ex.get('/', (req, res) => {
  res.render('index')
})

ex.listen(10, () => {
  console.log('Servidor rodando.')
})
