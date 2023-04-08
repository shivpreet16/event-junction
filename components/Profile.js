import React from 'react'

const Profile = ({email, name, YOE, dept, active}) => {
  return (
    <div className={`bg-[#edededed] h-full w-80% ml-10 flex flex-col mb-10 rounded-[10px] ${active==='profile'?'block':'hidden'}`}>
        {email}
        {name}
        {YOE}
        {dept}
    </div>
  )
}

export default Profile