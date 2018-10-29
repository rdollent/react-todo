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