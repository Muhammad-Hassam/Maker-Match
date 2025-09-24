import React from "react";
import { Button } from "..";

function PortfolioFooter() {
  return (
    <div className="bg-[#F1EDE9] mx-5 py-13  text-center mb-12">
      <h2 className="font-['Cormorant_Garamond'] text-[24px] font-light ">
        Browse More Makers
      </h2>
      <p className=" font-['Inter'] text-[12px] font-normal pb-4 py-3 md:py-0">
        With a pro account, you can browse additional qualified makers, and send
        them requests for proposals.
      </p>
      <Button variant="outlined" className="w-[200px] mt-3">
        upgrade to pro
      </Button>
    </div>
  );
}

export default PortfolioFooter;
