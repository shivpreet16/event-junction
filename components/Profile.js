import React from 'react'

const Profile = ({email}) => {
  return (
    <div className='bg-[#edededed] h-full w-80% ml-10 mb-10 rounded-[10px]'>
      <div>
        {email}
      </div>
    </div>
  )
}

export default Profile