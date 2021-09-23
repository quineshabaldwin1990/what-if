const prompt = require('prompt-sync')();

const age = 16;

if(age > 16) {
    console.log('Take your test');
}else  {
    console.log('You cant drive');
} 

if(age < 18) {
    console.log('You can drive but not vote');
}

if(age < 25) {
    console.log('You cant vote but not rent a car');
}

if(age => 25) {
    console.log('You can do pretty much anything');
}
