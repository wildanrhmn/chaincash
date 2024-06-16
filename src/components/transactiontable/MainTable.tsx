import Image from "next/image";
export default function TransactionTable() {
    return (
        <div className="w-full h-full bg-[#202127] rounded-[10px] p-5 overflow-hidden">
            <div className="flex items-center justify-between">
                <h1 className="text-[#DFE0D7] text-center text-sm sm:text-[14px] font-semibold">
                    Latest Transaction
                </h1>
                <button className="flex items-center justify-center p-2 rounded-[10px] bg-[#2B2F36] hover:bg-[#2B2F36]/80 transition-all duration-300 gap-2">
                    <Image src="/customize.png" alt="customize" width={20} height={20} />
                    <span className="text-[#DFE0D7] text-center text-xs sm:text-[14px] font-semibold">
                        Customize
                    </span>
                </button>
            </div>
            <div className="overflow-x-auto mt-11">
                <table>
                    <thead className="border-b border-[#DFE0D7]/10">
                        <tr className="text-[#DFE0D7] text-xs font-semibold">
                            <th>Hash</th>
                            <th>Date</th>
                            <th>From</th>
                            <th>To</th>
                            <th>Amount</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="max-w-[150px]">0x8c7ef79d4c9f71616e76ca1e282b2e930906db1fecfc319fd1c0c86faf84bd84</td>
                            <td>June 1, 2024</td>
                            <td className="max-w-[150px]">0x8c7ef79d4c9f71616e76ca1e282b2e930906db1fecfc319fd1c0c86faf84bd84</td>
                            <td className="max-w-[150px]">0x8c7ef79d4c9f71616e76ca1e282b2e930906db1fecfc319fd1c0c86faf84bd84</td>
                            <td>0.094024262 ETH</td>
                            <td>
                                <span className="bg-[#E5F5F3] text-[#00A186] rounded-full px-2 py-1 font-semibold border border-[#00A186]/10">Success</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
