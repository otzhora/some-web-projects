let priority_container = document.createElement("div")
priority_container.classList.add("container")

let other_container = document.createElement("div")
other_container.classList.add("container")

let global_container = document.createElement("div")
global_container.classList.add("global_container")

function addCard(item, card){
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
    console.log(card)
    return card;
}

let has_priorities = false;

for(let item in data)
{
    let card = document.createElement("div")
    card.classList.add("card")

    card = addCard(data[item], card)

    if(data[item]['group'] === 'priority')
    {
        priority_container.appendChild(card)
        has_priorities = true;
    }
    else
    {
        other_container.appendChild(card)
    }
}

if(has_priorities)
{
    let sep1 = document.createElement('h1')
    sep1.textContent = "Приорететные"
    global_container.appendChild(sep1)
    console.log("SAS1")
    global_container.appendChild(priority_container)

    let sep2 = document.createElement('h1')
    sep2.textContent = "Обычные"
    global_container.appendChild(sep2)
    console.log("SAS2")
    global_container.appendChild(other_container)
    document.body.appendChild(global_container)
}