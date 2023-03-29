import React,{useState} from 'react';
import Calendar from '../../components/Calendar'

function BasicDateCalendar() {
  const handlechange = (newvalue) => {
    console.log("hii")

  }
  return (
    <div className='h-screen w-full bg-[#ededed] flex justify-center '>
      <div className='absolute md:right-0 md:m-10 md:mt-3 mt-3'>
        <Calendar />
        <AllEvents />
      </div>
      
    </div>
  );
}

export default withAuth(BasicDateCalendar)