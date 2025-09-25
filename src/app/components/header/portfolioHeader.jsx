import React from "react";
import { Portfolio } from "@/assets/images";
import Image from "next/image";
import { PiUploadSimpleLight } from "react-icons/pi";
import { IoMdHeartEmpty } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import { Button } from "..";
import { LiaCheckCircleSolid } from "react-icons/lia";
import { GiCancel } from "react-icons/gi";

function PortfolioHeader({ onClose }) {
  return (
    <div className="block md:flex justify-between m-2 md:m-10 relative">
      <div className="absolute right-0 md:hidden" onClick={() => onClose()}>
        <GiCancel size={18} color="#766B5A" />
      </div>
      <div className="flex">
        <div className="mr-5">
          <Image src={Portfolio} alt="Portfolio Image" height={168} />
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <p className="font-['Cormorant_Garamond'] text-[32px] font-light text-black line-height: 1">
              Darrin Garret
            </p>
            <p className="font-['Inter'] text-[12px] font-normal text-black ">
              Los Angeles, CA
            </p>
            <div className="flex mt-2">
              <LiaCheckCircleSolid size={18} color="#766B5A" />
              <p className="font-['Inter'] text-[12px] font-normal text-black pl-1 uppercase">
                ID Verified
              </p>
            </div>
          </div>
          <div className="flex">
            <AiOutlineMail className="text-[#766B5A] text-[20px] mr-5" />
            <IoMdHeartEmpty className="text-[#766B5A] text-[20px] mr-5" />
            <PiUploadSimpleLight className="text-[#766B5A] text-[20px] mr-2" />
          </div>
        </div>
      </div>
      <div className="mt-7 md:mt-0 flex flex-col space-y-4">
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
