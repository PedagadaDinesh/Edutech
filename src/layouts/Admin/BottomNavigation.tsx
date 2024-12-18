import {
    AiFillHome,
    AiOutlineHome,
    AiOutlineMenuFold,
    AiOutlineSetting,
    AiTwotoneSetting,
  } from "react-icons/ai";
  import { IoNotificationsOutline, IoNotificationsSharp } from "react-icons/io5";
  import { MdManageAccounts, MdOutlineManageAccounts } from "react-icons/md";
  import { Dispatch, SetStateAction } from "react";
  import { BsDoorClosed } from "react-icons/bs";
  import { useRouter } from "next/router";
  
  const BottomNavigation = ({
    responsiveExpand,
    setResponsiveExpand,
  }: {
    responsiveExpand: boolean;
    setResponsiveExpand: Dispatch<SetStateAction<boolean>>;
  }) => {
    const { asPath, push } = useRouter();
    const handleOperate = (type: string, path: string) => {
      if (type === "Menus") return setResponsiveExpand((prev) => !prev);
      path && push(path);
    };
    const NAVIGATION_MENUS = [
      {
        icon:
          asPath === "/admin/settings/profile" ? (
            <MdManageAccounts className="text-quinary" />
          ) : (
            <MdOutlineManageAccounts />
          ),
        path: "/admin/settings/profile",
        class: "text-2xl",
        label: "Profile",
      },
      {
        icon: responsiveExpand ? (
          <BsDoorClosed className="text-quinary" />
        ) : (
          <AiOutlineMenuFold />
        ),
        path: "",
        class: "text-2xl",
        label: "Menus",
      },
      {
        icon: asPath === "/admin" ? <AiFillHome /> : <AiOutlineHome />,
        path: "/admin",
        class: `text-2xl ${asPath === "/admin" ? "text-quinary" : ""}`,
        label: "Home",
      },
      {
        icon:
          asPath === "/admin/notifications" ? (
            <IoNotificationsSharp />
          ) : (
            <IoNotificationsOutline />
          ),
        path: "/admin/notifications",
        class: `text-2xl ${
          asPath === "/admin/notifications" ? "text-quinary" : ""
        }`,
        label: "Notifications",
      },
      {
        icon:
          asPath === "/admin/settings/profile" ? (
            <AiTwotoneSetting className="text-quinary" />
          ) : (
            <AiOutlineSetting />
          ),
        path: "/admin/settings/profile",
        class: "text-2xl",
        label: "Settings",
      },
    ];
  
    return (
      <section className="fixed md:hidden bottom-0 left-0 right-0 z-[999] w-full h-14 bg-white shadow-[-7.829px_11.607px_20px_0px_rgba(144,143,160,0.09)]">
        <div className="w-full h-full main-container grid grid-cols-5 items-center">
          {NAVIGATION_MENUS.map((_, i) => (
            <div
              onClick={() => handleOperate(_.label, _.path)}
              className={`${_.class} flex items-center cursor-pointer flex-col w-full`}
              key={i}
            >
              {_.icon}
              <small className="text-[9px] font-extralight leading-3">
                {_.label}
              </small>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default BottomNavigation;
  