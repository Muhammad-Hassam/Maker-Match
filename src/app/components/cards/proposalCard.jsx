import { Proposal1a, Proposal1b } from "@/assets/images";
import { colors } from "@/styles/colors";
import { BsArrowUpRight } from "react-icons/bs";
import { MdOutlineStar } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import Image from "next/image";
import React from "react";
import { Button } from "..";

function ProposalCard() {
  return (
    <div
      className={`flex h-[500px] p-[3%] justify-between mx-6 mb-6`}
      style={{
        background: colors.offWhite
      }}
    >
      <div className="flex">
        <div className="flex items-center">
          <p className="font-['Cormorant_Garamond'] text-[56px] font-light align-middle pr-6">
            02
          </p>
        </div>
        <div className="w-[580px] flex">
          <div className="w-1/2">
            <Image
              src={Proposal1a}
              alt="Product Image"
              className="w-full h-full"
            />
          </div>
          <div className="w-1/2 relative">
            <Image
              src={Proposal1b}
              alt="Product Image"
              className="w-full h-full"
            />
            <div className="absolute bottom-0 left-0 w-full h-[48px] bg-[#0000004D] flex items-center px-5">
              <p className="text-white text-[11px] font-['Inter'] font-normal pr-1">
                PORTFOLIO
              </p>
              <BsArrowUpRight className="text-white text-[11px]" />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between pl-8">
          <div>
            <p className="font-['Cormorant_Garamond'] text-[24px] font-light text-black pb-1">
              Emelie Abrahamsson
            </p>
            <p className="font-['Inter'] text-[12px] font-normal text-black">
              Los Angeles, CA
            </p>
            <div>
              <p className="font-['Inter'] text-[12px] font-normal text-[#78583C] pt-10 pb-1">
                view Profile
              </p>
              <p className="font-['Inter'] text-[12px] font-normal text-[#78583C]">
                schedule a consultation
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex items-center">
              <MdOutlineStar className="text-[#DEC8AB] text-[22px] mr-1.5" />
              <p className="font-['Inter'] text-[11px] font-normal text-black pt-0.5">
                4.8 (16)
              </p>
            </div>
            <div className="flex gap-4 ml-6">
              <IoMdHeartEmpty className="text-[#766B5A] text-[17px] mr-2" />
              <AiOutlineMail className="text-[#766B5A] text-[17px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="border-l-2 border-l-[#E2DCD4] flex flex-col justify-between w-[22%] px-[3%]">
        <div>
          <p className="font-['Cormorant_Garamond'] text-[24px] font-light text-black">
            $9000
          </p>
          <p className="font-['Inter'] text-[11px] font-normal text-black uppercase">
            proposal Total
          </p>
        </div>
        <div>
          <div className="flex flex-col space-y-4">
            <Button variant="outlined" className=" w-full">
              Proposal Details
            </Button>
            <Button variant="filled" className=" w-full">
              Hire
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProposalCard;
