const express = require('express')
const ex = express()

ex.get('/', (req, res) => {
  res.send('Welcome to Asker')
})

ex.listen(10, () => {
  console.log('Servidor rodando.')
})