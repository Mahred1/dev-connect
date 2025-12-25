import React from "react";
import StatCard from "./StatCard";

const ProfileStats = ({ id }: { id: string }) => {
  return (
    <div className="bg-slate-50 rounded-2xl border border-slate-300 px-4  pt-6 pb-4 w-[350px]">
      <h2 className="text-xl">Statistics</h2>

      <div className="mt-8">
        <StatCard
          image={"/icons/jobs.svg"}
          heading="Profile View"
          value={1245}
          color={"red"}
        />
        <StatCard
          image={"/icons/projects.svg"}
          heading="Projects"
          value={22}
          color={"green"}
        />
        <StatCard
          image={"/icons/network.svg"}
          heading="Connections"
          value={125}
          color={"purple"}
        />
        <StatCard
          image={"/icons/bell.svg"}
          heading="Achievments"
          value={89}
          color={"orange"}
        />
      </div>
    </div>
  );
};

export default ProfileStats;
