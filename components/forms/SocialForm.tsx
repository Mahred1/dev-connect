"use client"
import { signIn } from "next-auth/react";
import { Button } from "../ui/button";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { ROUTES } from "@/constants/routes";
import { toast } from "sonner";

async function handleSignIn(provider:'github'|'google'){
  try {
    await signIn(provider,{
    callbackUrl:ROUTES.HOME,
    redirect:true
  
  })
  } catch (error) {
    toast("Sign-in failed!",{
      description:error instanceof Error ? error.message :"an error occured during sign-in"
    })
  }
  
}
const SocialForm = () => {
  return (
    <div className="mt-10 flex gap-2.5">
      <Button onClick={()=>handleSignIn("github")} className="bg-gray-900 min-h-12 flex-1 py-3.5 cursor-pointer ">
        <FaGithub style={{width:'24px',height:'24px'}} />
        <span className="text-md ">Login with GitHub</span>
      </Button>
      <Button onClick={()=>handleSignIn('google')} className="bg-gray-900 min-h-12 flex-1 py-3.5 px-4 cursor-pointer ">
        <FcGoogle style={{width:'24px',height:'24px'}} />
        <span className="text-md ">Login with Google</span>
      </Button>
     
    </div>
  );
};

export default SocialForm;
