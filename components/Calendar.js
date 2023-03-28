// import * as React from 'react';
import { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

export default function Calendar() {
    const [date, setdate] = useState(null)
    const handlechange = async(newvalue) => {
        // console.log("hii")
        setdate(newvalue)
        const data = {
            d: newvalue.$d.getDate(),
            m: newvalue.$d.getMonth()+1,
            y: newvalue.$d.getYear()+1900
        }
        const response = await fetch('/api/getDate',{
            method: 'POST',
            body: JSON.stringify(data),
            headers:{
                'Content-Type': 'application/json',
            }
        })
        const da=await response.json()
        console.log(da.message)
    }
    // console.log("hello")
    return (
        <div className='flex'>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar
                    onChange={handlechange}
                        // setdate={}
                        // value=
               />
            </LocalizationProvider>
            {/* <span> */}
                
                {/* {date!=null?date.$d.toDateString():"hii"}</span> */}
        </div>
    );
}