let global_container = document.querySelector(".global_container")

let priority_container = document.createElement("div")
priority_container.classList.add("container")

let other_container = document.createElement("div")
other_container.classList.add("container")

let no_prioties = true;

function createEmptyCard()
{
    let card = document.createElement("div")
    card.classList.add("card")

    let img_container = document.createElement("div")
    img_container.classList.add("img_container")
    card.appendChild(img_container)

    let title = document.createElement("div")
    title.classList.add('title')
    card.appendChild(title)

    let text = document.createElement("div")
    text.classList.add("text")
    card.appendChild(text)

    let edit_btn = document.createElement("button")
    edit_btn.classList.add("action")
    edit_btn.classList.add("yellow")
    card.appendChild(edit_btn)

    card.classList.add("yellow")
    return card
}


let add_btn = document.body.querySelector(".add")
add_btn.addEventListener("click", function (){
    other_container.appendChild(createEmptyCard())
})

global_container.appendChild(other_container)