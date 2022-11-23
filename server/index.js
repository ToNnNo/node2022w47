const http = require('http');
const fs = require('fs').promises;
const path = require('path');
const mime = require('mime-types');

const server = http.createServer();

server.on("request", async (request, response) => {

    console.log(`Request URL: ${request.url}`);
    let html;

    // request == /             -> index.html
    // request == /index.html   -> index.html
    // request == /contact.html -> contact.html
    // request == /????         -> 404.html

    // Pour afficher le contenu d'une page, 
    // il faut commencer par lire le contenu de la page demander
    // si on peut lire le contenu on l'affiche, 
    // si on ne peut pas, on affiche la page 404

    let page = request.url;
    if( request.url == "/" ) {
        page = "index.html";
    }

    if( !page.includes('.') ) {
        page += ".html";
    }

    try {
        response.statusCode = 200;
        const pathfile = path.join(__dirname, 'public', page);
        html = await fs.readFile(pathfile);
    } catch(e) {
        response.statusCode = 404
        const pathfile = path.join(__dirname, 'public', 'errors', '404.html');
        html = await fs.readFile(pathfile);
    }
    
    response.setHeader('Content-Type', mime.lookup(page) || 'text/plain');
    response.end(html);
});

server.listen(5500);
console.log('Personal Node Server is listenning on http://localhost:5500');
console.log('Shutdown Node Server with CTRL + C');