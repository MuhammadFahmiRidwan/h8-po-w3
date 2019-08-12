var number = 50

var prime = true

for ( var i = 2; i < number; i++ ) {
    if (number % i == 0) {
        prime = false
    }
    else {
        prime = true
    }
    console.log(i)
    console.log(prime)
}
if ( prime === false) {
    console.log("ini bukan bilangan prima")
}
else if(prime === true) {
    console.log("ini bilangan prima")
}


// var number = 7

// var prime = true

// for ( var i = 2; i < number; i++) {
//     if (number % i == 0) {
//         prime = false
//     }
// }
// if ( prime === false) {
//     console.log("ini bukan bilangan prima")
// }
// else {
//     console.log("ini bilangan prima")
// }


