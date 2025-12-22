import { Description } from "@radix-ui/react-dialog";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

type Props = {
  id: string;
  name: string;
  location: string;
  email: string;
  availability: boolean;
  description: string;
  image: string;
  title: string;
};
const ProfileOverview = ({
  id,
  name,
  location,
  email,
  availability,
  description,
  image,
  title,
}: Props) => {
  return (
    <div className="sm:bg-red-300 bg-blue-200 rounded-4xl px-4 py-3 lg:py-5 mt-5 flex flex-col lg:flex-row lg:justify-around lg:items-start items-center gap-2 ">
      <div className=" relative rounded-full w-28 h-28 overflow-clip ">
        <Image src={image} fill alt="user profile"></Image>
      </div>

      <div className="flex  flex-col lg:items-start lg:max-w-[70%] items-center ">
        <h3 className="text-xl font-light mb-2">{name}</h3>
        <h1 className="text-[24px] font-extralight opacity-75 mb-3">{title}</h1>

        <div className="flex gap-3 justify-center flex-wrap ">
          <div className="flex gap-2 items-center">
            <Image
              src={"/icons/network.svg"}
              alt={"location"}
              width={18}
              height={18}
            ></Image>
            <span className="text-[16px]">{location}</span>
          </div>
          <div className="flex gap-2 items-center">
            <Image
              src={"/icons/chat-bubble.svg"}
              alt={"location"}
              width={18}
              height={18}
            ></Image>
            <span className="text-[16px]">{email}</span>
          </div>
          <div className="flex gap-2 items-center">
            <Image
              src={"/icons/jobs.svg"}
              alt={"location"}
              width={18}
              height={18}
            ></Image>
            <span className="text-[16px]">
              {availability ? "Available for work" : "Not Available for work"}
            </span>
          </div>
        </div>

        <div className="mt-3 ">
          <p className=" text-left ">{description}</p>
        </div>

        <div className="mt-3 mb-2 w-full flex-start">
          <Button>Edit Profile</Button>
          <Button>Share</Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileOverview;
