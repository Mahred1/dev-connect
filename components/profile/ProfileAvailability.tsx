import { cn } from "@/lib/utils";
import React from "react";

const ProfileAvailability = ({
  status,
  fullTIme,
  offers,
}: {
  status: boolean;
  fullTime: boolean;
  offers: boolean;
}) => {
  return (
    <div className="bg-slate-50 rounded-2xl border border-slate-300 px-4  pt-4 pb-3 w-[400px]">
      <h2 className="text-xl">Availability</h2>

      <div className="mt-5">
        <div className="flex justify-between items-center border-b border-slate-300 mb-3 pb-4">
          <span className="text-slate-600 ">Status</span>
          <span
            className={cn(
              "border px-1.5 py-0  rounded-xl text-sm",
              status
                ? "border-green-300 text-green-600 bg-green-100"
                : "border-red-300 text-red-600 bg-red-100"
            )}
          >
            {status ? "available" : "Unavailable"}
          </span>
        </div>

        <div className="flex justify-between items-center border-b border-slate-300 mb-3 pb-2">
          <span className="text-slate-600 ">Freelance</span>
          <span>{offers ? "Open to offers" : "unavailable"}</span>
        </div>

        <div className="flex justify-between items-center pb-0.5">
          <span className="text-slate-600 ">Full-time</span>
          <span>{fullTIme ? "Considering" : "Not considering"}</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileAvailability;
