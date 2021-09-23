const prompt = require('prompt-sync')();

const groupSize = Number(prompt('Enter class size: '));

if (groupSize % 3 === 0) {
    console.log(groupSize / 3, 'groups of 3s');
}
else if (groupSize % 3 === 1) {
    console.log((groupSize - 4) / 3 , 'groups of 3s', 2 , 'groups of 2s');
}

else {
    console.log('error');
}
