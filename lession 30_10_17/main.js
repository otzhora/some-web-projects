let container = document.createElement("div")
container.classList.add("container")

function addCard(item){
    let card = document.createElement("div")
    card.classList.add("card")

    let title = document.createElement("div")
    title.classList.add('title')
    title.textContent = item['title']
    card.appendChild(title)
    
    let text = document.createElement("div")
    text.classList.add("text")
    text.textContent = item['content']
    card.appendChild(text)

    card.classList.add(item['color'])
    container.appendChild(card)
    console.log(card)
}

for(let item in data)
{
    addCard(data[item])
}
document.body.appendChild(container)