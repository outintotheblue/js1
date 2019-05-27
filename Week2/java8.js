let string = "Hi String";
console.log("The value of my variable string is " + string + ".");
let number = 22;
console.log("The value of my variable number is " + number + ".");
let array = ["Cider", " Wine", " Champagne"];
console.log("The value of my variable array is " + array + ".");
let boolean = true;
console.log("The value of my variable boolean is " + boolean + ".");


console.log("The type of my variables are string, number, array and boolean");

console.log(typeof number);
console.log(typeof string);
console.log(typeof array);
console.log(typeof boolean);

let myString = typeof string;
let myNumber = typeof number;
let myArray = typeof array;
let myBoolean = typeof boolean;

if (myString === myNumber || myString === myArray || myString === myBoolean || myNumber === myArray || myNumber === myBoolean || myArray === myBoolean) {
    console.log("same type");
} else {
    console.log("They are not same type");
}