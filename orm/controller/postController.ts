import express, { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { Post } from '../entity/Post';

export const postRouter = express.Router();

// doc typeorm: https://typeorm.io/
// Repository: https://typeorm.io/repository-api

// lister les Posts
postRouter.get('', async (req: Request, res: Response) => {
    const postRepository = AppDataSource.getRepository(Post);
    const posts = await postRepository.find(); // SELECT * FROM post;

    res.json(posts);
});

// affiche 1 Post
postRouter.get('/:id', async (req: Request, res: Response) => {
    // parseInt() = transforme une valeur numérique d'une string en un number
    // ex: parseInt("1") => 1
    // Number("1")
    // + fait le même travail que Number()
    // https://thisthat.dev/number-constructor-vs-parse-int/
    const id = +req.params.id;
    const postRepository = AppDataSource.getRepository(Post);
    const post = await postRepository.findOne({
        where: { id } // { id } = { id: id }
    }); // SELECT * FROM post WHERE id = ...;

    if(!post) {
        res.status(404).json({ message: "La ressource n'existe pas" });
        return;
    }

    res.json(post);
});

// ajouter 1 Post
postRouter.post('', async (req: Request, res: Response) => {
    const post = new Post();
    
    // req.body => Contenu envoyé par l'utilisateur
    Object.assign(post, req.body); // merge object

    const postRepository = AppDataSource.getRepository(Post);
    const postCreated = await postRepository.save(post); // INSERT INTO ... 

    res.status(201).json(postCreated);
});

// modification 1 Post
postRouter.put('/:id', async (req: Request, res: Response) => {
    const id = +req.params.id;
    const body = req.body;

    const postRepository = AppDataSource.getRepository(Post);
    const data = await postRepository.update(id, body);

    if(0 === data.affected) {
        res.status(404).json({message: "La ressource n'existe pas"});
        return;
    }

    const post = await postRepository.findOne({
        where: { id } // { id } = { id: id }
    });

    // res.status(204).json(); // No Content

    res.json(post);
});


// suppression 1 Post
postRouter.delete('/:id', async (req: Request, res: Response) => {
    const id = +req.params.id;
   
    const postRepository = AppDataSource.getRepository(Post);
    await postRepository.delete(id);

    res.status(204).json(); // No Content
});