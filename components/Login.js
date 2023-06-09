import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";

const Login = () => {
  const router = new useRouter();
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [error, setError] = useState("");
  const [data, setData] = useState({});
  const [visibile, setvisibile] = useState(0);
  var src = ["visible_off.svg", "visible.svg"];
  const [type, settype] = useState("password");

  const submitHandler = async (e) => {
    e.preventDefault();
    const val = {
      email: email,
      pass: pass,
    };
    const response = await fetch("/api/submit", {
      method: "POST",
      body: JSON.stringify(val),
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });

    setData(await response.json());

    if (data.message) setError(data.message);
    else {
      setError("");
      if (email.includes("fcs"))
        router.push({
          pathname: "/faculty",
          query: { email: email },
        });
      else {
        router.push({
          pathname: "/student",
          query: { email: email },
        });
      }
    }
  };
  return (
    <div className="h-screen flex-col gap-16 flex justify-center items-center bg-[#354931]">
      <h3 className="uppercase text-[#a2c495] tracking-[2px] font-black font-anton text-[34px]">
        Login
      </h3>
      <form
        action=""
        className="relative z-10 flex flex-col items-center gap-7"
      >
        <input
          type="text"
          name=""
          id=""
          placeholder="Email"
          className="input"
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
        <div className="flex relative">
          <input
            type={type}
            name=""
            id=""
            placeholder="Password"
            className="input"
            onChange={(e) => {
              setpass(e.target.value);
            }}
          />
          <div
            onClick={(e) => {
              e.preventDefault();
              setvisibile(visibile == 1 ? 0 : 1);
              settype(type === "text" ? "password" : "text");
            }}
          >
            <img
              src={src[visibile]}
              alt=""
              className={`w-5 h-auto absolute right-3 top-1/3`}
            />
          </div>
        </div>
        <span
          className={`${
            error != "" ? "block" : "hidden"
          } text-[#a2c495] absolute -top-12`}
        >
          {error}
        </span>
        <button type="submit" onClick={submitHandler} className="inputbtn">
          Submit
        </button>
      </form>
      <div className="absolute w-64 bg-black h-96 md:w-80 rounded-lg opacity-20 z-0"></div>
    </div>
  );
};

export default Login;
