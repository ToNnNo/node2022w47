import express, { Request, Response } from 'express';
import { postRouter } from './controller/postController';
import { AppDataSource } from './data-source';

const app = express();

AppDataSource.initialize(); // connecter l'application à la bdd

app.get('/', (req: Request, res: Response) => {

    res.send(`Bienvenue sur notre serveur d'API`);
});

app.use('/posts', postRouter);

const port = 3200;
app.listen(port, 'localhost', () => {
    console.log(`Personal TSNode Server is listenning on http://localhost:${port}`);
    console.log('Shutdown TSNode Server with CTRL + C');
});