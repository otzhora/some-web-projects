function init() {
    for(let json of data){
        let card = jsonToCard(json)
        if(json.prior) {
            priority_container.appendChild(card)
        }
        else other_container.appendChild(card)
    }
    updPriorities()
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
    return card
}