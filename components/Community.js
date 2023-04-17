import { useRouter } from 'next/router'
import React from 'react'

const router = require('next/router')

const Community = ({ email, name, YOE, dept, active }) => {
  function onCreateHandler(){
    router.push("/new_community")
  }
  return (
    <div
      className={`bg-[#edededed] h-full w-80% ml-10 flex flex-col mb-10 rounded-[10px] text-[#6d8667] justify-center items-center relative ${
        active === "community" ? "block" : "hidden"
      }`}
    >
     <button className='bg-[#6d8667] text-white p-4 rounded-lg' onClick={onCreateHandler}>Create New Community</button>   
    </div>
  )
}

export default Community