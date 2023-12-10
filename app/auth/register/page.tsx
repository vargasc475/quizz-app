"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";

const RegisterPage = () => {
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const [alert, setAlert] = useState({
    status: '',
    message: ''
})
const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    try {
      await fetch('/api/auth/signup', {
        method: 'POST',
        body: JSON.stringify(registerData)
      })
      setAlert({ status: 'success', message: 'Signup successfully' })
      setRegisterData({ name: '', email: '', password: '' })
    } catch (error : any) {
      console.log({ error })
      setAlert({ status: 'error', message: 'Something went wrong'})
    }
}

  function signIn(arg0: string): void {
    throw new Error("Function not implemented.");
  }

  return (
    <main className="h-screen bg-green-400 flex items-center flex-col">
      <div className="lg:w-screen lg:flex lg:flex-col">
      <h3 className="text-4xl text-center my-10 lg:font-bold lg:text-6xl">Register Page</h3>
      {alert.message &&
        <div style={{
          color: alert.status === 'success' ? 'green' : 'red',
          fontWeight: 'bold'
        }}>
          {alert.status === 'success' ? '✅' : '❌'} {alert.message}
        </div>}
      <form onSubmit={onSubmit} className="bg-white w-fit py-5 px-10 rounded flex flex-col justify-center lg:w-2/5 lg:h-80 lg:p-0 lg:place-self-center lg:outline">
        <div className="lg:place-self-center mb-3">
          <label className="lg:text-2xl mr-10 lg:mr-12" htmlFor="name">Name</label>
          <input className="outline rounded"
            onChange={onChange}
            value={registerData.name}
            type="text"
            name="name"
            required />
        </div>

        <div className="lg:place-self-center mb-3">
          <label className="lg:text-2xl mr-11 lg:mr-12 lg:pr-1" htmlFor="email">Email</label>
          <input className="outline rounded"
            onChange={onChange}
            value={registerData.email}
            type="email"
            name="email"
            required />
        </div>

        <div className="lg:place-self-center mb-3">
          <label className="lg:text-2xl mr-3" htmlFor="password">Password</label>
          <input className="outline rounded"
            onChange={onChange}
            value={registerData.password}
            type="password"
            name="password"
            required />
        </div>
        <button className="bg-[#172554] text-white rounded p-2 w-36 mt-6 place-self-center lg:text-2xl lg:mt-12 lg:w-fit lg:px-4 lg:hover:bg-blue-300" type="submit">Create account</button>
      </form>
      <div className="text-center lg:text-xl lg:mt-4">
        Already have an account? <Link className="underline lg:hover:text-orange-700" href="/auth/login">Login here</Link>
      </div>
    </div>
    <button className="underline lg:text-xl lg:hover:text-orange-700" onClick={() => signIn('google')}>Login with Google</button>
    </main>
  );
};

export default RegisterPage;