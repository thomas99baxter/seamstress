import { Request, Response } from 'express';
import { CommentResponse } from '../../definitions/types/CommentResponse';
import { Comment } from '../../models/comments';

export async function getCommentById(req: Request, res: CommentResponse, next: Function) {
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

    res.comment = comment;
    return next();
}