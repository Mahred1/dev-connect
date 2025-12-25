import React from "react";

const SkillsCard = () => {
  const tags = [
    "Tailwind",
    "AWS",
    "Next.js",
    "Node.js",
    "Docker",
    "react",
    "typescript",
    "Git",
    "GraphQl",
    "PostgresSql",
  ];
  return (
    <div className="bg-white rounded-2xl border border-slate-300 px-4  pt-4 pb-3 ">
      <h2 className="text-lg mb-3 ">Skills and Expertise</h2>
      <li className="flex flex-wrap gap-2 items-center">
        {tags.map(tag=><ul className="text-sm bg-gray-200 px-3 py-1 rounded-xl"  key={tag}>{tag}</ul>)}
      </li>

    </div>
  );
};

export default SkillsCard;
