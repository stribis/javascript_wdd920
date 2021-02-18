

var notice = 'Important! Remember to pay your taxes!'

/**
 *  indexOf() - Allows us to find a string in a string
 *  We call this a substring
 */

console.log(notice.indexOf('Important!')) // 0
console.log(notice.indexOf('Remember')) // 11

// something that is not in the string
console.log(notice.indexOf('popcorn')) // -1

if ( notice.indexOf('Important!') >= 0 ) {
  console.log('Important message in the reminder list')
} else {
  console.log('No important message in the list')
}
// Alternative
// if ( notice.indexOf('Important!') != -1 ) {
//   console.log('Important message in the reminder list')
// } else {
//   console.log('No important message in the list')
// }


var news = 'A pig was seen flying in Rusia'

/**
 * slice()
 */
console.log(news.slice(0,5))
console.log(news.slice( news.indexOf('flying'), news.indexOf('flying') + 'flying'.length))


/**
 * toUpperCase()
 * toLowerCase()
 */

console.log("Let's go to the cinema".toUpperCase())
console.log("I LIKE DRINKING SPRITE".toLowerCase())

console.log(news[0].toLowerCase())

console.log(news)


var sentence = 'thE qUiCk bRoWn fOx juMps Over tHE LAzy doG'

// to get Uppercase T 
// sentence[0].toUpperCase()

// to get the rest of the sentence use slice
// sentence.slice(1).toLowerCase()

var fixedSentence = sentence[0].toUpperCase() + sentence.slice(1).toLowerCase()

console.log(fixedSentence)

/**
 * Replace
 * Goes through a string and replaces a substring with another substring
 */

var evil = 'We love devils'


//1. Substring we want to replace
//2. Substring we want to replace the other substring with
evil = evil.replace('devils','unicorns')

console.log(evil)