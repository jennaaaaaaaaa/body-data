const express = require("express")

const app = express()

app.use(express.json())
const port = 1000

app.get('/querystring', (req, res) => {
    const id = req.query.id
    res.send(id)
})

app.post('/body-formdata', (req, res) => {
    res.send('body-formdata')
})

app.post('/body-multipart', (req, res) => {
    res.send('body-multipart')
})

app.post('/body-json', (req, res) => {
    const { id } = req.body

    res.send(id)
})

app.listen(port, () => {
    console.log(port, '서버 실행')
})
