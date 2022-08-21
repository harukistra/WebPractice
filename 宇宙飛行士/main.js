let age = 26
let isWorking = true
let isInspace = false
let isBeardShaved = false 

const person = document.getElementById('person')
const quitWorkingButton = document.getElementById('quit-working-button')
const launchButton = document.getElementById('launch-button')
const removebutton = document.getElementById('remove-button')

const draw = function() {
    if(isWorking) {
        person.textContent = "ええいいやあ君からもらい泣き"
    } else {
        person.textContent = "燦燦きらりいろ～した～"
    }

    if(isInspace) {
        person.textContent += "見えないものを見ようとして～"
    } else {
        person.textContent += "お～いえ～え～　あはあ～ん"
    }
}

quitWorkingButton.onclick = function()  {
    isWorking = false
    draw()
}

launchButton.onclick = function() { 
    isInspace = true
    draw()
}

const input = document.getElementById('input')
const container = document.getElementById('container')
const addButton = document.getElementById('add-button')

let list = []
if(localStorage.list) {
    list = JSON.parse(localStorage.list)
    for(const text of list) {
        const card = document.createElement('div')
        card.className = "card"
        card.textContent = text
        container.append(card)
    }
}

addButton.onclick = function() {
    const text = input.value
    list.push(text)
    this.localStorage.list = JSON.stringify(list)
    const card = document.createElement("div")
    card.className = "card"
    card.textContent = text
    container.append(card)
    input.value = ""
}

removebutton.onclick = function() {
    list = []
    localStorage.list = JSON.stringify(list)

    container.textContent = ""
}