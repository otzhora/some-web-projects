let global_container = document.querySelector(".global_container")

let priority_container = document.createElement("div")
priority_container.classList.add("container")

let other_container = document.createElement("div")
other_container.classList.add("container")

let no_prioties = true;

function closeWindow(e, window, card, save)
{
    if(event.target.classList.contains("close"))
    {
        console.log(e.target.parentNode)
        console.log(card.querySelector(".title"))
        if(!save)
        {
            document.body.removeChild(e.target.parentNode)
            return 0;
        }

        let inputs = window.querySelectorAll("input")
        console.log(inputs)

        card.querySelector(".title").textContent = inputs[0].value
        card.querySelector(".text").textContent = inputs[1].value
        document.body.removeChild(e.target.parentNode)
        return 0;
    }
}

function createEditWindow(card)
{
    console.log(card)
    let edit_window = document.createElement("div")
    edit_window.classList.add("edit_window")

    let okey_button = document.createElement("button")
    okey_button.classList.add("close")
    okey_button.addEventListener("click", function(){
        closeWindow(event, edit_window, card, true)
    })

    let title = document.createElement("input")
    console.log(card.querySelector(".title").textContent)
    if(card.querySelector(".title").textContent !== "")
        title.value = card.querySelector(".title").textContent
    title.placeholder = "edit title"

    let text_inp = document.createElement("input")
    console.log(card.querySelector(".text").textContent)
    if(card.querySelector(".text").textContent !== "")
        text_inp.value = card.querySelector(".text").textContent
    text_inp.placeholder = "edit title"

    edit_window.appendChild(title)
    edit_window.appendChild(text_inp)
    edit_window.appendChild(okey_button)

    return edit_window
}

function switchToEdit(event)
{
    if(event.target.classList.contains('action'))
    {
        let edit_window = createEditWindow(event.target.parentNode)

        document.body.appendChild(edit_window)
    }
}

function createEmptyCard(counter)
{
    let card = document.createElement("div")
    card.classList.add("card")

    let img_container = document.createElement("img")
    img_container.classList.add("img_container")
    card.appendChild(img_container)

    let title_div = document.createElement("div")
    title_div.classList.add('title')
    card.appendChild(title_div)

    let text_div = document.createElement("div")
    text_div.classList.add("text")
    text_div.textContent = counter
    card.appendChild(text_div)

    let edit_btn = document.createElement("div")
    edit_btn.classList.add("action")
    edit_btn.classList.add("yellow")
    card.appendChild(edit_btn)

    card.classList.add("yellow")
    card.addEventListener("click", switchToEdit)
    return card
}


let add_btn = document.body.querySelector(".add")
let counter = 1
add_btn.addEventListener("click", function (){
    other_container.appendChild(createEmptyCard(counter))
    counter++
})

global_container.appendChild(other_container)