let obj = {
    key1: function() {},
    key2: [1, 2, 3]
}
console.log(obj['key1'])

let arr = [1, 'str', [1, 2]]

console.log(arr[0])
console.log(arr[2][1])
arr.forEach(console.log)

/* c-style многое что работает в с++ работет в js, но писать можно без ; */

function myAdd(a, b){
    let a10 = a * 10
    return a10 + b
}
myAdd(5, 10)

/* == - спид === - не спид, стоит использовать приведение типов иначе можно пососать */

/* DOM API */

let tag = 'div'
let el = document.createElement(tag)
let el2 = document.createElement('a')

el.appendChild(el2)

/* <div> <a> </a> </div> */

document.body.appendChild(el)

el.classList.add('card')
el.classList.toggle('c') /* false если убрал, true если нет */
el.classList.remove('c')
/* <div class="card"> */

let sel = '.note > h3'
let h = el.querySelector(sel)
// -> Node || nulls

let hAll  = el.querySelectorAll(sel)
// ->NodeList
// NodeList != Array
// NodeList[i], NodeList.lenght

el.textContent = 'str'
// <div> str </div>
// inner text

// <script> /* js */ </script>

// <script src='main.js'>
// </script>
// лучше писать в конце body
