import * as React from 'react';
import Calendar from '../../components/Calendar'
import withAuth from './utils/withAuth';

function BasicDateCalendar() {
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

export default withAuth(BasicDateCalendar)