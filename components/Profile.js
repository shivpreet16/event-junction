import React, { useState } from "react";

const Profile = ({ email, name, YOE, dept, active, usertype }) => {
  const [password, setpassword] = useState(false);
  const [visible, setvisible] = useState(0);
  const [type, settype] = useState("password");
  var src = ["visible.svg", "visible_off.svg"];
  const[newpass, setNewpass] = useState('')
  const [oldpass, setoldpass] = useState('')
  const [API, setAPI] = useState('')

  const passwordHandler = async (e) => {
    e.preventDefault()
    const val = {
      email : email,
      oldpass: oldpass,
      newpass: newpass
    }

    if(usertype==='student'){
      setAPI('/api/submitPassStudent')
    } else{
      setAPI('/api/submitPassFac')
    }
    const response = await fetch(API, {
      method: 'POST',
      body: JSON.stringify(val),
      credentials: 'include',
      headers: {
          'Content-Type': 'application/json',
      },
    })
    const message = await response.json()
    console.log(message)
  }
  
  return (
    <div
      className={`bg-[#edededed] h-full w-80% ml-10 flex flex-col mb-10 rounded-[10px] text-[#6d8667] justify-center items-center relative ${
        active === "profile" ? "block" : "hidden"
      }`}
    >
      <img
        src="stu_profile.png"
        alt=""
        className=" absolute w-32 rounded-full top-20"
      />
      <div
        className={`flex absolute flex-col top-64 text-center text-lg font-semibold tracking-[1px] gap-[0.175rem] ${
          !password ? "block" : "hidden"
        }`}
      >
        <span>{email}</span>
        <span>{name}</span>
        <span>{YOE}</span>
        <span>{dept}</span>
      </div>
      <button
        className="flex absolute bottom-12 bg-[#A2C495] text-[#354931] rounded-lg p-2"
        onClick={(e) => {
          e.preventDefault();
          setpassword(!password);
        }}
      >
        Change Password
      </button>
      <div
        className={`flex absolute flex-col top-64 text-center text-lg font-semibold tracking-[1px] gap-4 ${
          password ? "block" : "hidden"
        }`}
      >
        <div className="flex relative gap-3">
          <span>Current Password:</span>
          <input
            type={type}
            name="current"
            id="current"
            className=" outline-none rounded-lg bg-[#749465] text-[#ededed] px-2 focus:border-black"
            onChange={(e)=>{setoldpass(e.target.value)}}
          />
          <img
            src={src[visible]}
            alt=""
            className="w-5 h-auto absolute right-2 bottom-1"
            onClick={(e) => {
              e.preventDefault();
              setvisible(visible == 1 ? 0 : 1);
              settype(type === "text" ? "password" : "text");
            }}
          />
        </div>
        <div className="flex gap-3">
          <span>New Password:</span>
          <div>
            <input
              type={type}
              name="new"
              id="new"
              className="absolute right-0 outline-none rounded-lg bg-[#749465] text-[#ededed] px-2 focus:border-black"
              onChange={(e) => {setNewpass(e.target.value)}}
            />
            <img
              src={src[visible]}
              alt=""
              className="w-5 h-auto absolute right-2 top-12"
              onClick={(e) => {
                e.preventDefault();
                setvisible(visible == 1 ? 0 : 1);
                settype(type === "text" ? "password" : "text");
              }}
            />
          </div>
        </div>
        <button onClick={(e)=>{
          passwordHandler(e)
        }}>Submit</button>
      </div>
    </div>
  );
};

export default Profile;
