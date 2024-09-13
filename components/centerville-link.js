"use client"

import Link from "next/link";
import { useMemo } from "react";

const CentervilleLink = ({
  cityName,
  propBackgroundImage,
  propPadding,
  propBoxSizing,
  href,
  objectFit
}) => {
  const card11Style = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
      padding: propPadding,
      boxSizing: propBoxSizing,
      objectFit:objectFit
    };
  }, [propBackgroundImage, propPadding, propBoxSizing,objectFit]);

  return (
    <Link href={href} 
      className="[text-decoration:none] object-center flex-1 rounded-lg h-[241px] hover:opacity-80 flex flex-row items-start justify-start relative bg-[url('/card-1@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-5xl text-black/90 font-body-regular-600 md:flex-[unset] md:self-stretch"
      style={card11Style }
    >
      <div className="my-0 mx-[!important] absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[11px] z-[0]">
        <div className="relative leading-[32px] font-semibold backdrop-blur-sm bg-whitesmoke-200/20 px-2 py-1">{cityName}</div>
        <div className="relative text-base leading-[24px] text-center ">
          
        </div>
      </div>
    </Link>
  );
};

export default CentervilleLink;
