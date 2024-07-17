//Adjectives
let adj = {
    1: "Crazy",
    2: "Amazing",
    3: "Fire"
}

//Shop Name
let shopName = {
    1: "Engine",
    2: "Foods",
    3: "Garments"
};

//Another word
let anotherWord = {
    1: "Bros",
    2: "Limited",
    3: "Hub"
};

//Math.floor(Math.randon()*(max -min +1))+min
let choice1 = Math.floor(Math.random() * 3) + 1;
let choice2 = Math.floor(Math.random() * 3) + 1;
let choice3 = Math.floor(Math.random() * 3) + 1;

//printing
console.log(`${adj[choice1]} ${shopName[choice2]} ${anotherWord[choice3]}`)