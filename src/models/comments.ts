import { Schema, model } from 'mongoose';
import { IComment } from '../definitions/interfaces/Comment';
const commentSchema = new Schema<IComment>({
    author: {
        type: String,
        required: true
    },
    pageId: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    resolved: {
        type: Boolean,
        required: true,
        default: false,
    },
    datePosted: {
        type: Date,
        required: true,
        default: Date.now
    }
})

export const Comment = model<IComment>('Comment', commentSchema)