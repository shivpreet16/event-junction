import React from 'react'

const Community = ({ email, name, YOE, dept, active }) => {
  return (
    <div
      className={`bg-[#edededed] h-full w-80% ml-10 flex flex-col mb-10 rounded-[10px] text-[#6d8667] justify-center items-center relative ${
        active === "community" ? "block" : "hidden"
      }`}
    >
        
    </div>
  )
}

export default Community