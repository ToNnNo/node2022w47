import express, { Request, Response } from 'express';
import { postRouter } from './controller/postController';
import { AppDataSource } from './data-source';
import bodyParser from 'body-parser';

const app = express();
// parser les données au format json se trouvant dans le corps de la requête
app.use( bodyParser.json() ); 

AppDataSource.initialize(); // connecter l'application à la bdd

app.get('/', (req: Request, res: Response) => {

    res.send(`Bienvenue sur notre serveur d'API`);
});

app.use('/posts', postRouter);

app.use('*', (req: Request, res: Response) => {
    res.status(404).json({'message': 'Not Found'});
});

const port = 3200;
app.listen(port, 'localhost', () => {
    console.log(`Personal TSNode Server is listenning on http://localhost:${port}`);
    console.log('Shutdown TSNode Server with CTRL + C');
});