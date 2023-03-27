import { Express, Request, Response } from 'express';

export function commentRoutes(app: Express) {
    app.get('/comments', (req: Request, res: Response) => {
        return res.send({
            status: 200,
        })
    })
}