import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
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

export const Comment = mongoose.model('Comment', commentSchema)