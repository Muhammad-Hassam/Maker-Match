import React from "react";

function ProjectTabs() {
  return (
    <div className="hidden md:flex mb-4 ml-6 ">
      <div className="flex flex-col items-center mr-5">
        <p className="font-['Inter'] text-[11px] pb-3 uppercase text-black">
          proposals (23)
        </p>
        <div className="w-2 h-2 bg-black rounded-full"></div>
      </div>
      <p className="font-['Inter'] text-[11px] pb-2 uppercase text-black">
        invitations (10)
      </p>
    </div>
  );
}

export default ProjectTabs;
