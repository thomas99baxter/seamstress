import { healthCheckRoute } from './health'
import { Express } from 'express';
import { commentRoutes } from './comments';

export function router (app: Express) {
  healthCheckRoute(app)
  commentRoutes(app)
};
