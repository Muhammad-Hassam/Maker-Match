"use client";
import { Burl } from "@/assets/images";
import Image from "next/image";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const ProposalMidSection = () => {
  const [dropDown, setDropDown] = useState(false);

  return (
    <div
      className={`w-[${
        dropDown ? "90%" : "50%"
      }] m-auto flex items-center justify-center`}
    >
      <div className="pr-8 w-[50%]">
        <Image
          src={Burl}
          alt="Product Image"
          height={326}
          className="w-full h-auto"
          objectFit="fill"
        />
      </div>
      <div className="w-[50%]">
        <h1 className="font-['Cormorant_Garamond'] text-[32px] font-light pb-2">
          Coffee Table
        </h1>
        <div
          className={`flex items-center ${
            dropDown && "justify-between"
          } text-[#78583C] 
        ${dropDown && " border-b-1"} border-b-[#78583C] w-full`}
        >
          <p className="font-['Inter'] text-[12px] font-normal uppercase pr-1 ">
            view project details
          </p>
          <div onClick={() => setDropDown(!dropDown)}>
            {dropDown ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>
        </div>
        {dropDown && (
          <div>
            <div className="pt-9">
              <p className="font-['Inter'] text-[12px] font-normal uppercase text-[#6B6B6B] pb-1">
                description
              </p>
              <p className="font-['Inter'] text-[14px] font-normal uppercase text-black">
                Coffee Table, Burl Wood Veneer, Indoor, Round, Plinth, 40"W x
                18"H
              </p>
            </div>
            <div className="pt-9">
              <p className="font-['Inter'] text-[12px] font-normal uppercase text-[#6B6B6B] pb-1">
                budget
              </p>
              <p className="font-['Inter'] text-[14px] font-normal uppercase text-black">
                $9000
              </p>
            </div>
            <div className="pt-9">
              <p className="font-['Inter'] text-[12px] font-normal uppercase text-[#6B6B6B] pb-1">
                preferred maker location
              </p>
              <p className="font-['Inter'] text-[14px] font-normal uppercase text-black">
                Within 50 miles of 94513
              </p>
            </div>
            <div className="pt-9">
              <p className="font-['Inter'] text-[12px] font-normal uppercase text-[#6B6B6B] pb-1">
                Desired Completion Date
              </p>
              <p className="font-['Inter'] text-[14px] font-normal uppercase text-black">
                June 15, 2025
              </p>
            </div>
            <div className="pt-9">
              <p className="font-['Inter'] text-[12px] font-normal uppercase text-[#6B6B6B] pb-1">
                notes to maker (optional)
              </p>
              <p className="font-['Inter'] text-[14px] font-normal uppercase text-black">
                I’m open to your material suggestions if something works better.
              </p>
            </div>
            <div className="pt-9">
              <p className="font-['Inter'] text-[12px] font-normal uppercase text-[#6B6B6B] pb-1">
                SUBMITTED
              </p>
              <p className="font-['Inter'] text-[14px] font-normal uppercase text-black">
                Aug 25, 2026
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProposalMidSection;
