import React, { useEffect, useState } from 'react'
import { getCookie } from 'cookies-next'
import { useRouter } from 'next/router'
import Calendar from '../../components/Calendar'
import AllEvents from '../../components/AllEvents'
import Profile from '../../components/Profile'

export default function faculty() {
  const router = useRouter()
  useEffect(() => {
    if(!getCookie('faculty_cookie')){
      router.push('/')
    }
  }, [])
  const [active, setactive] = useState('All Events')
  const [email, setemail] = useState('')
  const [error, seterror] = useState('no data')

  const getUserDetails = async(e)=> {
    e.preventDefault()
    setactive('Profile')
    const val = {
      "cookie": getCookie('faculty_cookie')
    }

    const response = await fetch('api/getUser', {
      method: 'POST',
      body: JSON.stringify(val),
      headers:{
        'Content-Type': 'application/json'
      }
    })

    data = await response.json()
    if(data){
      setemail(data.email)
      seterror('')
    }
    else{
      seterror(data.error)
    }
  }

  return (
    <div className='max-h-fit h-full lg:h-[100vh] w-full bg-[#ededed] flex flex-col lg:flex-row justify-between gradient'>
    <div className='flex flex-col w-full lg:w-[70%] gap-2'>
      <ul className='w-full flex justify-evenly mt-10 nav'>
        <li>All Events</li>
        <li onClick={(e)=>{
          e.preventDefault()
          setactive('Profile')}}>Your Requests</li>
        <li onClick={getUserDetails}>Profile</li>
      </ul>
      <Profile 
      email={email} 
      error={error}
      setactive={setactive}/>
      <div className='bg-white h-[80vh] bottom-0  m-5 rounded-[10px]'></div>
    </div>
    {/* <span>{message}</span> */}
    <div className='flex flex-col md:pb-4 lg:pb-0 md:flex-row lg:flex-col md:right-0 md:ml-10 lg:m-10 md:mt-3 mt-7 w-[100%] lg:w-1/4'>
      <Calendar />
      <AllEvents />
    </div>

  </div>
  )
}