"use client"

import { auth } from "@/app/action";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginForm = () => {
  const router = useRouter();
  const [error, setError] = useState("")

  const onSubmit =async (event) => {
    try{
      event.preventDefault();
      const data = new FormData(event.currentTarget);
    
      const res = await auth(data)
      if (!!res.error) {
        console.error(response.error);
        setError(response.error.message);
    } else {
        router.push("/");
    }
    }
    catch(e){
      console.error(e);
      setError("Check your Credentials");
    }
  }
  return (
    <div className="flex flex-col border border-amber-500 p-5 m-4">
    <form onSubmit={onSubmit}>
      <h1 className="font-bold ">Login</h1>
      {error && <p className="text-red-500">{error}</p>}
      <div className="mr-3 ">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
      </div>
      <div className="mb-3 w-full">
        <label htmlFor="password">Password</label>
        <input className="" type="password" name="password" id="password" />
      </div>
      <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Login</button>
      </div>
    </form>
  </div>
  );
};

export default LoginForm;