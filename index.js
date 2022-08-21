function writeCards(arrayNames, eventName) {
    let newArrayNames = [];
    for (let i=0; i<arrayNames.length; i++) {
        newArrayNames.push(`Thank you, ${arrayNames[i]}, for the wonderful ${eventName} gift!`)
    }
    return newArrayNames;
}

function countDown() {
    let count = 0;
    while (count < 11) {
        console.log (count++);
    }
}