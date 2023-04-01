import React, { useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export default function Datepicker({setSelectedDate}) {

    const handleDateChange = (date) => {
        setSelectedDate(date);
        console.log(date)
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} >
            <DatePicker 
                className='scale-[0.6] -translate-x-[2.5rem]  md:-translate-x-[3.25rem] -translate-y-[0.60rem]'
                onChange={handleDateChange}
            />
        </LocalizationProvider>
    );
}