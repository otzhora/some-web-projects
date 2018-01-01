function init() {
    for(let json of data){
        let card = jsonToCard(json)
        other_container.appendChild(card)
        changePriorities(card, json['prior'])
    }
}

function jsonToCard(json) {
    let card = createEmptyCard()
    card.querySelector(".title").textContent = json['title']
    card.querySelector(".text").textContent = json['content']
    saveImg(card, json['image'])
    if(card.classList.length === 3){
        card.classList.remove(card.classList[2])
    }
    card.classList.add(json['id'])
    console.log(json)
    return card
}