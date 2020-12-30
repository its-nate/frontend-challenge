import React from "react";
import Image from "next/image";
import ButtonPrimary from "../components/ButtonPrimary";

const Hero = (props) => {
  let { header, content, cta, src } = props.data;

  return (
    <div className="flex">
      <div>
        <h2 className="text-red-500">{header}</h2>
        <h4>{content}</h4>
        <ButtonPrimary slug={"/slug"} cta={cta} />
        <p>{src}</p>
      </div>
      <div className="">
        <Image src={src} width="792" height="373" />
      </div>
    </div>
  );
};

export default Hero;
