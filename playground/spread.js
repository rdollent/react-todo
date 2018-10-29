function add(a,b) {
    return a + b;
}

console.log(add(3,1));

var toAdd = [9,5];

// spread operator spreads array out as individual arguments
console.log(add(...toAdd));

const grpA = ['John', 'Jane'];
const grpB = ['Mike', 'Mary'];
const final = [...grpA, ...grpB];

console.log(final);

const person = ['Jun', 29];
const person2 = ['She', 25];


const phrase = (name,age) => {
    console.log(`Hello ${name}, you are ${age}`);
}

phrase(...person);

const names = ['Mike', 'Ben'];
const namesAll = ['Jun', ...names];

for(i in namesAll) {
    console.log(`Hi ${namesAll[i]}`);
}
