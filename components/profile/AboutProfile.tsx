import React from "react";

const AboutProfile = () => {
  const specializations:string[] = [
    " Frontend development with React, Next.js, and TypeScript",
    "Backend APIs with Node.js, Express, and GraphQL",
    "Cloud deployment and DevOps with AWS and Docker",
  ];
  return (
    <div className="bg-slate-50 rounded-2xl border border-slate-300 px-4  pt-4 pb-4">
      <h2 className="text-md" >About</h2>

      <div className="mt-8 border-b pb-4 border-slate-300">
        <h1 className="mb-2 text-lg">Professional Summary</h1>
        <p className="text-slate-600">
          Results-driven full stack developer with a proven track record of
          delivering high-quality web applications. Strong expertise in modern
          JavaScript frameworks, backend development, and cloud infrastructure.
          Committed to writing clean, maintainable code and following best
          practices.
        </p>
      </div>

      <div className="mt-4">
        <h1 className="mb-2 text-lg">Specializations</h1>
        <li className="flex flex-col gap-2 text-slate-600 ">
            {specializations.map(item=><ul className="flex gap-2 items-center" key={item}><div className="w-2 h-2 rounded-full bg-blue-500  shadow-blue-400 shadow"></div>{item}</ul>)}
        </li>
      </div>
    </div>
  );
};

export default AboutProfile;
