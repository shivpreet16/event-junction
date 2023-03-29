import React from 'react'

const allEvents = () => {
    return (

        <div className=' h-[18rem] w-full bg-white mt-5 flex flex-col align-center rounded-[10px] overflow-hidden'>
            <h3 className=' text-center mt-3'>All Events</h3>
            <div className=' overflow-y-auto hover:scrollbar-thumb-[#303030b0] scrollbar-track-slate-400 scrollbar-thumb-[#5e5e5e8c] scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full'>

                <div className=' border py-3 px-2 flex justify-between'>
                    <h4 className='font-bold text-sm'>Event name</h4>
                    <div className='text-xs opacity-60 bottom-0'>date:14/04/2023</div>
                </div>
                <div className=' border py-3 px-2 flex justify-between'>
                    <h4 className='font-bold text-sm'>Event name</h4>
                    <div className='text-xs opacity-60 bottom-0'>date:14/04/2023</div>
                </div>
                <div className=' border py-3 px-2 flex justify-between'>
                    <h4 className='font-bold text-sm'>Event name</h4>
                    <div className='text-xs opacity-60 bottom-0'>date:14/04/2023</div>
                </div>
                <div className=' border py-3 px-2 flex justify-between'>
                    <h4 className='font-bold text-sm'>Event name</h4>
                    <div className='text-xs opacity-60 bottom-0'>date:14/04/2023</div>
                </div>
                <div className=' border py-3 px-2 flex justify-between'>
                    <h4 className='font-bold text-sm'>Event name</h4>
                    <div className='text-xs opacity-60 bottom-0'>date:14/04/2023</div>
                </div>
                <div className=' border py-3 px-2 flex justify-between'>
                    <h4 className='font-bold text-sm'>Event name</h4>
                    <div className='text-xs opacity-60 bottom-0'>date:14/04/2023</div>
                </div>

            </div>
        </div>
    )
}

export default allEvents