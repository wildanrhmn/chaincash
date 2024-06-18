"use server";

import transaction, { ITransaction } from "@/models/transaction";
import connectMongo from "./connect-mongo";
import { revalidatePath } from "next/cache";

export async function handleNewTransaction(transactionData: ITransaction) {
  try {
    await connectMongo();
    await transaction.create(transactionData);
    revalidatePath("/");
  } catch (error) {
    console.log(error);
  }
}