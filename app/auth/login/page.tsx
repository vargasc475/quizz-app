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
    <div>
      <h3>Login Page</h3>
      {alert.message && 
        <div style={{ 
          color: alert.status === 'success' ? 'green' : 'red',
          fontWeight: 'bold'
        }}>   
          {alert.status === 'success' ? '✅' : '❌'} {alert.message}
        </div>
      }
      <form onSubmit={onSubmit}> 
        <div>
          <label htmlFor="email">Email </label>
          <input
            onChange={onChange}
            value={loginData.email}
            type="email"
            name="email"
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password </label>
          <input
            onChange={onChange}
            value={loginData.password}
            type="password"
            name="password"
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <div>
        Do not have an account?{" "}
        <Link href="/auth/register">Create an account</Link>
      </div>
      <button onClick={() => signIn('google')}>Login with Google</button>
    </div>
  );
};

export default LoginPage;
