import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Datepicker from './Datepicker'
import Calendar from './Calendar'
import { Select, MenuItem } from '@mui/material'
import Timepicker from './Timepicker'


const Apply = ({ active }) => {
    const [selectedDate, setSelectedDate] = useState(null)
    const [selectedTime, setSelectedTime] = useState(null)
    const [selectedFaculty, setselectedFaculty] = useState('')
    return (

        <motion.div
            initial={{
                x:200,
                y:-350,
                opacity:0,
                scale:0
            }}
            animate={active==='apply'?{
                opacity:1,
                scale:1 ,
                x:0,
                y:0
            }:{
                opacity:0,
                scale:0
            }}
            transition={{duration:0.5}}
            className="absolute top-[15vh] right-[10vh]"
        >

            <form className=' text-md flex flex-col gap-2 md:gap-3 md:text-lg'>
                <input type="text" name="" id="" placeholder='Event Name'
                className='apply-input'
                />
                <textarea rows={4} name="" id="" placeholder='Event description'
                className='apply-input'
                />
                <input type="text" name="" id="" placeholder='Venue'
                className='apply-input'
                />
                <input type="text" name="" id="" placeholder='Faculty in-charge Email'
                className='apply-input'
                />
                
                <div className='flex flex-col'>

                    <span className='opacity-40'>Date of event</span>
                    <Datepicker setSelectedDate={setSelectedDate}/>
                </div>
                <Timepicker />


            </form>
        </motion.div>

    )
}

export default Apply