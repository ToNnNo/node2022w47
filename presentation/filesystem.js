const fs = require('fs');
const path = require('path');
require('colors');

const pathfile = path.resolve('presentation', 'assets', 'content', 'file.txt');
const content = 'Hello World\r\n';

// 1. créer les répertoires
// 2. écrire dans le fichier file.txt
// 3. lire le fichier file.txt

console.log(pathfile);
console.log(__dirname);
console.log(path.dirname(pathfile));

// callback hell
fs.mkdir(path.dirname(pathfile), { recursive: true }, (error) => {
    if(error) {
        throw error; // throw = lancer/lever une exception; met fin au programme
    }

    console.log('Les répertoires ont bien été créés'.yellow);

    fs.writeFile(pathfile, content, { flag: 'a' }, (err) => {
        if(err) throw err;

        console.log('Ecriture terminé'.yellow);

        fs.readFile(pathfile, (err, data) => {
            if(err) throw err;

            console.log(data.toString('utf8'));
            // console.log(`${data}`);
        });
    });
});