import { GlobeAltIcon } from "@heroicons/react/24/outline";
import React from "react";

type Props = {
  className?: string;
  size?: "small" | "medium" | "large";
  color?: "white" | "blue";
};

export default function AcmeLogo({
  className,
  size = "small",
  color = "white",
}: Props) {
  return (
    <div
      className={`flex ${color==="white"?"text-white":"text-[#2e6eea]"} text-2xl md:text-3xl lg:text-5xl ${className}`}
    >
      <GlobeAltIcon className="w-6 md:w-8 lg:w-10" />
      Acme
    </div>
  );
}
