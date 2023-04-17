import { useRouter } from 'next/router'
import React, {useEffect} from 'react'
import { getCookie } from 'cookies-next'

const router = require('next/router')

const new_community = () => {
        useEffect(() => {
        if(!getCookie('student_cookie')){
            router.push("/")
        }
      }, [])
  return (
    <div>new_community</div>
  )
}

export default new_community