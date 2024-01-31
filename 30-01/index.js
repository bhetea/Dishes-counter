let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("counter-el")
let count = 0

console. log(saveEl)

function increment() {
    count += 2 
    countEl.textContent = count
}

function save() {
    let countStr = count + " - " 
    saveEl.textContent += countStr
    console. log(count)
    countEl.textContent = 0
    count = 0
}