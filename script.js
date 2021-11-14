//1. find input 1 and find input 2
const inputAddition1 = document.getElementById("addition-input-1")
const inputAddition2 = document.getElementById("addition-input-2")
const buttonAddition = document.getElementById("addition-button")
const resultAddition = document.getElementById("addition-result")

//2. get values from inputs
buttonAddition.addEventListener('click', calculateAddition)

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