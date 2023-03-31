import { Request, Response } from 'express';
import { CommentResponse } from '../../definitions/types/CommentResponse';
import { Comment } from '../../models/comments';

// middleware to pull a specific comment out of DB
export async function getCommentById(req: Request, res: CommentResponse, next: Function) {
    let comment: Promise<any> | any;

    try {
        comment = await Comment.findById(req.params.id);

        // ensure that comment exists
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

    // store comment in response object to be accessed in route handler
    res.comment = comment;
    return next();
}