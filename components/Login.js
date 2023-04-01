import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/router'

const Login = () => {
    const router = new useRouter();
    const [email, setemail] = useState('')
    const [pass, setpass] = useState('')
    const [error, setError] = useState('')
    var [data] = useState({})
    const submitHandler = async (e) => {
        e.preventDefault();
        const val = {
            "email": email,
            "pass": pass
        }
        const response = await fetch('/api/submit', {
            method: 'POST',
            body: JSON.stringify(val),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
        })

        data = await response.json()
        
        // console.log(data)
        
        if (data.message)
            setError(data.message)

        else {
            setError('')

            // setTokenCookie(data.token)
            // router.push('/student')
            
            // Cookies.set('loggedin',true)
            if (email.includes('fcs'))
                router.push("/faculty")
            else{
                router.push({
                    pathname:"/student",
                    query:{message:email}
                    
                })
                
                // console.log("success")
            }
            }
            
        }
        return (
            <div className='h-screen flex-col gap-16 flex justify-center items-center bg-[#354931]'>

                <h3 className='uppercase text-[#a2c495] tracking-[2px] font-black font-anton text-[34px]'>Login</h3>
                <form action="" className='relative z-10 flex flex-col items-center gap-7'>

                    <input type="text" name="" id="" placeholder='Email'
                        className='input'
                        onChange={(e) => {
                            setemail(e.target.value)
                        }}
                    />
                    <input type="text" name="" id="" placeholder='Password'
                        className='input'
                        onChange={(e) => {
                            setpass(e.target.value)
                        }}
                    />
                    <span className={`${error != '' ? 'block' : 'hidden'} text-[#a2c495] absolute -top-12`}>{error}</span>
                    <button type="submit" onClick={submitHandler} className='inputbtn'>Submit</button>
                </form>
                <div className='absolute w-64 bg-black h-96 md:w-80 rounded-lg opacity-20 z-0'>
                </div>
            </div>
        )
    }

    export default Login