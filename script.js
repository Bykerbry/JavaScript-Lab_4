
let name;
let userHealth = 40;
let grantHealth = 10;
let grantDeath = 0;

/** Asks user if they want to play, and if yes, asks also for their name.*/
let initialPrompts = _ => {
    let wantToPlay = prompt("Do you want to play?", 'Type "yes" to play.');
    wantToPlay.toLowerCase() === "yes" ? name = prompt("What is your name?") : initialPrompts();
};

/**
 * Randomly generates a number between & inclusive of the arguments.
 * @source https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
 * @param {number} min The minimum value that can be generated. 
 * @param {number} max The maximum value that can be generated.
 */
let dmgGenerator = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

initialPrompts();

while (userHealth > 0 && grantDeath < 3) {
    userHealth -= dmgGenerator(1, 2);
    console.log(`${name} has ${userHealth} hp remaining.`);
    grantHealth -= dmgGenerator(1, 2);
    console.log(`Grant has ${grantHealth} hp and ${2 - grantDeath} lives remaining.`);

    if (grantHealth <= 0) {
        grantDeath ++;
        grantHealth = 10;
    };
};

userHealth > 0 ? console.log("You Win!") : console.log("Grant Wins...");