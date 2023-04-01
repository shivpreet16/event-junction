import React, { useState } from 'react';
import { TimePicker } from '@mui/x-date-pickers'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export default function Datepicker({setSelectedTime}) {


    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} >
            <TimePicker 
                className='scale-[0.8] -translate-x-[1.3rem]  md:-translate-x-[1.7rem] -translate-y-[0.80rem]'
                onChange={(newTime)=>{setSelectedTime(newTime)}}
                label="Select start time of event"
                views={['hours','minutes']}
                inputProps={{step:300}}
            />
        </LocalizationProvider>
    );
}