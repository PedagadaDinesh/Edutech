/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useState } from "react";
import {
  AiOutlineClose,
  AiOutlineFullscreen,
  AiOutlineFullscreenExit,
  AiOutlineMail,
  AiOutlineMenuFold,
} from "react-icons/ai";
import { Avatar } from "@mui/material";
import useMenuItems from "@/hooks/useMenuItems";
import Swal from "sweetalert2";
import { removeFromLocalStorage, toggleFullScreen } from "../../../utils";
import { HiOutlineClipboardList, HiOutlineDocumentText, HiOutlineQuestionMarkCircle, HiSearch } from "react-icons/hi";
import { MdModeEditOutline, MdOutlinePersonOutline } from "react-icons/md";
import { BiEditAlt } from "react-icons/bi";
import { IoPerson, IoSettings, IoSettingsOutline } from "react-icons/io5";
import { RiSettings4Fill } from "react-icons/ri";

type FlatArrayType = {
  groupTitle?: string;
  title?: string;
  icon: any;
  route?: string;
  submenu?: {
    title: string;
    route: string;
    icon: any;
  }[];
};

const AppBar = ({
  setResponsiveExpand,
  isAppDrawerOpen,
  setIsAppDrawerOpen,
}: {
  setResponsiveExpand: Dispatch<SetStateAction<boolean>>;
  setIsAppDrawerOpen: Dispatch<SetStateAction<boolean>>;
  isAppDrawerOpen: boolean;
}) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const menuItems = useMenuItems();
  const [searchTerm, setSearchTerm] = useState("");
  const { push } = useRouter();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    // Replace this with your actual search logic
    console.log("Search term:", searchTerm);
    // Push search term to a results page or handle in-app filtering
  };


  return (
    <nav className="mx-2 md:mx-4 lg:mx-5 2xl:mx-6 top-0 sticky z-[99]">
      <section className="bg-white rounded-md py-2 md:py-0 md:h-16 shadow-md mt-3">
        <div className="w-full flex justify-between items-center h-full px-4">
          {/* Left Section */}
          <div className="flex items-center gap-4">
          <div
            className="hidden lg:flex cursor-pointer items-center p-2 bg-primary border rounded-lg group hover:bg-white transition-all duration-200"
            onClick={() => setIsAppDrawerOpen((prev) => !prev)}
          >
            {!isAppDrawerOpen ? (
              <AiOutlineClose className="text-xl text-secondary group-hover:text-primary" />
            ) : (
              <AiOutlineMenuFold className="text-xl text-secondary group-hover:text-primary" />
            )}
          </div>
            {/* <a className="text-secondary text-2xl font-bold cursor-pointer hover:text-gray-600 transition-all duration-200">
              Dashboard
            </a> */}
          </div>




          {/* Right Section */}
          <div className="flex items-center border border-gray-300 rounded-xl px-2">
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search..."
                className="outline-none px-2 py-1.5 w-40 md:w-64 placeholder:font-[sans-serif]"
              />
              <button
                onClick={handleSearch}
                className="text-gray-500 hover:text-gray-700 transition"
              >
                <HiSearch className="text-xl" />
              </button>
            </div>
          <div className="flex items-center gap-4">
           <a href="/view-profile"> <IoSettingsOutline className="text-2xl"/></a>

            <div
            onClick={() => toggleFullScreen(isFullScreen, setIsFullScreen)}
            data-tip={
              isFullScreen ? "Toggle NormalScreen" : "Toggle FullScreen"
            }
            className="h-9 w-9 cursor-pointer text-primary flex items-center justify-center rounded-full"
          >
            {!isFullScreen ? (
              <AiOutlineFullscreen className="text-2xl" />
            ) : (
              <AiOutlineFullscreenExit className="text-2xl" />
            )}
          </div>
            <div className="dropdown dropdown-end hidden md:block">
              <div
                tabIndex={0}
                className="rounded-full cursor-pointer text-lg bg-gray-800 text-white grid place-items-center w-10 h-10 hover:opacity-90 transition-all duration-200"
              >
                A
              </div>
              <ProfileBox />
            </div>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default AppBar;

const ProfileBox = () => {
  const { push } = useRouter();
  const logoutSession = () => {
    removeFromLocalStorage("ACCESS_TOKEN");
    Swal.fire({
      title: "Success",
      text: "Logout Successfully",
      icon: "success",
    });
    push("/dashboard");
  };

  return (
    <div className="w-72 dropdown-content shadow-lg rounded-lg bg-white p-4 mt-6 border">
      {/* Profile Header */}
      <div className="flex items-center gap-3 border-b pb-3">
        <div className="rounded-full bg-gray-800 text-white w-12 h-12 grid place-items-center">
          A
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-800">Edutech</h2>
          <p className="text-sm text-gray-500">Edutech@gmail.com</p>
        </div>
      </div>


      <div className="flex flex-col gap-1 pt-2">
      <a href="/view-profile" className="flex items-center gap-3 py-2 px-2 cursor-pointer hover:bg-gray-100 rounded-md transition-all duration-200">
          <MdOutlinePersonOutline className="text-gray-800 text-2xl bg-gray-100 rounded-full p-2 h-10 w-10" />
          <span className="text-gray-700 font-medium">My Profile</span>
        </a>
      </div>

      

      {/* Logout Button */}
      <button
        onClick={logoutSession}
        className="w-full mt-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-all duration-200"
      >
        Log Out
      </button>
    </div>
  );
};
