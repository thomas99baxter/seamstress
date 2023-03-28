import { Express, Request, Response } from 'express';

export function commentRoutes(app: Express) {
    // Get all
    app.get('/comments', (req: Request, res: Response) => {
        return res.send({
            status: 200,
        })
    })

    // Get one comment
    app.get('/comments/:id', (req: Request, res: Response) => {
        return res.send({
            status: 200,
            message: "You provided the id: " + req.params.id
        })
    })

    // Create a comment
    app.post('/comments', (req: Request, res: Response) => {
        return res.send({
            status: 200,
        })
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