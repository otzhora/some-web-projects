

function openEditWindow(edit_window)
{
    let backround_blackout = document.createElement("div")
    backround_blackout.classList.add("blackout")
    document.body.appendChild(edit_window)
    document.body.appendChild(backround_blackout)
}

function createEditWindow(card)
{
    let edit_window = document.createElement("div")
    edit_window.classList.add("edit_window")

    let okey_button = document.createElement("button")
    okey_button.classList.add("close")
    okey_button.style.backgroundImage = "url('images/okey.png')"
    okey_button.addEventListener("click", function(event){
        closeEditWindow(event, edit_window, card, true)
    })

    let cancel_button = document.createElement("button")
    cancel_button.classList.add("close_cancer")
    cancel_button.style.backgroundImage = "url('images/cancer.png')"
    cancel_button.addEventListener("click", function(event){
        closeEditWindow(event, edit_window, card, false)
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
        img_inp.value = card.querySelector("img").src;
    }   
    img_inp.placeholder = "enter img address"


    let checkbox_container = document.createElement("div")
    checkbox_container.classList.add("checkbox_container")

    let priority_inp = document.createElement("input")
    priority_inp.type = "checkbox"
    priority_inp.id = "make_priority"
    if(priority_container.contains(card))
    {
        priority_inp.checked = true;
    }
    checkbox_container.appendChild(priority_inp)

    let checkbox_label = document.createElement("label")
    checkbox_label.htmlFor = "make_priority"
    checkbox_label.textContent = "make note priority"
    checkbox_container.appendChild(checkbox_label)

    edit_window.appendChild(title)
    edit_window.appendChild(text_inp)
    edit_window.appendChild(img_inp)
    edit_window.appendChild(checkbox_container)
    edit_window.appendChild(okey_button)
    edit_window.appendChild(cancel_button)
    edit_window.appendChild(delete_button)
    return edit_window
}

function saveImg(card, img_url) {
    let img = card.querySelector("img")
    
    if(img && !img_url)
    {
        card.removeChild(card.querySelector(".img_container"))
    }
    else if(img)
    {
        img.src = img_url
    }
    else if(img_url){
        let img_container = document.createElement("div")
        img_container.classList.add("img_container")
        let img = document.createElement("img")
        img.src = img_url
        img_container.appendChild(img)

        let title_ = card.querySelector(".title")

        card.insertBefore(img_container, title_)
    }
}

function closeEditWindow(e, window, card, save)
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
        updData(cardToJson(card))
        document.body.removeChild(e.target.parentNode)
        return 0;
    }
}

function cardToJson(card){
    let json = {}
    json['id'] = parseInt(card.classList[2])
    json['title'] = card.querySelector('.title').textContent
    json['content'] = card.querySelector('.text').textContent
    if(card.querySelector('img'))
        json['image'] = card.querySelector('img').src

    json['prior'] = priority_container.contains(card)
    return json
}

function updData(json){
    for(let item of data){
        if(item['id'] === json['id']){
            item['title'] = json['title']
            item['content'] = json['content']
            if(json['image'])
                item['image'] = json['image']
            else delete item['image']
            item['prior'] = json['prior']
            sendToServer("POST", JSON.stringify(json), console.log)
            return 0
        }
    }
    data.push(json)
    sendToServer("PUT", JSON.stringify(json), console.log)
}

