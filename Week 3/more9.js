function vehi(color, type, age) {
    let veh
    let old;
    let myVehicles = ["motorbike", "caravan", "bike", "car"];
    if (type == 3 && age == 1) {
        veh = myVehicles[2]
        old = "new";
    }
    console.log("a " + color + " " + old + " " + veh);
}

vehi("green", 3, 1);