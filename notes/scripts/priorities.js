let no_prioties = true;
let no_normal = false;

function changePriorities(card, checked)
{
    if(checked) {
        priority_container.appendChild(card)
    } else {
        other_container.appendChild(card)
    }
    updPriorities()
}

function updPriorities()
{
    if(!(priority_container.childNodes.length-1)) {
        prior_title.classList.add("m_hidden")
        priority_container.classList.add("m_hidden")
        normal_title.classList.add("m_hidden")
    }

    if((priority_container.childNodes.length-1) && !(other_container.childNodes.length-1)){
        priority_container.classList.remove("m_hidden")
        prior_title.classList.remove("m_hidden")
        normal_title.classList.add("m_hidden")
    }

    if((priority_container.childNodes.length-1) && (other_container.childNodes.length-1)){
        prior_title.classList.remove("m_hidden")
        priority_container.classList.remove("m_hidden")
        normal_title.classList.remove("m_hidden")
    }
}