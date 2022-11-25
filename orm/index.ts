import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {

    res.send(`Bienvenue sur notre serveur d'API`);
});

const port = 3200;
app.listen(port, 'localhost', () => {
    console.log(`Personal TSNode Server is listenning on http://localhost:${port}`);
    console.log('Shutdown TSNode Server with CTRL + C');
});