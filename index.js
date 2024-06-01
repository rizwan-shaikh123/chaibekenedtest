require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/testing', (req, res) => {
    res.send('I am  deovloper') ;
  })
  app.get('/login',(req,res)=>{
res.send("<h1>Nusrate fateh ali khan</h1>");
  })
// forward slash is necessary to routing name
  app.get('/youtube',(req,res)=>{
res.send("<h2>The youtube code backend series</h2>");

  })
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})