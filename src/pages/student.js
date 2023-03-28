import * as React from 'react';
import Calendar from '../../components/Calendar'

export default function BasicDateCalendar() {
  const handlechange = (newvalue) => {
    console.log("hii")

  }
  return (
    <div className='h-screen w-full'>
      <div className='absolute left-0'>

        <Calendar />
      </div>
      
    </div>
  );
}