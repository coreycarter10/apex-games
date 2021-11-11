// let whiteShield = 50;
// let blueShield = 75;
// let purpleShield = 100;
// let redShield = 125;

let gibbyHealth = 100;
let wraithHealth = 100; 

let gibbyWarClub = getRandomInt(30, 50);
let wraithKunai = getRandomInt(30, 50);
console.log(gibbyWarClub);
console.log(wraithKunai);

let gibbyArmor = 125;
let wraithArmor = 125;

let gibbyTotalHealth = gibbyHealth + gibbyArmor;
let wraithTotalHealth = wraithHealth + wraithArmor;

if (gibbyTotalHealth > wraithTotalHealth) {
    console.log("Gibby is overpowered");
} else if (wraithTotalHealth > gibbyTotalHealth) {
    console.log("Wraith is better than Gibby");
} else {
    console.log("They have the same health");
}

function getRandomInt(min, max) {
    min = Math.ceil(30);
    max = Math.floor(50);
    return Math.floor(Math.random() * (max - min) + min);
}

// while (gibbyTotalHealth > 0) {
//     gibbyTotalHealth -= wraithKunai;
//     console.log(`${gibbyTotalHealth}`);
// }

while (gibbyTotalHealth > 0 || wraithTotalHealth > 0) {
    if (gibbyTotalHealth <= 0 || wraithTotalHealth <= 0) {
        break;
    } else {
    gibbyTotalHealth -= wraithKunai;
    wraithTotalHealth -= gibbyWarClub;
    }
    console.log(gibbyTotalHealth);
    console.log(wraithTotalHealth);
}

// while (gibbyTotalHealth > 0 || wraithTotalHealth > 0) {
//     if (gibbyTotalHealth <= 0);
//     break;
//     if (wraithTotalHealth <= 0);
// }