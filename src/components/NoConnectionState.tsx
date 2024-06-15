import Image from "next/image";

const NoConnectionState = () => {
    return (
        <div className="flex flex-col gap-5 justify-center items-center bg-[#202127] sm:w-[500px] sm:h-[500px] rounded-full p-4 sm:p-0">
            <div className="flex justify-center items-center w-[250px] h-[100px] rounded-full">
                <Image
                    src="/blockchain.png"
                    alt="blockchain-empty"
                    width={100}
                    height={100}
                />
            </div>
            <div className="flex flex-col gap-2">
                <h3 className="text-[#DFDFD6] text-lg sm:text-[16px] text-center">
                    No wallet connected
                </h3>
                <p className="text-[#DFDFD6] opacity-50 text-sm sm:text-[14px] text-center">
                    Connect your wallet to start sending cryptocurrency
                </p>
            </div>
        </div>
    );
};

export default NoConnectionState;
