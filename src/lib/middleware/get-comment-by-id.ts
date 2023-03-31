import { Request, Response } from 'express';
import { Comment } from '../../models/comments';

export async function getCommentById(req: Request, res: Response, next: Function) {
    let comment;

    try {
        comment = Comment.findById(req.params.id);

        if(!comment || Object.keys(comment).length < 0) {
            return res.status(404).send({
                message: `No comments found with ${req.params.id}`
            })
        }
    } catch (err: any) {
        res.status(500).send({
            message: err.message
        })
    }

    // @ts-ignore
    res.comment = comment;
    return next();
}