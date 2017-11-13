let global_container = document.querySelector(".global_container")

let priority_container = document.createElement("div")
priority_container.classList.add("container")

let other_container = document.createElement("div")
other_container.classList.add("container")

let no_prioties = true;

function openEditWindow(edit_window)
{
    document.body.style.backgroundColor = "#878787"
    document.body.appendChild(edit_window)
}

function closeWindow(e, window, card, save)
{
    if(event.target.classList.contains("close") || event.target.classList.contains("close_cancer") ||event.target.classList.contains("delete"))
    {

        document.body.style.backgroundColor = "#e8e8e8"
        if(!save)
        {
            document.body.removeChild(window)
            return 0;
        }

        let inputs = window.querySelectorAll("input")

        card.querySelector(".title").textContent = inputs[0].value
        card.querySelector(".text").textContent = inputs[1].value
        document.body.style.backgroundColor = "#e8e8e8"
        document.body.removeChild(e.target.parentNode)
        return 0;
    }
}

function deleteNote(card, edit_window)
{
    if(other_container.contains(card))
    {
        other_container.removeChild(card)
    } 
    else if (priority_container.contains(card))
    {
        priority_container.remove(card)
    }
    closeWindow(0, edit_window, card, false)
}

function createEditWindow(card)
{
    let edit_window = document.createElement("div")
    edit_window.classList.add("edit_window")

    let okey_button = document.createElement("button")
    okey_button.classList.add("close")
    okey_button.style.backgroundImage = "url('images/okey.png')"
    okey_button.addEventListener("click", function(){
        closeWindow(event, edit_window, card, true)
    })

    let cancel_button = document.createElement("button")
    cancel_button.classList.add("close_cancer")
    cancel_button.style.backgroundImage = "url('images/cancer.png')"
    cancel_button.addEventListener("click", function(){
        closeWindow(event, edit_window, card, false)
    })

    let delete_button = document.createElement("button")
    delete_button.classList.add("delete")
    delete_button.textContent = "УДАЛИТЬ ЗАМЕТКУ"
    delete_button.addEventListener("click", () => {
        deleteNote(card, edit_window)
    })

    let title = document.createElement("input")
    if(card.querySelector(".title").textContent !== "")
        title.value = card.querySelector(".title").textContent
    title.placeholder = "edit title"

    let text_inp = document.createElement("input")
    if(card.querySelector(".text").textContent !== "")
        text_inp.value = card.querySelector(".text").textContent
    text_inp.placeholder = "edit text"

    edit_window.appendChild(title)
    edit_window.appendChild(text_inp)
    edit_window.appendChild(okey_button)
    edit_window.appendChild(cancel_button)
    edit_window.appendChild(delete_button)
    return edit_window
}

function switchToEdit(event)
{
    if(event.target.classList.contains('action') && !document.body.querySelector(".edit_window"))
    {
        openEditWindow(createEditWindow(event.target.parentNode))
    }
}

function createEmptyCard()
{
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
    return card
}


let add_btn = document.body.querySelector(".add")

add_btn.addEventListener("click", function (){
    if(!document.body.querySelector(".edit_window"))
    {
        let new_card = createEmptyCard()
        openEditWindow(createEditWindow(new_card))
        other_container.appendChild(new_card)
    }
})

global_container.appendChild(other_container)