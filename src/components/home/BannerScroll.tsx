import Image from "next/image";
import React from "react";
import { portal1 } from "../../../assets";

const ScrollBanner = () => {
  const numberOfItems = 10;

  const renderRollItems = () => {
    const items = [];

    for (let i = 0; i < numberOfItems; i++) {
      items.push(
        <div className="roll-item  py-4 md:py-8 px-8" key={i}>
          <div className="roll-title flex items-center">
            <h1 className="title">FULLSTACK DEVELOPER</h1>
            <div className="w-[35px] h-auto ml-6">
              <Image
                src={portal1}
                alt="bgCircule"
                sizes="100vw"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      );
    }

    return items;
  };
  return (
    <div className="scroll-banner py-[50px] md:py-[100px]">
      <div className="sc-roll-section">
        <div className="slide-scroll flex items-center">
          <div className="roll-box flex ">{renderRollItems()}</div>
          <div className="roll-box flex ">{renderRollItems()}</div>
        </div>
      </div>
      <div className="sc-roll-section-three">
        <div className="slide-scroll flex items-center">
          <div className="roll-box flex ">{renderRollItems()}</div>
          <div className="roll-box flex ">{renderRollItems()}</div>
        </div>
      </div>
    </div>
  );
};

export default ScrollBanner;
