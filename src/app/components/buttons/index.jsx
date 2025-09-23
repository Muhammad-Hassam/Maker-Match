import React from "react";
import clsx from "clsx";

export default function Button({
  children,
  variant = "filled",
  className = "",
  ...props
}) {
  return (
    <button
      className={clsx(
        "h-[48px] px-4 py-2 font-['Inter'] font-light uppercase text-sm transition-colors duration-200 text-black border border-[#DEC8AB]",
        variant === "filled"
          ? "bg-[#DEC8AB]  hover:bg-white"
          : " text-black hover:bg-[#DEC8AB] ",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
