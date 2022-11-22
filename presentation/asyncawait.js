require('colors');

// le mot clé async permet de créer des fonctions qui retourne des Promise()
// dans une fonction async, "return" permet de définir que la Promise est en réussite (resolve)
async function success() {
    return 'Bravo !'.green;
}

// dans une fonction async, "throw" permet de définir que la Promise est en échec (reject)
async function fail() {
    throw new Error('Dommage ...'.red);
}

// success().then(console.log);
// fail().catch(console.log);

function randomNumber() {
    const number = Math.floor(Math.random() * 10);

    return new Promise((resolve) => {
        setTimeout( () => {
            resolve(number)
        }, 2500);
    })
}

async function addition(){
    console.log('Récupération de la première valeur'.yellow);
    const a = await randomNumber();
    console.log('Première valeur récupérée'.green);
    console.log('Récupération de la deuxième valeur'.yellow);
    const b = await randomNumber();
    console.log('Deuxième valeur récupérée'.green);

    console.log('Addition'.yellow);
    console.log(`${a} + ${b} = ${a+b}`);
}

console.log('Avant addition');
addition();
console.log('Après addition');