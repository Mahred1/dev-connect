import SocialForm from "@/components/forms/SocialForm";
import React from "react";

const AuthLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main className="min-w-screen min-h-screen flex justify-center items-center bg-gray-600">
      <section className="bg-gray-800  text-white  rounded-xl sm:w-[520px] w-full  px-4 py-10 sm:px-8">
        <div className="flex justify-between w-full">
          <h1 className="font-bold text-2xl">Join DevConnect</h1>
          <div className="text-xl" ><span className="font-bold">Dev</span>Connect</div>
        </div>
        <p className="mt-1 font-extralight opacity-30 ">Where devs build the future together.</p>
      {children}
      <SocialForm/>
      </section>
    </main>
  );
};

export default AuthLayout;
