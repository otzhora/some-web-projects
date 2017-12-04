

function send_nudes()
{
    console.log("sending nudes")
    const xhr = new XMLHttpRequest()

    xhr.open("POST", "localhost:8080")
    xhr.setRequestHeader("Content-type", "plain-text")
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4)
            console.log("succc")
    }

    
}

let json = {
    "kek": 4,
    "test": 134
}

console.log(JSON.stringify(json))