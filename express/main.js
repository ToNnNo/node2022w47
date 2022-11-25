import express from 'express';
import path from 'path';

const app = express(); // init express

// middleware
app.use( function(req, res, next) {
    console.log(`Request: ${req.url}`);
    next(); // la fonction next() permet de passer au middleware suivant
});
app.use( express.static(path.join(__dirname, 'public')) );

// route = Verb HTTP (GET/POST) + URL (/contact)
/**
 * GET      -> Lire 
 * POST     -> Créer
 * DELETE   -> Supprimer
 * PATCH    -> Remplacer (modification partielle)
 * PUT      -> Mettre à jour (modification totale)
 */

app.get('/', (req, res) => {

    const html = `<h1>Bienvenue sur notre serveur Node Express !</h1>
<p>Découvrons ensemble le fonctionnement d'ExpressJS</p>
<p>Accéder au fichier static <a href="accueil.html">accueil.html</a></p>
<ul>
    <li><a href="/no-route">Page no route</a></li>
    <li><a href="/users">Liste des utilisateurs</a></li>
</ul>
`;

    res.send(html); // send() ne met pas fin à la fonction anonyme (controller)
});

// affiche les utilisateurs au format JSON
app.get('/users', (req, res) => {
    // users est un jeu de donnée d'exemple uniquement
    const users = [
        { id: 1, firstname: 'John', lastname: 'Doe', city: 'Toulouse' },
        { id: 2, firstname: 'Jane', lastname: 'Doe', city: 'Lille' }
    ];

    // .json -> affiche les données au format json et applique les entêtes http nécessaires
    // Content-Type: application/json
    res.json(users); 
});

// les paramètres d'url
app.get('/users/:id', (req, res, next) => {
    // params permet de récupérer les paramètres d'url
    // params est un objet
    const id = req.params.id;

    /**
     * ex en JAVA
     * 
     * String name = null;
     * 
     * if(name.equals("Stéphane")){ // null pointer exception
     *  ...
     * }
     * 
     * if("Stéphane".equals(name)) { // OK
     *  ...
     * }
     */

    if( 1 != id ) { // si l'utilisateur n'existe pas
        next();     // on affiche une 404
    }

    res.json( { id: 1, firstname: 'John', lastname: 'Doe', city: 'Toulouse' } );
});

// Comment appeler manuellement la page 404
app.get('/no-route', (req, res, next) => {
    console.log('Je suis dans no route !');
    next();
});

// Si aucune route n'a été trouvé alors on affiche une 404
app.get('*', (req, res) => {

    res.status(404).send('<h1>Not Found</h1>');
})

const port = 3200;
app.listen(port, 'localhost', () => {
    console.log(`Personal Node Server is listenning on http://localhost:${port}`);
    console.log('Shutdown Node Server with CTRL + C');
});