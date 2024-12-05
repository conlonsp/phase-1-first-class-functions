function receivesAFunction(callback) {
    callback()
}

function returnsANamedFunction() {
   return function named() {
    console.log("hello!")
   }
}

function returnsAnAnonymousFunction() {
    return function () {
        console.log("anonymous!")
    }
}




































// function receivesAFunction(callback) {
//     return callback()
// }

// function returnsANamedFunction() {
//     return function funkyTown() {
//         return "Funky Town";
//     }
// }
// function returnsAnAnonymousFunction() {
//     return function() {
//         return "I am anonymous!"
//     }
// }