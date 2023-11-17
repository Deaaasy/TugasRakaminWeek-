const express = require('express')
const app = express()
const port = 3001

const filmRouter = require('./router/film')
const categoryRouter = require('./router/category')

app.get('/', (req, res) => {
  res.send('Hello!, saya laily')
})

app.use('/film', filmRouter)
app.use('/category', categoryRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})