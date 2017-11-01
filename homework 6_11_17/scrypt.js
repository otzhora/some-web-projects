let container = document.createElement("div")
container.classList.add("container")

function addCard(item){
    let card = document.createElement("div")
    card.classList.add("card")

    if (item['image'])
    {
        let img_container = document.createElement("div")
        img_container.classList.add("img_container")
        let img = new Image()
        img.src = item['image']
        img_container.appendChild(img)
        card.appendChild(img_container)
    }

    let title = document.createElement("div")
    title.classList.add('title')
    title.textContent = item['title']
    card.appendChild(title)
    
    let text = document.createElement("div")
    text.classList.add("text")
    text.textContent = item['content']
    card.appendChild(text)

    let action = document.createElement("div")
    action.classList.add("action")
    action.textContent = "Actions"
    card.appendChild(action)

    card.classList.add(item['color'])
    container.appendChild(card)
    console.log(card)
}

for(let item in data)
{
    addCard(data[item])
}
document.body.appendChild(container)