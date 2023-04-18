import { Router } from 'next/router'
import React, {useEffect, useState} from 'react'
import { getCookie } from 'cookies-next'

const router = require('next/router')

const new_community = () => {
        useEffect(() => {
        if(!getCookie('student_cookie')){
            router.push("/")
        }
      }, [])

      const [community_name, setcommunity_name] = useState('')
      const [desc, setdesc] = useState('')

      function onSubmitHandler(e){
        e.preventDefault()

        const data = {
          community_name: community_name,
          desc : desc
        }
        console.log(community_name)
        console.log(desc)
      }

  return (
    <div className='bg-[#ededed] h-screen w-full'>
      <form action="" className='flex flex-col gap-10 pt-10'>
        <div className='flex gap-8'>
        <span>Name of Community</span>
        <input type="text" placeholder='community name' className='rounded-lg p-2' onChange={(e)=>{setcommunity_name(e.target.value)}}/>
        </div>

        <div className='flex gap-8'>
          <span>Description</span>
          <textarea placeholder="description" id="" cols="30" rows="10" className='rounded-lg p-2' onChange={(e)=>{setdesc(e.target.value)}}></textarea>
        </div>
        <div className='pl-5'>
          <button type='submit' onClick={onSubmitHandler} className='bg-[#a2c092] p-3 rounded-lg'>Submit for Review</button>
        </div>
      </form>
    </div>
  )
}

export default new_community