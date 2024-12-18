import { Dispatch, SetStateAction, useState } from "react";
import { IoChevronForwardOutline } from "react-icons/io5";
import { useRouter } from "next/router";
import useMenuItems from "@/hooks/useMenuItems";
import Collapse from "@/components/Collapse";
import { SiGooglescholar } from "react-icons/si";
import Tooltip from '@mui/material/Tooltip';

// const Tooltip = dynamic(() => import("react-tooltip").then((mod) => mod.Tooltip), {
//   ssr: false,
// });

type MenuItemsType = {
  haveGroup?: boolean;
  title?: string;
  data: {
    title: string;
    route?: string;
    icon?: any;
    submenu?: {
      title: string;
      route: string;
    }[];
  }[];
};

const AppDrawer = ({
  isAppDrawerOpen,
  setIsAppDrawerOpen,
}: {
  isAppDrawerOpen: boolean;
  setIsAppDrawerOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [open, setOpen] = useState("");
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const menuItems = useMenuItems();
  const { push, asPath } = useRouter();
  const router = useRouter();
  const currentPath = router.pathname;

  const handleMatchOpen = (title: string, route?: string, submenu?: any[]) => {
    if (!submenu) {
      setSelectedItem(title);
    }

    if (!isAppDrawerOpen && submenu) {
      setIsAppDrawerOpen(true);
      setOpen(title);
      return;
    }

    if (route) {
      push(route);
    } else {
      setOpen((prev) => (prev === title ? "" : title));
    }
  };

  return (
    <div className="flex flex-col gap-2 pb-6 bg-primary min-h-screen text-white border-r border-gray-400">
      {/* Header */}
      <div
        className={`${
          isAppDrawerOpen ? "px-6 py-[0.2rem]" : "py-2 px-3.5"
        } relative flex w-full border-b`}
      >
        <div className="flex gap-3 py-[1.2rem] w-full text-secondary">
          <SiGooglescholar className="h-8 w-8" />
          <h1 className={`font-semibold text-2xl ${isAppDrawerOpen ? "" : "hidden"}`}>
            Edutech
          </h1>
        </div>
      </div>

      {/* Menu */}
      <div className={`w-full flex flex-col mt-5 gap-6 ${!isAppDrawerOpen ? "pl-1" : "pl-5"}`}>
        {menuItems?.map((groupData: MenuItemsType, ind: number) => (
          <div key={ind} className="flex flex-col !gap-4">
            {isAppDrawerOpen && groupData?.haveGroup ? (
              <div
                className={`${
                  isAppDrawerOpen ? "px-3" : ""
                } text-[11px] font-[Poppins] font-thin uppercase`}
              >
                {groupData?.title}
              </div>
            ) : null}
            <div className={`w-full flex flex-col gap-2 ${isAppDrawerOpen ? "pr-5" : "pr-1"}`}>
              {groupData?.data?.map((menuItem, index: number) => (
                <div className="w-full" key={index * 2}>
                  {/* Menu Item */}
                  <div
                    onClick={() => handleMatchOpen(menuItem?.title, menuItem?.route, menuItem?.submenu)}
                    className={`w-full relative font-medium px-2 group hover:bg-white hover:text-primary flex items-center justify-between py-2.5 cursor-pointer rounded-xl ${
                      selectedItem === menuItem?.title || open === menuItem?.title || currentPath === menuItem?.route
                        ? "bg-white text-primary"
                        : "text-secondary"
                    } ${isAppDrawerOpen ? "pr-2" : ""}`}
                  >
                    {/* Icon with Tooltip */}
                    <div
                      data-tooltip-id={`tooltip-${index}`}
                      className={`w-full flex items-center gap-4 ${
                        !isAppDrawerOpen ? "justify-center" : ""
                      }`}
                    >
                      <div
                          className={`relative ${
                            selectedItem === menuItem?.title || open === menuItem?.title || currentPath === menuItem?.route
                              ? "text-2xl flex items-center justify-center text-primary"
                              : "text-2xl"
                          }`}
                        >
                          <Tooltip title={menuItem?.title} placement="left" className="" arrow>
                            <div
                              className={`relative ${
                                selectedItem === menuItem?.title || open === menuItem?.title || currentPath === menuItem?.route
                                  ? "text-2xl flex items-center justify-center text-primary"
                                  : "text-2xl"
                              }`}
                            >
                              {menuItem?.icon}
                            </div>
                          </Tooltip>
                        </div>

                      {/* Title */}
                      {isAppDrawerOpen ? (
                        <div className="text-md font-semibold">{menuItem?.title}</div>
                      ) : null}
                    </div>

                    {/* Chevron Icon for Submenu */}
                    {isAppDrawerOpen && menuItem?.submenu ? (
                      <IoChevronForwardOutline
                        className={`${
                          open === menuItem?.title ? "rotate-90" : ""
                        } common-transition z-20`}
                      />
                    ) : null}
                  </div>

                  {/* Submenu */}
                  {menuItem?.submenu && isAppDrawerOpen ? (
                    <div
                      className={`w-full flex flex-col ${
                        open === menuItem?.title ? "gap-1 py-2" : ""
                      }`}
                    >
                      {menuItem?.submenu?.map((submenuItem, x: number) => (
                        <Collapse open={open === menuItem?.title} key={x}>
                          <div
                            onClick={() => {
                              setSelectedItem(`${menuItem.title}-${submenuItem.title}`);
                              setOpen(menuItem.title);
                              push(submenuItem?.route);
                            }}
                            className={`w-full ripple flex items-center hover:bg-white hover:text-primary gap-3 py-2 text-sm rounded-lg cursor-pointer px-11 ${
                              selectedItem === `${menuItem.title}-${submenuItem.title}`
                                ? "bg-white text-primary"
                                : "text-secondary"
                            }`}
                          >
                            <div className="font-semibold text:secondary hover:text-primary">
                              {submenuItem?.title}
                            </div>
                          </div>
                        </Collapse>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppDrawer;
