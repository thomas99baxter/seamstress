import { healthCheckRoute } from './health'
import { Express } from 'express';

export function router (app: Express) {
  healthCheckRoute(app)
};
