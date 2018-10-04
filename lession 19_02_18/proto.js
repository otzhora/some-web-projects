class A {
    hi(){
        console.log("A")
    }
}

class B extends A {
    hi(){
        console.log("B")
    }
}

let testA = new A()

let testB = new B()

Object.prototype.from = function (className, field) {
    let currentClass = this.__proto__
    while (currentClass !== className.prototype) {
        currentClass = currentClass.__proto__
    } 
    currentClass[field].call(this)
}

testB.from(A, "hi")