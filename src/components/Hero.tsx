import { HeroProps } from "../types";
import Image from "next/image";
import ButtonPrimary from "../components/ButtonPrimary";

const Hero: React.FC<HeroProps> = ({ data }) => {

  let { header, content, cta, src} = data;

  return (
    <div
      id="hero-container"
      className="flex flex-col lg:flex-row justify-between lg:pl-20 h-xl 2xl:h-xxl text-center lg:text-left"
    >
      <div className="w-full lg:w-2/4">
        <div className="flex flex-col justify-center h-full py-10 md:px-10 md:py-20 lg:p-8 2xl:p-40">
          <h2 className="font-header font-bold text-white text-5xl md:text-7xl pb-8 text-shadow">
            {header}
          </h2>
          <h4 className="font-content font-bold text-white text-xl md:text-3xl pb-7 md:pb-14 text-shadow">
            {content}
          </h4>
          <div className="">
            <ButtonPrimary slug={"/"} cta={cta} />
          </div>
        </div>
      </div>
      <div className="w-full lg:w-2/4 h-full relative">
        <Image src={src} layout="fill" objectFit="contain" className="" />
      </div>
    </div>
  );
};

export default Hero;
