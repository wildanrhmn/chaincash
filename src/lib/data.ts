import { cache } from 'react';
import connectMongo from './connect-mongo';
import transaction, { ITransaction } from '@/models/transaction';
export const getAllTransactions = cache(async () => {
    await connectMongo();
    const transactions = await transaction.find();
    return transactions as ITransaction[];
});