
// 1. Create a 'double' function which will take in a number (n) and return double it's value

function double (n) {
  return n * 2
}
double (2)
double (5)
double (10)

// 2. Create a function that takes in a number (age) as an argument and returns a message that tells you that age in dog years! 
//    (one human year = seven dog years)

function dogYears (humanYears) {
  return humanYears * 7
}

console.log(dogYears( 29))

// 3. Create a function that will convert a value from celcius to fahrenheit and another one that converts fahrenheit to celcius


function celciusToFahr (cel) {
  return (cel * 9/5) + 32 
}

console.log(celciusToFahr(18))

function fahrToCelcius (fahr) {
  return (fahr - 32) * 5/9 
}

console.log(fahrToCelcius(120))

// 4. Create a function that takes the length, width and height of a  cube and return it's volume

function volume (a, b, c) {
  return a * b * c
}


// 5. !BONUS!  Create a function that will take in a sentence as argument and capitalize the first letter of all it's words
//    You want to use split() to split the sentence into individual words and save them in an array

function capSentence (sentence) {
  return sentence[0].toUpperCase() + sentence.slice(1).toLowerCase()
}

console.log( capSentence('THIS IS A TEST') )

function capWord (sentence) {
  var words = sentence.split(' ')
  // console.log(words)
  var capSentence = ""
  for( let i = 0; i < words.length; i++){
    words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase()
    capSentence += words[i] + " "
  }
  return capSentence
}
console.log(capWord('I love javascript'))
console.log(capWord('kojdnajkNJDNA KMD KAMD'))
console.log(capWord('Pokemon is awesome'))
console.log(capWord('FOOOOOOOOO'))



