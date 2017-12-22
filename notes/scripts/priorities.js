let no_prioties = true;

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