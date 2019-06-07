function vehi(color, type, age) {
    let veh
    let old;
    if (type == 1 && age == 5) {
        veh = "car"
        old = "used";
    }
    console.log("a " + color + " " + old + " " + veh);
}

vehi("blue", 1, 5);