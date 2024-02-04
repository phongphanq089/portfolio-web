import Link from "next/link";
import typeMenuItems from "../../../../types";
import BoxIcon from "../BoxIcon";

const NavbarMobileBottom = (props: {
  activeLink: (path: string) => boolean;
  menu: typeMenuItems[];
}) => {
  const { activeLink, menu } = props;
  return (
    <nav className="navbar-mobile w-[97%] sm:w-[90%] z-50 block lg:hidden fixed bottom-4 left-1/2 translate-x-[-50%] py-2 sm:py-6 px-2 bg-filter rounded-full">
      <ul className="flex items-center px-3  justify-center sm:justify-center gap-6 md:gap-6 ">
        {menu?.map((item, index) => {
          return (
            <li key={`${item.title}-${index}`}>
              <Link
                href={item?.link}
                className={`flex items-center rounded-full gap-2 flex-row sm:flex-row ${
                  activeLink(item.link) ? "bg-rgba p-2" : " "
                }`}
              >
                {item.icon && (
                  <BoxIcon
                    icon={item.icon}
                    className={`fill-white h-5 w-5 sm:h-5 sm:w-5 md:w-8 md:h-8 `}
                  />
                )}
                {activeLink(item.link) ? (
                  <span
                    className={`text-sm md:text-lg nav-item text-bg-primary font-bold`}
                  >
                    {item?.title}
                  </span>
                ) : (
                  <span
                    className={`text-sm md:text-lg nav-item hidden sm:block `}
                  >
                    {item?.title}
                  </span>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavbarMobileBottom;
