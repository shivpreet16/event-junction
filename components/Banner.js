import React from 'react'

const Banner = () => {
  return (
    <div className=" bg-[#bcbcbc] h-screen w-full relative overflow-x-hidden">
      <div className="w-full absolute h-[60vh] flex justify-center items-center flex-col gap-10">
        <h1 className="text-[#262926] font-anton uppercase font-black text-3xl md:text-[60px] lg:text-[80px]">Event Junction</h1>
        <h2 className="font-anton md:text-[20px] opacity-50 font-bold xs:text-[20px]">Helping you plan a series of fortunate events</h2>
      </div>
      <img src="./wave.svg" alt=""
        className="bottom-8 lg:bottom-20 absolute w-full"
      />
      <img src="./wave3.svg" alt=""
        className="bottom-6 lg:bottom-16 absolute w-full"
      />
      <img src="./wave4.svg" alt=""
        className="bottom-4 lg:bottom-8 absolute w-full"
      />
      <img src="./wave2.svg" alt=""
        className=" bottom-0 absolute w-full"
      />
    </div>
  )
}

export default Banner