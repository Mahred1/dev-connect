import ProfileOverview from "@/components/profile/ProfileOverview";
import React from "react";

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  return (
    <div className="flex justify-start">
      <ProfileOverview
        image="/images/user.jpg"
        location="San Fransisco, CA"
        email="junireal@gmail.com"
        availability={true}
        description="Passionate full stack developer with 6+ years of experience building scalable web applications. Specialized in React, Node.js, and cloud technologies. Love solving complex problems and mentoring junior developers."
        name="jack doe"
        id={id}
        title="Full Stack Developer"
      />
    </div>
  );
};

export default page;
