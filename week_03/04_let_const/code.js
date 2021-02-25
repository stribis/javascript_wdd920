// Let & Const

var pizza = 'I like pizza'

let foo = 'I like popcorn'

const baz = 'I like Coffee'


// if ( foo ) {
//   var myVar = 'This is a variable using var'

// }


// if ( foo ) {
//   let myVar = 'This is a variable using let'

//   console.log(myVar)
// }

// console.log(myVar)


if ( foo ) {
  const myVar = 'This is a variable using const'

  myVar = 'I am trying to redefine myVar'
  console.log(myVar)
}

