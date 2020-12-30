import { useState, useEffect} from "react";
import Image from "next/image";
import ButtonPrimary from "../components/ButtonPrimary";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}

const Hero = (props) => {
  let { header, content, cta, src } = props.data;

  const size = useWindowSize();

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
            <ButtonPrimary slug={"/slug"} cta={cta} />
          </div>
        </div>
      </div>
      <div className="w-full lg:w-2/4 h-full relative">
        {size.width >= 1024 ? (
          <Image src={src} layout="fill" objectFit="cover" className="" />
        ) : (
          <Image src={src} layout="fill" objectFit="contain" className="" />
        )}
      </div>
    </div>
  );
};

export default Hero;
