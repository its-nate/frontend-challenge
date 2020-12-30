import React from "react";
import Image from "next/image";
import ButtonPrimary from "../components/ButtonPrimary";

const Hero = (props) => {
  let { header, content, cta, src } = props.data;

  return (
    <div id="hero-container" className="flex flex-wrap justify-around pl-20">
      <div className="w-2/4">
        <div className="flex flex-col justify-center h-full">
          <h2 className="font-header font-bold text-white text-5xl pb-20">
            {header}
          </h2>
          <h4 className="font-content font-light text-white text-2xl pb-20">
            {content}
          </h4>
          <div className="">
            <ButtonPrimary slug={"/slug"} cta={cta} />
          </div>
        </div>
      </div>
      <div className="w-2/4 text-right">
        <Image src={src} width={573} height={767} />
      </div>
    </div>
  );
};

export default Hero;
