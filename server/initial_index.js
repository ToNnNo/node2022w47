const http = require('http');

const server = http.createServer();

server.on("request", (request, response) => {

    console.log(`Request URL: ${request.url}`);
    let html;

    response.setHeader('Content-Type', 'text/html;charset=utf-8');
    response.statusCode = 200;

    // request == /             -> index.html
    // request == /index.html   -> index.html
    // request == /contact.html -> contact.html
    // request == /????         -> 404.html

    // Pour afficher le contenu d'une page, 
    // il faut commencer par lire le contenu de la page demander
    // si on peut lire le contenu on l'affiche, 
    // si on ne peut pas, on affiche la page 404

    if( "/" == request.url ) {
        html = `<h1>Bienvenue sur notre serveur NodeJS</h1>
<p>Formation NodeJS POE Front Toulouse - Novembre 2022</p>`;
    } else if( "/contact" == request.url) {
        html = `<h1>Nous Contacter</h1>
<p>Appeler nous au 06 11 82 18 00</p>`;
    } else {
        response.statusCode = 404;
        html = `<h1>Not Found</h1>`;
    }

    response.end(html);
});

server.listen(5500);
console.log('Personal Node Server is listenning on http://localhost:5500');
console.log('Shutdown Node Server with CTRL + C');