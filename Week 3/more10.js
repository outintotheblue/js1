let myVehicles = ["motorbike", "caravan", "bike", "car"];
let a = " ";
myVehicles[4] = "plane";
for (let i = 0; i < myVehicles.length - 1; i++) {
    a += myVehicles[i] + "s, ";
}
a += "and " + myVehicles[4] + "s.";

console.log("Amazing Joe's Garage, we service " + a);