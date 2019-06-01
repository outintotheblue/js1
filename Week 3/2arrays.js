let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];

favoriteAnimals.push("turtle");
console.log(favoriteAnimals);


favoriteAnimals.splice(1, 0, "meerkat");
console.log("I had to google how to add an inbetween value, I think the new value will be blowfish meerkat capricorn and giraffe");
console.log(favoriteAnimals); // it worked :D

console.log("The array has a length of: " + favoriteAnimals.length);

console.log("Jason does not like giraffe...")

favoriteAnimals.splice(3, 1);
console.log(favoriteAnimals);
console.log("The item you are looking for is at index: " + favoriteAnimals.indexOf("meerkat"));