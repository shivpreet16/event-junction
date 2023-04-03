import React, { useState } from 'react'
import Datepicker from './Datepicker'
import Requrements from './Requrements'
import Timepicker from './Timepicker'

const ApplyForm = () => {
    const [selectedDate, setSelectedDate] = useState(null)
    const [selectedTime, setSelectedTime] = useState(null)
    const [count, setCount] = useState(1)
    const [selectedFaculty, setselectedFaculty] = useState('')
    return (
        <div className='bg-white md:h-[80vh] md:pt-10 h-fit bottom-0 flex flex-col md:flex-row justify-evenly m-5 rounded-[10px]'>
            <div className='flex flex-col gap-6 p-5'>

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
            </div>
            <div className='flex flex-col gap-6'>
                <div className='flex flex-col'>

                    <span className='opacity-40 pl-5 pt-5'>Date of event</span>
                    <Datepicker setSelectedDate={setSelectedDate} />
                </div>
                <Timepicker setSelectedTime={setSelectedTime} />
            </div>
            <div className=''>
                requirements
                <button onClick={()=>{
                    setCount(count+1);
                }}>
                    add
                </button>
                <button onClick={()=>{
                    setCount(count-1);
                }}>
                    dec
                </button>
                {
                    Array(count).fill(<Requrements/>)
                }
                {/* <Requrements /> */}

            </div>
        </div>
    )
}

export default ApplyForm