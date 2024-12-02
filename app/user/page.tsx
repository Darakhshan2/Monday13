"use client";
import LoginForm from "@/components/LoginForm";
import SignupForm from "@/components/SignupForm";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function User() {
  const [isLoggin, setIsLoggin] = useState(true); // hum login ko phly show krwana chahty hen
  return (
    <div className="min-h-screen bg-black text-black flex flex-col justify-center items-center content-center ">
      <div className="mb-4">
        <Button
          onClick={(isLoggin) => setIsLoggin(!isLoggin)}
          variant={"ghost"}
        >
          {isLoggin ? "Need a account : Create" : "Login with your current account"}
        </Button>
      </div>
      {isLoggin ? <LoginForm/> : <SignupForm/>}
    </div>
  );
}
