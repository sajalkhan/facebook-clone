import { Request, Response } from 'express';
import Post, { IPost } from '../model/post';
import { handleError } from '../helpers';

export const createPost = async (req: Request, res: Response) => {
  try {
    const post: IPost = await new Post(req.body).save();
    res.json(post);
  } catch (error: any) {
    handleError(error, res);
  }
};
