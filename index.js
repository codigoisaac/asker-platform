const express = require('express')
const ex = express()

ex.set('view engine', 'ejs')

ex.get('/', (req, res) => {
  res.render('index')
})

ex.listen(10, () => {
  console.log('Servidor rodando.')
})