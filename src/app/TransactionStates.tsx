'use client';

import { useAccount } from "wagmi";
import TransactionForm from "@/components/TransactionForm";
import NoConnectionState from "@/components/NoConnectionState";

const TransactionStates = () => {
    const { isConnected } = useAccount();
  return (
    <>
       {isConnected ? <TransactionForm /> : <NoConnectionState />}
    </>
  )
}

export default TransactionStates