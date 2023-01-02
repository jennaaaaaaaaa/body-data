const express = require("express")

const app = express()
const port = 1000

app.use(express.json())

app.get('/querystring', (req, res) => {

    const id = req.query.id
    // console.log(id)
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

    res.send({id})

    // // 객체구조분해할당으로 여러가지 데이터를 한 문장으로 작성하여 받아올 수 있음
    // // body에서 {"id":"value","password":"value"} 형식으로 데이터를 보냄
    // const {id, password} = req.body
    // res.json({id,password})
})

app.listen(port, () => {
    console.log(port, '서버 실행')
})
