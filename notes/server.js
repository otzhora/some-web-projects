const http = require('http')
const fs = require('fs')
const path = require('path')
const url = require('url')

const data = require('./data')

const content_types = {
    css: 'text/css',
    html: 'text/html',
    jpeg: 'image/jpeg',
    jpg: 'image/jpeg',
    png: 'image/png'
}

const binary_types = ['jpeg', 'jpg', 'png']

function readText (pathname) {
    let htmlData = fs.readFileSync(pathname, 'utf8')
    let noteData = JSON.stringify(data)

    let template = `var data = ${noteData}`
    return htmlData.replace(/{\s*data\s*}/, template)
}

function getRequestBody (request) {
    let body = ''
    
    request.on('data', data => {
        body += data
    })
        
    return new Promise(resolve => {
        request.on('end', () => {
            resolve(body)
        })
    })
}

function updData(){
    let text = 'module.exports = ['
    for(let i = 0; i < data.length; i++){
        text += JSON.stringify(data[i])
        if(i < data.length - 1)
        text += ','
    }
    text += ']'
    fs.writeFile("data.js", text, (err) => {
        if(err) throw err
        else console.log("succ")
    })
}

const server = http.createServer(async (request, response) => {
    if (request.method === 'POST') {
        console.log('===')
        console.log('Handling POST request.')

        let body = await getRequestBody(request)
        console.log('Request body:', body)
        
        let note = JSON.parse(body)

        for(let i = 0; i < data.length; i++) {
            if(data[i].id === note.id){
                data[i] = note
            }
        }

        updData()

        response.end(JSON.stringify({
            response: "OK"
        }))
    } else if (request.method === "PUT") {
        console.log('===')
        console.log('Handling PUT request.')

        let body = await getRequestBody(request)
        console.log('Request body:', body)

        data.push(JSON.parse(body))
        updData()

        response.end(JSON.stringify({
            response: "OK"
        }))
    } else if (request.method === "DELETE"){
        console.log('===')
        console.log('Handling DELETE request.')

        let body = await getRequestBody(request)
        console.log('Request body:', body)

        let id = parseInt(body)
        let i = 0;
        for(; i < data.length; i++){
            if(data[i].id === id)
                break;
        }
        if(i < data.length){
            data.splice(i, 1)
        }
        updData()

        response.end(JSON.stringify({
            response: "OK"
        }))
    } else {
        let pathname = url.parse(request.url).pathname
        
        pathname = pathname.slice(1)
        
        if (pathname.endsWith('/') || !pathname.length)
            pathname += 'index.html'

        if (!fs.existsSync(pathname)) {
            response.statusCode = 404
            response.end('404 Not Found')
            return
        }

        let extension = pathname.split('.').pop()
        let type = content_types[extension] || 'text/plain'
        response.setHeader('Content-Type', type)

        if (binary_types.indexOf(extension) + 1) {
            let data = fs.readFileSync(pathname)
            response.end(data)
        } else {
            response.end(readText(pathname))
        }
    }
    
})

server.listen(8080)