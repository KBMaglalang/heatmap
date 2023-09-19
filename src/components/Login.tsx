"use client";

import React from "react";
import { signIn } from "next-auth/react";
import Image from "next/image";

function Login() {
  return (
    <div className="bg-[#212121] h-screen flex flex-col items-center justify-center text-center">
      <div
        className="flex flex-col items-center justify-center p-4 cursor-pointer animate-pulse hover:shadow-2xl hover:shadow-gray-700 hover:rounded-2xl"
        onClick={() => signIn("google")}
      >
        <Image
          src={"/assets/images/brain.png"}
          width={200}
          height={200}
          alt="logo"
          className="scale-[1.5]"
        />
        <div className="m-4 text-3xl font-bold text-[#363636] animate-pulse">
          Sign In
        </div>
      </div>
    </div>
  );
}

export default Login;
