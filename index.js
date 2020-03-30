// Code your solutions in this file
let newarray = []

function writeCards(names, event) {
    for (let i = 0; i < names.length; i++) {
        newarray.push( `Thank you, ${names[i]}, for the wonderful ${event} gift!` ) 
    }   
        return newarray
}
let int = 10
function countDown(int) {
    while (int >= 0) {
        console.log(int);
        int -= 1
    }
}