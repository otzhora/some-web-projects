let global_container = document.querySelector(".global_container")

let priority_container = document.createElement("div")
priority_container.classList.add("container")

let other_container = document.createElement("div")
other_container.classList.add("container")

function saveImg(card, img_url)
{
    let img = card.querySelector("img")
    console.log(img)
    if(img)
    {
        img.src = img_url
    }
    else if(img_url){
        
        let title_ = card.querySelector(".title")
        let text_  = card.querySelector(".text")
        let btn    = card.querySelector(".action")

        card.removeChild(title_)
        card.removeChild(text_)
        card.removeChild(btn)

        let img_container = document.createElement("div")
        img_container.classList.add("img_container")
        let img = document.createElement("img")
        img.src = img_url
        img_container.appendChild(img)

        card.appendChild(img_container)
        card.appendChild(title_)
        card.appendChild(text_)
        card.appendChild(btn)
    }
}

function deleteNote(event, card, edit_window)
{
    if(other_container.contains(card))
    {
        other_container.removeChild(card)
    } 
    else if (priority_container.contains(card))
    {
        priority_container.removeChild(card)
    }
    updPriorities()
    closeEditWindow(event, edit_window, card, false)
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