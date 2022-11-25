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