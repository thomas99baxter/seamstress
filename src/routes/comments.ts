import { Express, Request, Response } from 'express';
import { CommentResponse } from '../definitions/types/CommentResponse';
import { getCommentById } from '../lib/middleware/get-comment-by-id';
import { Comment } from '../models/comments';


export function commentRoutes(app: Express) {
    // Get all
    app.get('/comments', async (req: Request, res: Response) => {
        try {
            const comments: any[] = await Comment.find()
            return res.json(comments)
        } catch (err: any) {
            return res.status(500).json({
                message: err.message
            })
        }
    })

    // Get one comment
    app.get('/comments/:id', getCommentById, (req: Request, res: CommentResponse) => {
        console.log(res.comment);
        
        return res.send({
            status: 200,
            message: "You provided the id: " + req.params.id
        })
    })

    // Create a comment
    app.post('/comments', async (req: Request, res: Response) => {
        const comment = new Comment({
            author: req.body.author,
            pageId: req.body.pageId,
            text: req.body.text,
            resolved: req.body?.resolved,
        })
        
        try {
            const newComment = await comment.save()

            return res.status(201).json(newComment)
        } catch (err: any) {
            return res.status(400).json({
                message: err.message
            })
        }
    })

    // Update a comment
    app.patch('/comments/:id', (req: Request, res: Response) => {
        return res.send({
            status: 200,
        })
    })

    // Delete a comment
    app.delete('/comments/:id', (req: Request, res: Response) => {
        return res.send({
            status: 200,
        })
    })
}