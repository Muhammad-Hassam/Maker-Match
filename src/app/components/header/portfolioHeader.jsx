import React from "react";
import { Portfolio } from "@/assets/images";
import Image from "next/image";
import { PiUploadSimpleLight } from "react-icons/pi";
import { IoMdHeartEmpty } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import { Button } from "..";

function PortfolioHeader() {
  return (
    <div className="flex justify-between m-10">
      <div className="flex">
        <div className="mr-5">
          <Image src={Portfolio} alt="Portfolio Image" height={168} />
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <p className="font-['Cormorant_Garamond'] text-[32px] font-light text-black pb-1">
              Darrin Garret
            </p>
            <p className="font-['Inter'] text-[12px] font-normal text-black">
              Los Angeles, CA
            </p>
            <p className="font-['Inter'] text-[12px] font-normal text-black">
              ID Verified
            </p>
          </div>
          <div className="flex">
            <IoMdHeartEmpty className="text-[#766B5A] text-[18px] mr-3" />
            <AiOutlineMail className="text-[#766B5A] text-[18px] mr-3" />
            <PiUploadSimpleLight className="text-[#766B5A] text-[18px] mr-2" />
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <Button variant="filled" className="w-full">
          Hire
        </Button>
        <Button variant="outlined" className="w-full">
          Shedule a consultation
        </Button>
      </div>
    </div>
  );
}

export default PortfolioHeader;
