const express = require('express')
const ex = express()

ex.set('view engine', 'ejs')

ex.get('/:name?/:lang?', (req, res) => {
  const name = req.params.name
  const lang = req.params.lang
  const stack = [
    { nome: 'Sanduba', preco: 17 },
    { nome: 'Tea', preco: 3 }
  ]

  res.render('index', {
    name, lang, stack
  })
})

ex.listen(10, () => {
  console.log('Servidor rodando.')
})