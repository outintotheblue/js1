let o1 = { foo: "bar" };
let o2 = { foo: "barrrr" };
let o3 = o2;


console.log(o3 = o2);
console.log(o2 = o3);

//order does not matter, result is the same.
//changing o2 changes o3