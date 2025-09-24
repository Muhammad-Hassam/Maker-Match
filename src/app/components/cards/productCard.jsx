"use client";
import React from "react";
import { ProductImage } from "@/assets/images";
import Image from "next/image";
import { colors } from "@/styles/colors";
import { useRouter } from "next/navigation";

function ProductCard({ data }) {
  const router = useRouter();

  return (
    <div
      className="w-[94%] sm:w-[94%] md:w-[48%] xl:w-[23%] mx-[3%] sm:mx-[1%] mt-[6%] md:mt-[2%] cursor-pointer "
      onClick={() => router.push("/portfolio")}
    >
      <div className="w-full relative bg-[#FDF8F8]">
        <Image
          src={data?.image}
          alt="Product Image"
          height={338}
          className="w-full h-auto"
        />
        {data?.bids && (
          <div className="absolute top-0 left-0 w-full h-[27px] bg-[#7F9869] flex items-center  px-5">
            <p className=" text-center text-white text-[11px] font-['Inter'] font-normal pr-1 uppercase w-full ">
              4 new Bids
            </p>
          </div>
        )}
      </div>
      <div className="bg-white pl-4 pb-2">
        <h3 className="font-['Cormorant_Garamond'] text-[18px] pt-4 pb-2">
          {data?.name}
        </h3>
        <p
          className="font-['Inter'] text-[11px]  pb-5"
          style={{ color: colors.lightblack }}
        >
          {data?.variation}
        </p>
        <p
          className="font-['Inter'] text-[11px] text"
          style={{ color: colors.lightgray }}
        >
          {data?.time}
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
