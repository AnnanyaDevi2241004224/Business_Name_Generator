
let rand = Math.random()
let adj, shopName, anotherWord;

// Adjective selected
if (rand < 0.33) {
    adj = "Crazy"
}
else if (rand < 0.66 && rand >= 0.33) {
    adj = "Amazing"
}
else {
    adj = "Fire"
}

// Shop Name selected
rand = Math.random()
if (rand < 0.33) {
    shopName = "Engine"
}
else if (rand < 0.66 && rand >= 0.33) {
    shopName = "Foods"
}
else {
    shopName = "Garments"
}

// Another word slected
rand = Math.random()
if (rand < 0.33) {
    anotherWord = "Bros"
}
else if (rand < 0.66 && rand >= 0.33) {
    anotherWord = "Limited"
}
else {
    anotherWord = "Hub"
}

console.log(`${adj} ${shopName} ${anotherWord}`)