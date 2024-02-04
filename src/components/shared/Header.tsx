"use client";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { Logo } from "../../../assets";
import Image from "next/image";
import { navbarItems } from "./setting";
import NavMobileSidebar from "./header/NavMobileSidebar";

const Header = () => {
  const pathname = usePathname();

  const [isActive, setIsActive] = useState(false);

  const activeLink = (path: string) => path === pathname;

  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <>
      <Navbar
        className="navbar-header bg-transparent sm:bg-bg-color-dark-1 py-6"
        position="static"
      >
        <NavbarBrand>
          <Link href={"/"} className="w-[56px] h-auto flex items-center gap-3">
            <Image
              src={Logo}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
              alt="Logo-dev"
            />
            <span className="text-xl font-bold text-bg-primary">
              {" "}
              NexGenDev{" "}
            </span>
          </Link>
        </NavbarBrand>
        <NavbarContent className="hidden lg:flex gap-4" justify="center">
          {navbarItems?.map((item, index) => {
            return (
              <NavbarItem key={`${index}-${item.title}`} className="mr-5">
                <Link
                  href={item.link}
                  className={`${
                    activeLink(item.link) ? "text-bg-primary" : ""
                  } text-sm xl:text-md navbar-item hover:text-bg-primary`}
                >
                  {item.title}
                </Link>
              </NavbarItem>
            );
          })}
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:block">
            <Button
              as={Link}
              className="buttonStyle"
              color="primary"
              href="#"
              variant="flat"
            >
              {"Lest's Talk"}
            </Button>
          </NavbarItem>
          <div
            onClick={() => {
              setIsActive(!isActive);
            }}
            className="button bg-bg-primary lg:hidden"
          >
            <div className={`burger ${isActive ? "burgerActive" : ""}`}></div>
          </div>
        </NavbarContent>
      </Navbar>

      {/* ============ MENU SIDERBAR ============= */}
      <NavMobileSidebar
        isActive={isActive}
        setIsActive={setIsActive}
        pathname={pathname}
        selectedIndicator={selectedIndicator}
        setSelectedIndicator={setSelectedIndicator}
        navbarItems={navbarItems}
      />
    </>
  );
};

export default Header;
