export function calculateTransactionFee(gasUsed: bigint, effectiveGasPrice: bigint) {
    // Calculate the transaction fee in wei
    const transactionFeeWei = gasUsed * effectiveGasPrice;
    
    // Convert wei to ether (1 ETH = 10^18 wei)
    const transactionFeeEth = transactionFeeWei / 10n**18n;
    
    // Return the transaction fee in ETH as a string
    return transactionFeeEth.toString();
}