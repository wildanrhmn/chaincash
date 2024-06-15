"use client";

import NoConnectionState from "@/components/NoConnectionState";
import TransactionForm from "@/components/TransactionForm";
import Image from "next/image";
import { useAccount } from "wagmi";
export default function Home() {
  const {
    addresses,
    address,
    chain,
    chainId,
    connector,
    isConnected,
    isConnecting,
    status,
    isDisconnected,
  } = useAccount();
  return (
    <div>
      <div className="w-full bg-[#202127] py-2">
        <p className="text-[#DFE0D7] text-center text-sm sm:text-[14px]">
          Chaincash is a revolutionary web app that leverages blockchain
          technology to provide fast, secure, and low-cost cross-border cash
          transfers.
        </p>
      </div>
      <div className={`container mx-auto px-12 flex justify-center items-center min-h-[75vh] gap-7 ${isConnected ? 'flex-row' : 'flex-col'}`}>
        {isConnected ? <TransactionForm /> : <NoConnectionState />}

        <div className="w-full h-full bg-[#202127] rounded-[10px] p-5">
          <div className="flex items-center justify-between">
            <h1 className="text-[#DFE0D7] text-center text-sm sm:text-[14px] font-semibold">Latest Transaction</h1>
            <button className="flex items-center justify-center p-2 rounded-[10px] bg-[#2B2F36] hover:bg-[#2B2F36]/80 transition-all duration-300 gap-2">
              <Image src="/customize.png" alt="customize" width={20} height={20} />
              <span className="text-[#DFE0D7] text-center text-xs sm:text-[14px] font-semibold">Customize</span>
            </button>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
