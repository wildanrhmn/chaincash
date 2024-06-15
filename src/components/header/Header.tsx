import React from "react";
import ConnectButton from "../ConnectWalletButton";
import Image from "next/image";
const Header = () => {
    return (
        <nav className="bg-[#1B1B1F] container mx-auto h-[60px] fixed top-0 left-0 right-0 z-10">
            <div className="flex h-full justify-between items-center">
                <div className="flex items-center gap-2">
                    <Image src="/blockchain2.png" alt='blockchain' width={30} height={30} />
                    <p className="text-white text-[20px] font-bold">
                        Chain<span className="text-[#6444ff]">Cash.</span>
                </p>
                </div>
                <div>
                    <ConnectButton />
                </div>
            </div>
        </nav>
    );
};

export default Header;
