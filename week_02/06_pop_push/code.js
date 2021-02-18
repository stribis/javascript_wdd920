

// Sample Array

var shoppingList = [
  'bananas',
  'apples',
  'pears',
  'oranges',
  'pork',
  'chicken'
]

// push
// Adds a new item to an array ( at the end of an array )

var additionalItem = 'lettuce'

shoppingList.push(additionalItem)
// console.log(shoppingList)

var additionalItems = [
  'sauce',
  'water'
]

for (let i = 0; i < additionalItems.length; i++) {
  shoppingList.push(additionalItems[i])
}

// unshift
// adds an item to the beginning of an array
shoppingList.unshift('redbull')



console.log(shoppingList)
// pop()
// remove the LAST item from an array

var lastItem = shoppingList.pop()

// shift()
// remove the FIRST item from an array
var firstItem = shoppingList.shift()