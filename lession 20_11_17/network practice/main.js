let inp = document.body.querySelector("input")
let btn = document.body.querySelector("button")


function sendNudes()
{
    let nickname = inp.value
    console.log(nickname)
    const xhr = new XMLHttpRequest()
    xhr.open("GET", "https://api.github.com/users/"+nickname)

    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200){
            console.log(xhr.response)
        }
        else if(xhr.readyState === XMLHttpRequest.DONE){
            console.log("NE RABOTAET")
        }
    }

    xhr.send()
}

btn.addEventListener("click", sendNudes)

