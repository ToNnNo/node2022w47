// require() est la fonction NodeJS qui permet de récupérer des modules NodeJS
// défini dans l'application, dans les dépendances (node_modules) ou dans l'API de node
const path = require('path');
require('colors');

// ./ fait référence au répertoire courant
const file = "./content/file.txt";

console.log(`dirname(): ${path.dirname(file).red}`); // affiche le répertoire parent
console.log(`basename(): ${path.basename(file).red}`); // affiche le nom du fichier
console.log(`extname(): ${path.extname(file).red}`); // affiche l'extension du fichier

console.log(`Séparateur système: ${path.sep.red}`);

// Créer un chemin vers le fichier image.png, se trouvant dans un répertoire images,
// se trouvant dans un répertoire assets

const image = path.join('assets', 'images', 'image.png');
console.log(`Chemin vers mon image: ${image.green}`);

// Créer le chemin absolu vers le fichier image précédent

console.log( path.join(__dirname, image).green );

console.log( `resolve(): ${path.resolve().blue}` ); // affiche le chemin absolu du répertoire dans lequel est executé le programme 
console.log( path.resolve('presentation', image).red );