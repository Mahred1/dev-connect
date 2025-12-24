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
    <div className=" bg-[linear-gradient(0.25turn,#155DFC,#1447E6,#9810FA)] text-gray-50 rounded-2xl w-full px-4 py-4 lg:py-8 lg:px-8 mt-4 mx-3 flex flex-col lg:flex-row lg:justify-start lg:gap-12  lg:items-start items-center gap-2 shadow-2xl ">
      <div className=" relative rounded-full w-28 lg:w-32 lg:h-32 h-28 overflow-clip ">
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
              className="invert"

            ></Image>
            <span className="text-[16px]">{location}</span>
          </div>
          <div className="flex gap-2 items-center">
            <Image
              src={"/icons/chat-bubble.svg"}
              alt={"location"}
              width={18}
              height={18}
              className="invert"
            ></Image>
            <span className="text-[16px]">{email}</span>
          </div>
          <div className="flex gap-2 items-center">
            <Image
              src={"/icons/jobs.svg"}
              alt={"location"}
              width={18}
              height={18}
              className="invert"

            ></Image>
            <span className="text-[16px]">
              {availability ? "Available for work" : "Not Available for work"}
            </span>
          </div>
        </div>

        <div className="mt-4  max-w-4xl ">
          <p className=" text-left text-[16px]">{description}</p>
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
