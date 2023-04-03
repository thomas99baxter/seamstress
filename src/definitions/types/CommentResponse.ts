import { Response } from 'express';

export interface CommentResponse extends Response {
    comment?: any
}