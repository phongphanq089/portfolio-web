import { menuSlide, scale, slide } from "@/settings/motion";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import Link from "next/link";
import { Curve } from "./Curve";
import typeMenuItems from "../../../../types";

interface propType {
  isActive: boolean;
  pathname: string;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  selectedIndicator: string;
  setSelectedIndicator: React.Dispatch<React.SetStateAction<string>>;
  navbarItems: typeMenuItems[];
}

const NavMobileSidebar = (props: propType) => {
  const {
    isActive,
    setIsActive,
    selectedIndicator,
    setSelectedIndicator,
    navbarItems,
    pathname,
  } = props;
  return (
    <>
      <AnimatePresence mode="wait">
        {isActive && (
          <motion.div
            variants={menuSlide}
            initial="initial"
            animate="enter"
            exit="exit"
            className="menu z-50"
          >
            <div
              onClick={() => {
                setIsActive(!isActive);
              }}
              className="button bg-bg-primary"
            >
              <div className={`burger ${isActive ? "burgerActive" : ""}`}></div>
            </div>
            <div className="body">
              <div
                onMouseLeave={() => {
                  setSelectedIndicator(pathname);
                }}
                className="nav"
              >
                <div className="header">
                  <p>Navigation</p>
                </div>

                {navbarItems.map((data, index) => {
                  return (
                    <motion.div
                      key={index}
                      className="link"
                      onMouseEnter={() => {
                        setSelectedIndicator(data.link);
                      }}
                      custom={index}
                      variants={slide}
                      initial="initial"
                      animate="enter"
                      exit="exit"
                    >
                      <motion.div
                        variants={scale}
                        animate={
                          selectedIndicator === data.link ? "open" : "closed"
                        }
                        className="indicator"
                      ></motion.div>

                      <Link href={data.link}>{data.title}</Link>
                    </motion.div>
                  );
                })}
              </div>

              <div className="footer">
                <a>Awwwards</a>

                <a>Instagram</a>

                <a>Dribble</a>

                <a>LinkedIn</a>
              </div>
            </div>
            <Curve />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavMobileSidebar;
