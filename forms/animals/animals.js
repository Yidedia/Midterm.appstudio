

//create array
let myAnimals = ['dog', 'cat', 'horse', 'meerkat']

// prompt and push
let userAnimal = prompt("What is your favorite animal")
myAnimals.push(userAnimal.toLowerCase())

//show alert
alert(`The last animal is a/an ${myAnimals[myAnimals.length - 1]}.`)
