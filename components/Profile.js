import React,{useState} from "react";

const Profile = ({ email, name, YOE, dept, active }) => {
  const [password, setpassword] = useState(false)
  return (
    <div
      className={`bg-[#edededed] h-full w-80% ml-10 flex flex-col mb-10 rounded-[10px] text-[#6d8667] justify-center items-center relative ${
        active === "profile" ? "block" : "hidden"
      }`}
    >
      <img src="stu_profile.png" alt="" className=" absolute w-32 rounded-full top-20"/>
      <div className={`flex absolute flex-col top-64 text-center text-lg font-semibold tracking-[1px] gap-[0.175rem] ${
        !password ? 'block':'hidden' 
      }`}>
      <span>{email}</span>
      <span>{name}</span>
      <span>{YOE}</span>
      <span>{dept}</span>
      </div>
      <button className='flex absolute top-96 bg-[#A2C495] text-[#354931] rounded-lg p-2' onClick={(e) => {
        e.preventDefault()
        setpassword(!password)
      }}>Change Password</button>
      <div className={`flex absolute flex-col top-64 text-center text-lg font-semibold tracking-[1px] gap-[0.175rem] ${
        password ? 'block':'hidden' 
      }`}>
        <div className="flex gap-3">
      <span>Current Password:</span>
      <input type="password" name="current" id="current" className=""/>
        </div>
        <div className="flex gap-3">
      <span>New Password:</span>
      <input type="password" name="current" id="current" className=""/>
        </div>
      </div>
    </div>
  );
};

export default Profile;
