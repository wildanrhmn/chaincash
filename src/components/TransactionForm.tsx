"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Swal from "sweetalert2";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { transactionSchema } from "../lib/zodSchema";
import { useSendTransaction, useWaitForTransactionReceipt } from "wagmi";
import { parseEther } from "viem";
import { handleNewTransaction } from "@/lib/action";
import { calculateTransactionFee } from "@/utils/calculateTrxFee";

type Inputs = z.infer<typeof transactionSchema>;

const TransactionForm = () => {
  const { data: hash, sendTransaction } = useSendTransaction();
  const [pending, setPending] = useState(false);
  const [data, setData] = useState<Inputs>();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(transactionSchema),
  });

  const processForm: SubmitHandler<Inputs> = async (data) => {
    setData(data);
    setPending(true);
    try {
      sendTransaction({
        to: data.address as `0x${string}`,
        value: parseEther(data.amount),
      });
    } catch (error) {
      console.error(error);
    } finally {
      reset();
    }
  };

  const { data: receipt } = useWaitForTransactionReceipt({
    hash,
  });

  useEffect(() => {
    const processReceipt = async () => {
      if (receipt !== undefined && data) {
        await handleNewTransaction({
          hash: receipt.transactionHash,
          receiver: receipt.to as string,
          sender: receipt.from,
          amount: data.amount,
          fee: calculateTransactionFee(receipt.gasUsed, receipt.effectiveGasPrice),
          gasPrice: String(receipt.effectiveGasPrice),
          status: receipt.status,
          block: receipt.blockHash,
          date: new Date(),
        })
          .then(() => {
            setPending(false);
            Swal.fire({
              position: "center",
              icon: "success",
              background: "#202127",
              title: "Transaction Success",
              showConfirmButton: false,
              timer: 3000,
            });
          })
          .catch(() => {
            Swal.fire({
              position: "center",
              icon: "error",
              background: "#202127",
              title: "Transaction Failed",
              showConfirmButton: false,
              timer: 3000,
            });
          });
      }
    };

    processReceipt();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [receipt])

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit(processForm)}
      className="bg-[#202127] p-5 rounded-xl flex flex-col gap-4 min-w-[400px] sm:min-w-[400px] md:min-w-[500px] mt-[60px] md:mt-0"
    >
      <div className="flex justify-center">
        <Image
          src="/blockchain2.png"
          alt="blockchain"
          width={75}
          height={75}
          className="object-cover my-5"
        />
      </div>
      {errors.address && (
        <p className="text-red-500 text-sm">{errors.address.message}</p>
      )}
      <div className="relative">
        <input
          {...register("address")}
          type="text"
          placeholder="enter address to send e.g. (0x0...)"
          className="bg-[#2B2F36] text-sm border-none w-full outline-none pl-10 text-white text-opacity-40 focus:text-opacity-100 font-medium p-2 rounded-xl focus:ring-2 focus:ring-[#6444ff] py-3"
        />
        <Image
          src="/profile-user.png"
          alt="profile"
          width={15}
          height={15}
          className="absolute top-1/2 left-3 transform -translate-y-1/2 opacity-50"
        />
      </div>
      {errors.amount && (
        <p className="text-red-500 text-sm">{errors.amount.message}</p>
      )}
      <div className="relative">
        <input
          {...register("amount")}
          type="text"
          placeholder="enter amount e.g. (0.001)"
          className="bg-[#2B2F36] border-none text-sm outline-none pl-10 w-full text-white text-opacity-40 focus:text-opacity-100 font-medium p-2 rounded-xl focus:ring-2 focus:ring-[#6444ff] py-3"
        />
        <Image
          src="/eth.png"
          alt="eth"
          width={15}
          height={15}
          className="absolute top-1/2 left-3 transform -translate-y-1/2 opacity-80"
        />
      </div>
      {errors.message && (
        <p className="text-red-500 text-sm">{errors.message.message}</p>
      )}
      <textarea
        {...register("message")}
        cols={30}
        rows={5}
        placeholder="enter message"
        className="bg-[#2B2F36] border-none text-sm outline-none text-white text-opacity-40 focus:text-opacity-100 font-medium p-2 rounded-xl focus:ring-2 focus:ring-[#6444ff] py-3"
      ></textarea>
      <button
        className={`bg-[#6444ff] p-2 rounded-xl text-white font-semibold text-sm hover:bg-[#6444ff]/80 transition-all duration-300 py-3 ${pending ? "opacity-50 cursor-not-allowed" : ""
          }`}
        disabled={pending}
      >
        {pending ? "Sending..." : "Send"}
      </button>
    </form>
  );
};

export default TransactionForm;
