/*
//create func
function calcAvgSquare(num1, num2, num3) {
    let ans = ((num1 + num2 + num3) / 3) * (num1 ** 2)
    return ans
}

function randomMultiplication(num4, rand) {
    let ans = num4 * rand
    return ans

}
// get input
question = prompt('Do you want to do an average calculation (type average) or a random multiplication (type multiply).')

if (question.toLowerCase() == 'average') {
    num1 = Number(prompt("First Number"))
    num2 = Number(prompt("Second Number"))
    num3 = Number(prompt("Third Number"))
    output = calcAvgSquare(num1, num2, num3)
    alert(`The answer is ${output}.`)
} else if (question.toLowerCase() == 'multiply') {
    let num4 = Number(prompt("Enter the number ot be multiplied"))
    let rand = Number(Math.floor(Math.random() * 10) + 1)
    let text = randomMultiplication(num4, rand)
    alert(`The result of multiplying the random number ${rand} with ${num4} is ${text}`)
}

*/