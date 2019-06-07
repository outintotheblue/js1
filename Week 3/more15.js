let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;

// i would say true
console.log(x == y);
// but it is not :D 

console.log(x === y);
//now it should be true.. but also false

console.log(z == y);
// this is true imo
console.log(z == x);
// do not think it will be true since y and x were not true either

//Guessed two out of four yey!