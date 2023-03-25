import React from 'react'

const Login = () => {
    return (
        <div className='h-screen flex-col gap-16 flex justify-center items-center bg-[#354931]'>

            <h3 className='uppercase text-[#a2c495] tracking-[2px] font-black font-anton text-[34px]'>Login</h3>
            <form action="" className='relative z-10 flex flex-col items-center gap-7'>

                <input type="text" name="" id="" placeholder='Email'
                    className='input'
                />
                <input type="text" name="" id="" placeholder='Password'
                    className='input'
                />
                <button type="submit" className='inputbtn'>Submit</button>
            </form>
            <div className='absolute bg-black h-96 w-80 rounded-lg opacity-20 z-0'>
            </div>
        </div>
    )
}

export default Login