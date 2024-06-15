import React from "react";
import ConnectButton from "../ConnectWalletButton";
const Header = () => {
    return (
        <nav className="bg-[#1B1B1F] container mx-auto h-[60px] fixed top-0 left-0 right-0 z-10">
            <div className="flex h-full justify-between items-center">
                <p className="text-white text-[20px] font-bold">
                    Chain<span className="text-[#3E63DD]">Cash.</span>
                </p>
                <div>
                    <ConnectButton />
                </div>
            </div>
        </nav>
    );
};

export default Header;
