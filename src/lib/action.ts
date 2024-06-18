"use server";

import { ITransaction } from "@/models/transaction";

export async function handleNewTransaction(transaction: any) {
  console.log(transaction);
}