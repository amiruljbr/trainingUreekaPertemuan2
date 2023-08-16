const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Pelatihan ke-2 backend')
})

app.get('/bakti', (req, res) => {
  res.send('Bakti Amirul Jabar')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})