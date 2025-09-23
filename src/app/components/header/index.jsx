import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { IoMdHeartEmpty } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import { Logo } from "@/assets/images";
import Image from "next/image";
import { Button } from "..";

function Header() {
  return (
    <div className="pt-5 px-7">
      <div className="flex justify-between">
        <div className="flex">
          <RxHamburgerMenu className="text-black text-[18px] mr-7" />
          <CiSearch className="text-black text-[18px]" />
        </div>
        <div>
          <Image src={Logo} alt="Logo" className="w-[137px] h-[72px]" />
        </div>
        <div className="flex">
          <IoMdHeartEmpty className="text-black text-[18px] mr-7 " />
          <AiOutlineMail className="text-black text-[18px]" />
        </div>
      </div>
      <div className="flex justify-between pt-3">
        <h3 className="font-['Cormorant_Garamond'] text-[24px] pt-4 pb-2 font-light">
          Commissions
        </h3>
        <Button variant="filled" className="rounded-[100px] w-[137px]">
          + NEW
        </Button>
      </div>
    </div>
  );
}

export default Header;
