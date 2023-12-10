"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";

const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [alert, setAlert] = useState({
    status: "",
    message: "",
  });

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  function signIn(arg0: string): void {
    throw new Error("Function not implemented.");
  }

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    try {
      signIn("credentials");
      setAlert({ status: "success", message: "Login successfully" });
      setLoginData({ email: "", password: "" });
    } catch (error: any) {
      console.log({ error });
      setAlert({ status: "error", message: "Something went wrong" });
    }
  };  

  return (
    <main className="h-screen bg-green-400 flex justify-center">
      <div className="text-center lg:w-screen lg:flex lg:flex-col">
      <h3 className="text-4xl text-center my-10 lg:font-bold lg:text-6xl">Login Page</h3>
      {alert.message && 
        <div style={{ 
          color: alert.status === 'success' ? 'green' : 'red',
          fontWeight: 'bold'
        }}>   
          {alert.status === 'success' ? '✅' : '❌'} {alert.message}
        </div>
      }
      <form onSubmit={onSubmit} className="bg-white py-5 px-10 rounded flex flex-col justify-center w-screen lg:w-2/5 lg:h-80 lg:p-0 lg:place-self-center lg:outline"> 
        <div className="mb-3 flex flex-col lg:flex-row lg:place-self-center">
          <label className="lg:text-2xl lg:mr-16 place-self-start" htmlFor="email">Email </label>
          <input className="outline rounded lg:mr-12"
            onChange={onChange}
            value={loginData.email}
            type="email"
            name="email"
            required
          />
        </div>

        <div className="mb-3 flex flex-col lg:flex-row lg:place-self-center">
          <label className="lg:text-2xl lg:mr-5 place-self-start" htmlFor="password">Password </label>
          <input className="outline rounded lg:mr-12"
            onChange={onChange}
            value={loginData.password}
            type="password"
            name="password"
            required
          />
        </div>
        <div className="flex justify-center">
          <button className="bg-[#172554] lg:text-2xl lg:mt-16 lg:hover:bg-blue-300 text-white rounded p-2 w-28 mt-6" type="submit">Login</button>
        </div>
      </form>
      <div className="text-center text-sm mt-2 lg:text-xl">
        Do not have an account?{" "}
        <Link className="underline lg:hover:text-orange-700" href="/auth/register">Create an account</Link>
      </div>
      <button className="text-blue underline lg:text-xl lg:hover:text-orange-700" onClick={() => signIn('google')}>Login with Google</button>
    </div>
    </main>
  );
};

export default LoginPage;
