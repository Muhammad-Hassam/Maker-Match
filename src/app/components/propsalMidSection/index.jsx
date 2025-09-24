"use client";
import { Burl } from "@/assets/images";
import Image from "next/image";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

const ProposalMidSection = () => {
  const [dropDown, setDropDown] = useState(false);

  return (
    <motion.div
      className={`w-[${
        dropDown ? "90%" : "50%"
      }] m-auto block md:flex items-center justify-center`}
      animate={{ width: dropDown ? "90%" : "50%" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <motion.div
        className="pr-0 md:pr-8 w-[100%] md:w-[50%]"
        animate={{ scale: dropDown ? 1.1 : 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <Image
          src={Burl}
          alt="Product Image"
          height={326}
          className="w-full rounded-xl"
        />
      </motion.div>
      <div className={`w-[100%] md:w-[50%]  md:pl-0 `}>
        <h1 className="font-['Cormorant_Garamond'] text-[32px] font-light pb-2 text-center md:text-left">
          Coffee Table
        </h1>

        <div
          className={`flex items-center pb-8 md:pb-3 ${
            dropDown ? "justify-between" : "justify-center md:justify-start"
          } text-[#78583C] 
  ${dropDown && " border-b-1"} border-b-[#78583C] w-full`}
        >
          <p className="font-['Inter'] text-[12px] font-normal uppercase pr-1 text-center md:text-left">
            view project details
          </p>
          <div
            onClick={() => setDropDown(!dropDown)}
            className="cursor-pointer"
          >
            {dropDown ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>
        </div>

        <AnimatePresence>
          {dropDown && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <div className="pt-9">
                <p className="text-[12px] font-['Inter'] uppercase text-[#6B6B6B] pb-1">
                  description
                </p>
                <p className="text-[14px] font-['Inter'] uppercase text-black">
                  Coffee Table, Burl Wood Veneer, Indoor, Round, Plinth, 40"W x
                  18"H
                </p>
              </div>

              <div className="pt-9">
                <p className="text-[12px] font-['Inter'] uppercase text-[#6B6B6B] pb-1">
                  budget
                </p>
                <p className="text-[14px] font-['Inter'] uppercase text-black">
                  $9000
                </p>
              </div>

              <div className="pt-9">
                <p className="text-[12px] font-['Inter'] uppercase text-[#6B6B6B] pb-1">
                  preferred maker location
                </p>
                <p className="text-[14px] font-['Inter'] uppercase text-black">
                  Within 50 miles of 94513
                </p>
              </div>

              <div className="pt-9">
                <p className="text-[12px] font-['Inter'] uppercase text-[#6B6B6B] pb-1">
                  Desired Completion Date
                </p>
                <p className="text-[14px] font-['Inter'] uppercase text-black">
                  June 15, 2025
                </p>
              </div>

              <div className="pt-9">
                <p className="text-[12px] font-['Inter'] uppercase text-[#6B6B6B] pb-1">
                  notes to maker (optional)
                </p>
                <p className="text-[14px] font-['Inter'] uppercase text-black">
                  I’m open to your material suggestions if something works
                  better.
                </p>
              </div>

              <div className="pt-9">
                <p className="text-[12px] font-['Inter'] uppercase text-[#6B6B6B] pb-1">
                  SUBMITTED
                </p>
                <p className="text-[14px] font-['Inter'] uppercase text-black">
                  Aug 25, 2026
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default ProposalMidSection;
