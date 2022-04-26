const express = require('express')
const ex = express()

ex.set('view engine', 'ejs')

ex.get('/:name?/:lang?', (req, res) => {
  const name = req.params.name
  const lang = req.params.lang

  res.render('index', {
    name, lang
  })
})

ex.listen(10, () => {
  console.log('Servidor rodando.')
})