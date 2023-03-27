import { Express, Request, Response } from 'express';

export function healthCheckRoute(app: Express) {
    app.get('/health', (req: Request, res: Response) => {
        return res.send({
            status: 200,
            up: true,
        })
    })
}