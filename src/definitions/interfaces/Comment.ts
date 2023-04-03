export interface IComment {
    author: string,
    pageId: string,
    text: string,
    resolved?: boolean,
    datePosted?: Date,
}