const express = require('express')
const path = require('path')
const app = express()
const port = 3018
const multer  = require('multer')
const upload = multer({dest: 'uploads/'})

app.get('/', (req,res) => {
  res.sendFile(path(__dirname, "templat/index.html"))
})
app.post('/merge', upload.array('pdfs', 2) ,function(req,res,next){
  console.log(req.files)
  res.send({data: req.files})
  // res.sendFile(path.join(__dirname,"./templat/index.html"))
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})