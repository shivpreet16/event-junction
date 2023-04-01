import React, { useState,useEffect } from 'react';
import Calendar from '../../components/Calendar'
import AllEvents from '../../components/AllEvents';
import { Router, useRouter } from 'next/router';
import { getCookie } from 'cookies-next';
import Apply from '../../components/Apply';

function student(props) {
  const router = useRouter()
  const { message } = router.query
  const [active, setactive] = useState('profile')
  useEffect(() => {
    if(!getCookie('student_cookie')){
        router.push('/')
    }
  }, [])

  
  return (
    <div className='max-h-fit h-full lg:h-[100vh] w-full bg-[#ededed] flex flex-col lg:flex-row justify-between '>
      <div className='flex flex-col w-full lg:w-[70%] gap-2'>
        <ul className='w-full flex justify-evenly mt-10'>
          <li onClick={(e)=>{
            e.preventDefault()
            setactive('profile')
          }}>Profile</li>
          <li onClick={(e)=>{
            e.preventDefault()
            setactive('your events')
          }}>Your Events</li>
          <li onClick={(e)=>{
            e.preventDefault()
            setactive('apply')
          }}
          className='relative'
          >
            Apply
            <Apply active={active}/>
          </li>
        </ul>
        <div className='bg-white h-[80vh] bottom-0  m-5 rounded-[10px]'></div>
      </div>
      
      <div className='flex flex-col md:pb-4 lg:pb-0 md:flex-row lg:flex-col md:right-0 md:ml-10 lg:m-10 md:mt-3 mt-7 w-[100%] lg:w-1/4'>
        <Calendar />
        
        <AllEvents />
      </div>

    </div>
  );
}

export default student