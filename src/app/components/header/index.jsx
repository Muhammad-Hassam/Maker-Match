import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { IoMdHeartEmpty } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import { Logo, SMLogo } from "@/assets/images";
import Image from "next/image";
import { Button } from "..";

function Header({ button }) {
  return (
    <div className="pt-5 px-5 md:px-7">
      <div className="flex justify-between ">
        <div className="flex">
          <RxHamburgerMenu className="text-black text-[18px] mr-7" />
          <CiSearch className="text-black text-[18px]" />
        </div>
        <div>
          <Image
            src={Logo}
            alt="Logo"
            className="hidden md:block w-[137px] h-[72px]"
          />
          <Image
            src={SMLogo}
            alt="Logo"
            className="block md:hidden w-[33px] h-[30px] mb-3"
          />
        </div>
        <div className="flex">
          <IoMdHeartEmpty className="text-black text-[18px] mr-7 " />
          <AiOutlineMail className="text-black text-[18px]" />
        </div>
      </div>
      <div className="flex justify-between pt-3 items-center">
        <h3 className="font-['Cormorant_Garamond'] text-[24px] pt-4 pb-2 font-light">
          Commissions
        </h3>
        {button && (
          <Button
            variant="filled"
            className="rounded-[100px] w-[93px] md:w-[137px]"
          >
            + NEW
          </Button>
        )}
      </div>
    </div>
  );
}

export default Header;
