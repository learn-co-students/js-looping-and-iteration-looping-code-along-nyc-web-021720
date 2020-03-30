// Code your solutions in this file
function writeCards(array, event) {
    let thankYous = []
    for (let i = 0; i < array.length; i++){
        thankYous.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
    }
    return thankYous
}

function countDown(number) {
    let i = number;
    while (i >= 0){
    console.log(i);
    i-=1;
    }
}