let global_container = document.querySelector(".global_container")
let prior_title = document.querySelector("h1")
let priority_container = document.querySelector(".container")
let normal_title = document.querySelectorAll("h1")[1]
let other_container = document.querySelectorAll(".container")[1]


function deleteNote(event, card, edit_window) {
    if(other_container.contains(card))
    {
        other_container.removeChild(card)
    } 
    else if (priority_container.contains(card))
    {
        priority_container.removeChild(card)
    }
    updPriorities()
    deleteData(card)
    closeEditWindow(event, edit_window, card, false)
}

function deleteData(card){
    json = cardToJson(card)

    let id = json['id']
    let i = 0;
    for (; i < data.length; i++) {
        if(data[i].id === id)
            break;
    }
    if (i < data.length) {
        data.splice(i, 1)
    }
    sendToServer("DELETE", id, console.log)
}

function switchToEdit(event)
{
    if(event.target.classList.contains('action') && !document.body.querySelector(".edit_window"))
    {
        openEditWindow(createEditWindow(event.target.parentNode))
    }
}

function createEmptyCard() {
    let card = document.createElement("div")
    card.classList.add("card")

    let title_div = document.createElement("div")
    title_div.classList.add('title')
    card.appendChild(title_div)

    let text_div = document.createElement("div")
    text_div.classList.add("text")
    card.appendChild(text_div)

    let edit_btn = document.createElement("div")
    edit_btn.classList.add("action")
    edit_btn.classList.add("yellow")
    card.appendChild(edit_btn)

    card.classList.add("yellow")
    card.addEventListener("click", switchToEdit)
    if(card.classList.length === 2)
        card.classList.add(getCardId())
    return card
}

function getCardId(){
    let id = 0
    for(let card of data){
        id = Math.max(card['id'], id)
    }
    return ++id;
}

function sendToServer(method, body, cb) {
    const xhr = new XMLHttpRequest()
    xhr.open(method, "./data.js")

    xhr.setRequestHeader("Context-type", "text")
    
    xhr.onreadystatechange = () => {
        if(xhr.readyState != 4) return

        if (xhr.status != 200) {
            console.log(xhr.status + ': ' + xhr.statusText);
        } else {
            cb(xhr.responseText);
        }
    }
    
    xhr.send(body)
    
}

let add_btn = document.body.querySelector(".add")

add_btn.addEventListener("click", function () {
    if(!document.body.querySelector(".edit_window"))
    {
        let new_card = createEmptyCard()
        other_container.appendChild(new_card)
        openEditWindow(createEditWindow(new_card))
    }
})

//global_container.appendChild(other_container)

init()