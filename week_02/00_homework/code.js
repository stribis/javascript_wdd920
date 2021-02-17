


// Aufgabe #1 

var x = 2
var y = 5

if ( x > y ) {
  console.log( x )
} else if ( y > x ) {
  console.log( y )
} else {
  console.log('The numbers are equal')
}


// Aufgabe #2

var a = 9
var b = 5
var c = 8

if  ( a > b &&  b > c ){
  console.log( c, b, a)
} else if ( b > a && a > c){
  console.log( c, a, b)
} else if ( c > a && a > b ){
  console.log( b, a, c)
} else if ( a > c && c > b) {
  console.log( b, c, a)
}
