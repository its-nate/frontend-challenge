import React from "react";
import Image from "next/image";
import ButtonPrimary from "../components/ButtonPrimary";

const Hero = (props) => {
  let { header, content, cta, src } = props.data;

  return (
    <div id="hero-container" className="flex flex-wrap justify-around pl-20 h-xl">
      <div className="w-2/4">
        <div className="flex flex-col justify-center h-full">
          <h2 className="font-header font-bold text-white text-7xl pb-8 text-shadow">
            {header}
          </h2>
          <h4 className="font-content font-bold text-white text-3xl pb-14 text-shadow">
            {content}
          </h4>
          <div className="">
            <ButtonPrimary slug={"/slug"} cta={cta} />
          </div>
        </div>
      </div>
      <div className="w-2/4 relative">
        <Image src={src} layout="fill" objectFit="contain" className="" />
      </div>
    </div>
  );
};

export default Hero;
