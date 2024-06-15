import connectMongo from "@/lib/connect-mongo";
import { HttpStatusCode } from "axios";
import Transaction from "@/models/transaction";
import { CreateTransactionDto } from "@/dtos/create-transaction.dto";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        await connectMongo();
        const body: CreateTransactionDto = await req.json();
        const transaction = await Transaction.create(body);
        return NextResponse.json(transaction, { status: HttpStatusCode.Created });
    } catch (error) {
        return NextResponse.json({ error: error }, { status: HttpStatusCode.InternalServerError  });
    }
}

export async function GET(req: NextRequest) {
    try {
        await connectMongo();
        const transactions = await Transaction.find();
        return NextResponse.json(transactions, { status: HttpStatusCode.Ok });
    } catch (error) {
        return NextResponse.json({ error: error }, { status: HttpStatusCode.InternalServerError });
    }
}