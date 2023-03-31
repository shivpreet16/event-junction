import React, { useState } from 'react';
import Calendar from '../../components/Calendar'
import AllEvents from '../../components/AllEvents';
// import withAuth from './utils/withAuth';
import { useRouter } from 'next/router';
import { getCookie } from 'cookies-next';

function student(props) {
  const router = useRouter()
  const { message } = router.query
  // const i=0;
  
  return (
    <div className='h-screen w-full bg-[#ededed] flex flex-col lg:flex-row justify-between '>
      <div className='flex flex-col w-[70%] gap-2'>

        <button onClick={()=>{
          // console.log(getCookie('anything_cookie'))
        }}>nav</button>
        <div className='bg-blue-100 h-[80vh] bottom-0  m-5 rounded-[10px]'></div>
      </div>
      {/* <span>{message}</span> */}
      <div className='bg-black md:right-0 md:m-10 md:mt-3 mt-3 w-1/4'>
        <Calendar />
        <AllEvents />
      </div>

    </div>
  );
}

export default withAuth(BasicDateCalendar)