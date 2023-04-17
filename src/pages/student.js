import React, { useState,useEffect } from 'react';
import Calendar from '../../components/Calendar'
import AllEvents from '../../components/AllEvents';
import { useRouter } from 'next/router';
import { getCookie, parseCookie } from 'cookies-next';
import Community from '../../components/Community';
// import ApplyForm from '../../components/ApplyForm';
import Profile from '../../components/Profile';
import { decode } from 'jsonwebtoken';
import { resolve } from 'styled-jsx/css';

//getStaticProps
export async function getServerSideProps(context) {
  const url=context.query
  const response = await fetch('http://localhost:3000/api/getUser',{
    method:'POST',
    body:JSON.stringify({
      "email":url.email
    }),
    headers: {
      'Content-Type' : 'application/json'
    },
  })
  // console.log(await response.json())
  const value=await response.json()
  return {
    props:{data:value}
  }
}

function student(props) {
  // const { email } = props.data.stu_email
  const [name, setName] = useState('')
  const [YOE, setYOE] = useState('')
  const [DeptName, setDeptName] = useState('')
  const [active, setactive] = useState('profile')
  const [email, setemail] = useState('')
  useEffect(() => {
    if(!getCookie('student_cookie')){
        router.push('/')
    }
    console.log(props);
    setName(props.data.name)
    setYOE(props.data.year_of_enr)
    setDeptName(props.data.dept)
    setemail(props.data.email)
  }, [])
  // const [data, setData] = useState({})
  
  return (
    <div className='max-h-fit h-full lg:h-[100vh] w-full  flex flex-col lg:flex-row justify-between gradient'>
      <div className='flex flex-col w-full lg:w-[70%] gap-2'>
        <ul className='w-full flex justify-evenly mt-10 nav'>
          <li onClick={(e)=>{
            e.preventDefault()
            setactive('events')
          }}>Events</li>
          <li onClick={(e)=>{
            e.preventDefault()
            setactive('community')
          }}>Communities</li>
          <li onClick={(e)=>{
            setactive('profile')
          }}
          className='relative cursor-pointer'>
            Profile
          </li>
        </ul>
        <Profile email={email} name={name} YOE={YOE} dept={DeptName} active={active}/>
        <Community email={email} name={name} YOE={YOE} dept={DeptName} active={active}/>
      </div>
      
      <div className='flex flex-col md:pb-4 lg:pb-0 md:flex-row lg:flex-col md:right-0 md:ml-10 lg:m-10 md:mt-3 mt-7 w-[100%] lg:w-1/4'>
        <Calendar />
        
        <AllEvents />
      </div>

    </div>
  );
}

export default student