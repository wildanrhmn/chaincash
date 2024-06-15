import { model, models, Schema } from 'mongoose';

export interface ITransaction {
    hash: string;
    block: string;
    sender: string;
    fee: number;
    gasPrice: number;
    receiver: string;
    amount: number;
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

const Transaction = models.Transaction || model('Transaction', transactionSchema);

export default Transaction;