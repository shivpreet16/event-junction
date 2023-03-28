// import * as React from 'react';
import { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

export default function BasicDateCalendar() {
    const [date, setdate] = useState(null)
    const handlechange = (newvalue) => {
        console.log("hii")

    }
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar
                onChange={handlechange}
                
            />
        </LocalizationProvider>
    );
}