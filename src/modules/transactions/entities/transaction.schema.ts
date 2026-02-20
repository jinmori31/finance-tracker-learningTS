import { Schema } from 'mongoose';

export const TransactionSchema = new Schema({
    amount: Number,
    category: String,
    description: String,
    date: { type: Date, default: Date.now },
});