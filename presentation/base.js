// Pour lancer l'application avec NodeJS
// dans le terminal
// node path/to/file.js

const name = "Stéphane";
let city = "Lille";
const number = 10;

console.log("Bonjour " + name); // identique à JS

console.log("Hello", "World", number, false); // identique à JS

console.log("Salut %s, tu es toujours à %s", name, city); // différent de JS 

console.log(`Salut ${name}, tu es toujours à ${city}`); // version es6

console.log(`__filename: ${__filename}`);
console.log(`__dirname: ${__dirname}`);

setTimeout( () => {
    console.log("J'ai été executé après 1 seconde");
}, 1000);

console.log("Fin de la page");