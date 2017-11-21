let global_container = document.querySelector(".global_container")

let priority_container = document.createElement("div")
priority_container.classList.add("container")

let other_container = document.createElement("div")
other_container.classList.add("container")

let no_prioties = true;

function openEditWindow(edit_window)
{
    let backround_blackout = document.createElement("div")
    backround_blackout.classList.add("blackout")
    document.body.appendChild(edit_window)

    if(document.body.querySelector(".edit_window")){
        document.body.appendChild(backround_blackout)
    }
}

function closeWindow(e, window, card, save)
{
    if(e.target.classList.contains("close") || e.target.classList.contains("close_cancer") || e.target.classList.contains("delete"))
    {

        if(document.body.querySelector(".blackout")){
            document.body.removeChild(document.querySelector(".blackout"))
        }
        if(!save)
        {
            document.body.removeChild(window)
            if(document.body.querySelector(".blackout")){
                document.body.removeChild(document.querySelector(".blackout"))
            }
            return 0;
        }

        let inputs = window.querySelectorAll("input")

        card.querySelector(".title").textContent = inputs[0].value
        card.querySelector(".text").textContent = inputs[1].value
        saveImg(card, inputs[2].value)
        changePriorities(card, inputs[3].checked)
        document.body.removeChild(e.target.parentNode)
        return 0;
    }
}

function changePriorities(card, checked)
{
    if(no_prioties && checked)
    {
        no_prioties = false
        let copy_container = other_container;
        global_container.removeChild(other_container)

        let title1 = document.createElement("h1")
        title1.textContent = "Priority"
        let title2 = document.createElement("h1")
        title2.textContent = "Normal"
        global_container.appendChild(title1)
        global_container.appendChild(priority_container)
        global_container.appendChild(title2)
        global_container.appendChild(copy_container)
    }
    if(checked)
    {
        if(other_container.contains(card))
        {
            other_container.removeChild(card)
        }
        if(!priority_container.contains(card))
        {
            priority_container.appendChild(card)
        }
    }
    if(!checked)
    {
        if(priority_container.contains(card))
        {
            priority_container.removeChild(card)
        }
        if(!other_container.contains(card))
        {
            other_container.appendChild(card)
        }
    }
    
    //console.log(checked)
    //console.log(priority_container)
    //console.log(other_container)
}

function updPriorities()
{
    if(!priority_container.childNodes.length && global_container.contains(priority_container))
    {
        console.log("KEK")
        let prior_title = global_container.querySelector("h1")
        global_container.removeChild(prior_title)
        no_prioties = true
        let other_title = global_container.querySelector("h1")
        global_container.removeChild(other_title)
        global_container.removeChild(priority_container)
    }
    
}

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
    closeWindow(event, edit_window, card, false)
}

function createEditWindow(card)
{
    // TODO: redisign thid

    let edit_window = document.createElement("div")
    edit_window.classList.add("edit_window")

    let okey_button = document.createElement("button")
    okey_button.classList.add("close")
    okey_button.style.backgroundImage = "url('images/okey.png')"
    okey_button.addEventListener("click", function(event){
        closeWindow(event, edit_window, card, true)
    })

    let cancel_button = document.createElement("button")
    cancel_button.classList.add("close_cancer")
    cancel_button.style.backgroundImage = "url('images/cancer.png')"
    cancel_button.addEventListener("click", function(event){
        closeWindow(event, edit_window, card, false)
    })

    let delete_button = document.createElement("button")
    delete_button.classList.add("delete")
    delete_button.textContent = "УДАЛИТЬ ЗАМЕТКУ"
    delete_button.addEventListener("click", (event) => {
        deleteNote(event, card, edit_window)
    })

    let title = document.createElement("input")
    if(card.querySelector(".title").textContent !== "")
        title.value = card.querySelector(".title").textContent
    title.placeholder = "edit title"

    let text_inp = document.createElement("input")
    if(card.querySelector(".text").textContent !== "")
        text_inp.value = card.querySelector(".text").textContent
    text_inp.placeholder = "edit text"

    let img_inp = document.createElement("input")
    if(card.querySelector("img"))
    {
        console.log(card.querySelector("img"))
        img_inp.value = card.querySelector("img").src;
    }   
    img_inp.placeholder = "enter img address"

    let priority_inp = document.createElement("input")
    priority_inp.type = "checkbox"
    priority_inp.id = "make_priority"
    if(priority_container.contains(card))
    {
        priority_inp.checked = true;
    }

    let checkbox_label = document.createElement("label")
    checkbox_label.htmlFor = "make_priority"
    checkbox_label.textContent = "make note priority"

    edit_window.appendChild(title)
    edit_window.appendChild(text_inp)
    edit_window.appendChild(img_inp)
    edit_window.appendChild(priority_inp)
    edit_window.appendChild(checkbox_label)
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