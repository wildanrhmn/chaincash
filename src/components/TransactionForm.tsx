import React from 'react'
import Image from 'next/image'

const TransactionForm = () => {
  return (
    <form action="" className='bg-[#202127] p-5 rounded-xl flex flex-col gap-4 min-w-[500px]'>
      <div className='flex justify-center'>
        <Image src="/blockchain2.png" alt='blockchain' width={75} height={75} className='object-cover my-5' />
      </div>
      <input type="text" placeholder='enter address to send e.g. (0x0...)' className='bg-[#2B2F36] text-sm border-none outline-none text-white text-opacity-40 focus:text-opacity-100 font-medium p-2 rounded-xl focus:ring-2 focus:ring-[#6444ff] py-3' />
      <input type="text" placeholder='enter amount e.g. (0.001)' className='bg-[#2B2F36] border-none text-sm outline-none text-white text-opacity-40 focus:text-opacity-100 font-medium p-2 rounded-xl focus:ring-2 focus:ring-[#6444ff] py-3' />
      <textarea name="" id="" cols={30} rows={5} placeholder='enter message' className='bg-[#2B2F36] border-none text-sm outline-none text-white text-opacity-40 focus:text-opacity-100 font-medium p-2 rounded-xl focus:ring-2 focus:ring-[#6444ff] py-3'></textarea>
      <button className='bg-[#6444ff] p-2 rounded-xl text-white font-semibold text-sm hover:bg-[#6444ff]/80 transition-all duration-300 py-3'>Send</button>
    </form>
  )
}

export default TransactionForm