const fs = require('fs')

function fsPromise(fileName) {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, 'utf-8', (err, data) => {
            if(err) reject(err)
            resolve(data)           
        })
    })
}

fsPromise('sas.txt')
    .then(console.log)
    .catch(console.log)

async function asTest() { 
    try {
        const data = await fsPromise('sas.txt')
        console.log('eba', data)
    } catch(err){
        console.log('omg', err)
    }
}

asTest()