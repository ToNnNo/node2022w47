const fs = require('fs').promises; // on utilise FileSystem sous forme de promise
const path = require('path');
require('colors');

const pathfile = path.resolve('presentation', 'assets', 'content', 'file.txt');
const content = 'Hello Async Await\r\n';

// iife (Immediately Invoked Function Expression)
(async () => { // fonction anonyme fléché
    await fs.mkdir(path.dirname(pathfile), { recursive: true });
    console.log('Les répertoires ont bien été créés'.yellow);

    await fs.writeFile(pathfile, content, { flag: 'a' });
    console.log('Ecriture terminé'.yellow);

    const data = await fs.readFile(pathfile);
    console.log(data.toString('utf8'));
})();