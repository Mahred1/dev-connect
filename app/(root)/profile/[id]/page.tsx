import ProfileOverview from "@/components/profile/ProfileOverview";
import ProfileStats from "@/components/profile/ProfileStats";
import React from "react";

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  return (
    <div className="flex justify-start">
     <ProfileStats id={id}/>
    </div>
  );
};

export default page;
