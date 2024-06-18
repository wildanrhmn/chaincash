import { model, models, Schema } from 'mongoose';

export interface ITransaction {
    hash: string;
    block: string;
    sender: string;
    fee: string;
    gasPrice: string;
    receiver: string;
    amount: string;
    status: string;
    date: Date;
}

const transactionSchema = new Schema({
    sender: String,
    receiver: String,
    amount: Number,
    date: Date,
    status: String,
    hash: String,
    block: String,
    fee: Number,
    gasPrice: Number,
});

const transaction = models.transaction || model('transaction', transactionSchema);

export default transaction;