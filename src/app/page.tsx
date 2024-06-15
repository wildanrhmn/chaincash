"use client";

import NoConnectionState from "@/components/NoConnectionState";
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
          TransCrypt is a revolutionary web app that leverages blockchain
          technology to provide fast, secure, and low-cost cross-border cash
          transfers.
        </p>
      </div>
      <div className="container mx-auto px-12 flex justify-center items-center min-h-[75vh]">
        <NoConnectionState />
      </div>
    </div>
  );
}
