const fs = require("fs")


let test = fs.readFile("./data.json", "utf-8", (err, data)=>{ 
    if(err) throw err
    let json = JSON.parse(data)
    json['awesmness'] = 100;

    fs.writeFile("./data.json", JSON.stringify(json), (err)=>{
        if(err) throw err
    })  
})