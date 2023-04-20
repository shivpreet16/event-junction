// faculty.js
import React, { useEffect, useState } from 'react'
import { getCookie } from 'cookies-next'
import { useRouter } from 'next/router'
import Calendar from '../../components/Calendar'
import AllEvents from '../../components/AllEvents'
import Profile from '../../components/Profile'

export async function getServerSideProps(context) {
  const url=context.query
  const response = await fetch('http://localhost:3000/api/getFacUser',{
    method:'POST',
    body:JSON.stringify({
      "email":url.email
    }),
    headers: {
      'Content-Type' : 'application/json'
    },
  })
  // console.log(await response.json())
  const value=await response.json()
  return {
    props:{data:value}
  }
}

export default function faculty(props) {
  const [name, setName] = useState('')
  const [DeptName, setDeptName] = useState('')
  const [Email, setEmail] = useState('')
  const router = useRouter()
  useEffect(() => {
    if(!getCookie('faculty_cookie')){
      router.push('/')
    }
    setName(props.data.name)
    setDeptName(props.data.dept)
    setEmail(props.data.email)
  }, [])

  const [active, setactive] = useState('profile')

  return (
    <div className='max-h-fit h-full lg:h-[100vh] w-full  flex flex-col lg:flex-row justify-between gradient'>
    <div className='flex flex-col w-full lg:w-[70%] gap-2'>
      <ul className='w-full flex justify-evenly mt-10 nav'>
        <li onClick={(e)=>{
          e.preventDefault()
          setactive('All Events')
        }}>All Events</li>
        <li onClick={(e)=>{
          e.preventDefault()
          setactive('Your Requests')
        }}>Your Requests</li>
        <li onClick={(e)=>{
          e.preventDefault()
          setactive('Profile')
        }}>Profile</li>
      </ul>
    <Profile email={Email} name={name} dept={DeptName} active={active} usertype={"faculty"}/>
  </div>
    <div className='flex flex-col md:pb-4 lg:pb-0 md:flex-row lg:flex-col md:right-0 md:ml-10 lg:m-10 md:mt-3 mt-7 w-[100%] lg:w-1/4'>
      <Calendar />
      <AllEvents />
    </div>

  </div>
  )
}