const express = require("express")

const app = express()
const port = 1000

app.get('/querystring', (req,res) => {
    res.send('querystring')
})

app.post('/body-formdata', (req,res) => {
    res.send('body-formdata')
})

app.post('/body-multipart', (req,res) => {
    res.send('body-multipart')
})

app.post('/body-json', (req,res) => {
    res.send('body-json')
})

app.listen(port, () => {
    console.log(port, '서버 실행')
})
