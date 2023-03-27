import mongoose from 'mongoose';

export function openDBConnection (): void {
    // initalise mongo connection with mongoose
    mongoose.connect(process.env.DATABASE_URI || '');

    const db = mongoose.connection;

    // handle error
    db.on('error', (error) => console.error(error))

    // notify CLI once open
    db.once('open', () => console.log('[DB]: Connection opened')) 

}