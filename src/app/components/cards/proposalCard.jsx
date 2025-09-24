import { colors } from "@/styles/colors";
import { BsArrowUpRight } from "react-icons/bs";
import { MdOutlineStar } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import Image from "next/image";
import React from "react";
import { Button } from "..";

function ProposalCard({ data, onOpenModal }) {
  return (
    <div
      className={`block lg:flex lg:h-[500px] p-[3%] justify-between lg:mx-6 mb-7 bg-[#fdfcfb]`}
    >
      <div className="block lg:flex">
        <div className="hidden lg:flex items-center">
          <p className="font-['Cormorant_Garamond'] text-[56px] font-light align-middle pr-6">
            02
          </p>
        </div>
        <div className="w-full lg:w-[580px] flex relative">
          <div
            className="absolute top-0 left-0 h-[75px] w-[75px] lg:hidden flex justify-center items-center"
            style={{
              background: colors.offWhite
            }}
          >
            <p className="text-black font-['Cormorant_Garamond'] text-[46px] font-light">
              02
            </p>
          </div>
          <div className="w-1/2">
            <Image
              src={data?.image1}
              alt="Product Image"
              className="w-full h-full"
            />
          </div>

          <div className="w-1/2 relative cursor-pointer" onClick={onOpenModal}>
            <Image
              src={data?.image2}
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

        <div className="block lg:flex lg:flex-col justify-between lg:pl-8">
          <div>
            <p className="font-['Cormorant_Garamond'] text-[24px] font-light text-black pb-1">
              {data?.name}
            </p>
            <p className="font-['Inter'] text-[12px] font-normal text-black">
              Los Angeles, CA
            </p>
            <div className="hidden lg:block ">
              <p className="font-['Inter'] text-[12px] font-normal text-[#78583C] pt-10 pb-1">
                view Profile
              </p>
              <p className="font-['Inter'] text-[12px] font-normal text-[#78583C]">
                schedule a consultation
              </p>
            </div>
          </div>
          <div className="items-center hidden lg:flex">
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
      <div className="lg:border-l-2 lg:border-l-[#E2DCD4] block lg:flex lg:flex-col justify-between w-full lg:w-[22%] lg:px-[3%]">
        <div className=" mb-4 lg:pb-0">
          <p className="font-['Cormorant_Garamond'] text-[24px] font-light text-black">
            $9000
          </p>
          <p className="font-['Inter'] text-[11px] font-normal text-black uppercase">
            proposal Total
          </p>
        </div>
        <div>
          <div className="block lg:flex lg:flex-col space-y-4">
            <Button variant="outlined" className="w-full">
              Proposal Details
            </Button>
            <Button variant="filled" className="w-full">
              Hire
            </Button>
          </div>
        </div>
      </div>
      <div className="lg:hidden block mt-3 mb-4">
        <p className="font-['Inter'] text-[12px] font-normal text-[#78583C]  pb-1">
          view Profile
        </p>
        <p className="font-['Inter'] text-[12px] font-normal text-[#78583C]">
          schedule a consultation
        </p>
      </div>
      <div className="items-center lg:hidden flex justify-between pb-3">
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
  );
}

export default ProposalCard;
