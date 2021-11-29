//1. find input 1 and find input 2
const inputAddition1 = document.getElementById("addition-input-1")
const inputAddition2 = document.getElementById("addition-input-2")
const buttonAddition = document.getElementById("addition-button")
const resultAddition = document.getElementById("addition-result")

const inputSubtract1 = document.getElementById("subtraction-input-1")
const inputSubtract2 = document.getElementById("subtraction-input-2")
const buttonSubtract = document.getElementById("subtraction-button")
const resultSubtract = document.getElementById("subtraction-result")

//2. get values from inputs
buttonAddition.addEventListener('click', calculateAddition)

buttonSubtract.addEventListener('click', calculateSubtract)

//3. calculate result
//4. display result

//FUNCTIONS
function calculateAddition() {
    const inputValue1 = parseInt(inputAddition1.value)
    const inputValue2 = parseInt(inputAddition2.value)
    const result = addition(inputValue1, inputValue2)

    resultAddition.innerHTML = result
}

function addition(a, b) {
    return a + b
}
function calculateSubtract() {
    const inputValue1 = parseInt(inputSubtract1.value)
    const inputValue2 = parseInt(inputSubtract2.value)
    const result = subtract(inputValue1, inputValue2)

    resultSubtract.innerHTML = result
}

function subtract(a, b) {
    return a - b
}