import React from "react";
import Image from "next/image";
import ButtonPrimary from "../components/ButtonPrimary";

const Hero = (props) => {
  let { header, content, cta, src } = props.data;

  return (
    <div className="flex flex-wrap justify-center container border-solid border-2 mx-auto mt-10 px-40">
      <div className="w-2/4">
        <div className="flex flex-col justify-center h-full">
          <h2 className="font-header font-bold text-blue-900 text-5xl pb-10">{header}</h2>
          <h4 className="font-content font-light text-blue-900 text-2xl">{content}</h4>
        </div>
      </div>
      <div className="w-2/4 text-center">
        <Image src={src} width={260} height={347} />
      </div>
      <div className="">
        <ButtonPrimary slug={"/slug"} cta={cta} />
      </div>
    </div>
  );
};

export default Hero;
