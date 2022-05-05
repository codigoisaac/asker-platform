const express = require('express')
const ex = express()

ex.set('view engine', 'ejs')

ex.use(express.static('public'))

ex.get('/:name?/:lang?', (req, res) => {
  const name = req.params.name
  const lang = req.params.lang
  const stack = [
    { name: 'JavaScript', xp: 7 },
    { name: 'Node.js', xp: 5 },
    { name: 'Express.js', xp: 5 },
    { name: 'MySQL', xp: 6 },
    { name: 'Vue.js', xp: 7 }
  ]

  res.render('index', {
    name, lang, stack
  })
})

ex.listen(10, () => {
  console.log('Servidor rodando.')
})