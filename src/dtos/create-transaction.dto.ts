export type CreateTransactionDto = {
    sender: string;
    receiver: string;
    amount: number;
    date: Date;
    status: string;
    hash: string;
    block: string;
    fee: number;
    gasPrice: number;
}