
class Dispatcher{
    constructor(){
        this.subsrcibers = []
        console.log("dis const")
    }

    dispatch(action) {
        this.subsrcibers.forEach(element => {
            element(action)
        })
    }

    subscribe(sub){
        this.subsrcibers.push(sub)
    }

    unsubscribe(sub){
        this.subsrcibers.splice(this.subsrcibers.indexOf(sub), 1)
    }
}
let dispetcher = new Dispatcher()

class Store{
    constructor(state, update){
        this.state = state
        this.viewers = []
        this.update = update.bind(this)
        dispetcher.subscribe(update.bind(this))
    }

    subscribe(cb){
        this.viewers.push(cb)
    }

    unsubscribe(){
        dispetcher.unsubscribe(this.update.bind(this))
    }
}

let store = new Store({"val": 0}, function(action){
    if(action.type === "inc"){
        this.state.val++
    } else if(action.type === "dec"){
        this.state.val--
    }
    this.viewers.forEach(el=>{el(this.state)})
    console.log(this)
})

class View{
    update(state){
        this.val1.textContent = state.val
    }
    constructor(){
        this.body = document.body
        this.ch_val1 = this.body.querySelector(".ch_val1")
        this.ch_val1.addEventListener("click", () => {
            dispetcher.dispatch({"type": "inc"})
        })

        this.ch_val2 = this.body.querySelector(".ch_val2")
        this.ch_val2.addEventListener("click", () => {
            dispetcher.dispatch({"type": "dec"})
        })

        this.val1 = this.body.querySelector(".val1")

        store.subscribe(this.update.bind(this))
    }

    
}
console.log("test")


let view = new View()
