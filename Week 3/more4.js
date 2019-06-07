function vehicleType(color, code) {
    let codex;
    if (code == 1) {
        codex = "car";
    } else {
        codex = "motorbike";
    }
    console.log("a " + color + " " + codex);
}
vehicleType("blue", 2);