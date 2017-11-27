const express = require('express')
const app = express()
const bodyParser = require('body-parser')

let users = {}
app.use(bodyParser.json())
app.use(express.static(__dirname))

app.get('/users/:name', (req, res) => {
    console.log(req.body)
    if(users[req.params.name])
    {
        res.send(users[req.params.name])
    }
})

app.post('/users/:name', (req, res) => {
    console.log(req.body)
    let name = req.params.name
    if(!users[req.params.name])
    {
        users[name] = {
            "fullName": req.body.fullName,
            "country": req.body.country
        }
        console.log(users[name])
    }
    res.send(users[name])
})

app.delete('/users/:name', (req, res) => {
    let name = req.params.name
    if(users[name])
    {
        delete users[name]
        console.log("del", req.params.name)
    }
    res.send({})
})

app.put('/users/:name', (req, res) => {
    let name = req.params.name
    if(users[name])
    {
        users[name].fullName = req.body.fullName
        users[name].country = req.body.country
    }
    res.send(users[name])
})

app.listen(8080)