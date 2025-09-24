import React from "react";

function PortfolioNav() {
  return (
    <div className="flex justify-around border-b-1 border-b-[#E2DCD4] mt-8 md:mt-15 mb-8 mx-2 md:mx-8">
      <p className="font-['Inter'] text-[12px] font-normal text-black uppercase pb-3">
        proposal
      </p>
      <p className="font-['Inter'] text-[12px] font-normal text-black uppercase border-b-1 border-b-black pb-3">
        PORTFOLIO
      </p>
      <p className="font-['Inter'] text-[12px] font-normal text-black uppercase pb-3">
        ABOUT
      </p>
      <p className="font-['Inter'] text-[12px] font-normal text-black uppercase pb-3">
        reviews
      </p>
    </div>
  );
}

export default PortfolioNav;
