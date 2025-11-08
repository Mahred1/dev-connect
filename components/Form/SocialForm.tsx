"use client"
import { signIn } from "next-auth/react";
import { Button } from "../ui/button";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialForm = () => {
  return (
    <div className="mt-10 flex gap-2.5">
      <Button onClick={()=>signIn("github",{callbackUrl:"/"})} className="bg-gray-900 min-h-12 flex-1 py-3.5 cursor-pointer ">
        <FaGithub style={{width:'24px',height:'24px'}} />
        <span className="text-md ">Login with GitHub</span>
      </Button>
      <Button className="bg-gray-900 min-h-12 flex-1 py-3.5 px-4 cursor-pointer ">
        <FcGoogle style={{width:'24px',height:'24px'}} />
        <span className="text-md ">Login with Google</span>
      </Button>
     
    </div>
  );
};

export default SocialForm;
