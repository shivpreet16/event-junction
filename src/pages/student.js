import React, { useState,useEffect } from 'react';
import Calendar from '../../components/Calendar'
import AllEvents from '../../components/AllEvents';
import { useRouter } from 'next/router';
import { getCookie, parseCookie } from 'cookies-next';
// import ApplyForm from '../../components/ApplyForm';
import Profile from '../../components/Profile';
import { decode } from 'jsonwebtoken';

function student(props) {
  const router = useRouter()
  const { email } = router.query
  const [active, setactive] = useState('profile')
  // const [email, setemail] = useState('')
  useEffect(() => {
    if(!getCookie('student_cookie')){
        router.push('/')
    }
  }, [])
  // const [data, setData] = useState({})

  const getUserData = async(e) => {
    e.preventDefault()
    const val = {
      "email": email
    }
    const response = ('/api/getUser', {
      method: 'POST',
      body: JSON.stringify(val),
      credentials: 'include',
      headers: {
        'Content-Type' : 'application/json'
      },
    })

    // const data = await response.json()
    console.log(response)
  }
  
  return (
    <div className='max-h-fit h-full lg:h-[100vh] w-full  flex flex-col lg:flex-row justify-between gradient'>
      <div className='flex flex-col w-full lg:w-[70%] gap-2'>
        <ul className='w-full flex justify-evenly mt-10 nav'>
          <li onClick={(e)=>{
            e.preventDefault()
            setactive('events')
          }}>Events</li>
          <li onClick={(e)=>{
            e.preventDefault()
            setactive('communities')
          }}>Communities</li>
          <li onClick={(e)=>{
            getUserData(e)
            setactive('profile')
          }}
          className='relative cursor-pointer'>
            Profile
          </li>
        </ul>
        <Profile email/>
      </div>
      
      <div className='flex flex-col md:pb-4 lg:pb-0 md:flex-row lg:flex-col md:right-0 md:ml-10 lg:m-10 md:mt-3 mt-7 w-[100%] lg:w-1/4'>
        <Calendar />
        
        <AllEvents />
      </div>

    </div>
  );
}

export default student