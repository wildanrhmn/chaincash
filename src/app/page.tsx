import TransactionTable from "@/components/transactiontable/MainTable";
import TransactionStates from "./TransactionStates";
import { Suspense } from "react";

export default async function Home() {
  return (
    <div>
      <div className="w-full bg-[#202127] py-2">
        <p className="text-[#DFE0D7] text-center text-sm sm:text-[14px]">
          Chaincash is a revolutionary web app that leverages blockchain
          technology to provide fast, secure, and low-cost cross-border cash
          transfers.
        </p>
      </div>

      <div className={`container mx-auto px-3 lg:px-12 flex flex-col justify-center items-center min-h-[90vh] gap-7`}>
        <TransactionStates />

      <Suspense fallback={<div>Loading...</div>}>
        <TransactionTable />
      </Suspense>
      </div>
    </div>
  );
}

