import Image from "next/image";
import React from "react";
import { Border, bgCircule, bgShade, portal } from "../../../assets";
import { Button } from "@nextui-org/react";

const BannerHero = () => {
  return (
    <div className="container-xxl">
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-4 relative banner-herro">
        <Image
          src={bgShade}
          alt="bg-shade-hero"
          sizes="100vw"
          className="max-w-[350px] sm:max-w-[400px] lg:max-w-[900px] h-auto absolute top-0 left-0"
        />
        <div className="p-4 lg:mt-[60px]">
          <span className="text-lg font-semibold">
            {"Hello, ✌️ I'm NexGenDev"}
          </span>
          <h2 className="text-[45px] leading-[60px] lg:text-[60px] lg:leading-[80px]  2xl:text-[90px] 2xl:leading-[120px]">
            Independent User Experience
          </h2>
          <h2 className="text-[45px] leading-[60px] lg:text-[60px] lg:leading-[80px] 2xl:text-[90px] 2xl:leading-[120px] text-bg-primary">
            Art Director
          </h2>
          <div className="w-full mt-5">
            <Image
              src={Border}
              alt="Border-style"
              sizes="100vw"
              className="w-[300px] lg:w-full h-auto"
            />
          </div>
          <p className="my-5 text-lg">
            Work with brands and businesses from all around the world to create
            high quality design and engaging experiences.
          </p>
          <Button
            className="buttonStyle"
            color="primary"
            href="#"
            variant="flat"
          >
            {"Book a Call"}
          </Button>
        </div>
        <div className="p-4">
          <div className="w-[90%] sm:w-[60%] lg:w-[90%] relative lg:left-[-30px] mx-auto">
            <div className="relative pt-[120%] z-0">
              <Image
                src={"/image/banner-dev.png"}
                alt="Border-style"
                fill
                sizes="100vw"
                style={{
                  objectFit: "cover",
                }}
              />
              <div className="bg-orange-200 absolute h-[300px] w-[300px] lg:h-[400px] lg:w-[400px] 2xl:h-[500px] 2xl:w-[500px] top-[100px] left-1/2 translate-x-[-50%] z-[-1] rounded-full opacity-[0.8]"></div>
              <div className="cricle w-[100px] lg:w-[150px] absolute top-[70%]  md:top-[50%] xl:top-[70%] z-20 left-[80px]">
                <div className="w-full relative">
                  <Image
                    src={bgCircule}
                    alt="bgCircule"
                    sizes="100vw"
                    className="lg:w-full h-auto bg-rotate-360"
                  />
                  <div className="port-icon absolute block-center bg-bg-violet-1 rounded-full ">
                    <Image
                      src={portal}
                      alt="bgCircule"
                      sizes="100vw"
                      className="lg:w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
            <span className="designations">FULLSTACK DEVELOPER</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerHero;
