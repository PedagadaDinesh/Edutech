import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import AppDrawer from "./AppDrawer";
import AppBar from "./AppBar";
// import { auth } from "@/app";
import { useRouter } from "next/router";
import ResponsiveAppDrawer from "./ResponsiveAppDrawer";
import { getFromLocalStorage } from "../../../utils";
import BottomNavigation from "./BottomNavigation";
// import { withProtectedRoute } from "@/hooks";

type Props = {
  title?: string;
  children?: any;
  description?: string;
  ogImage?: string;
};
const AdminLayout = ({
  title = "Welcome To Admin Panel",
  children = <></>,
  description,
  ogImage,
}: Props) => {
  const [isAppDrawerOpen, setIsAppDrawerOpen] = useState<boolean>(true);
  const [responsiveExpand, setResponsiveExpand] = useState<boolean>(false);

  const { push, asPath } = useRouter();
  let mounted = useRef<boolean>(false);
//   const user = auth?.currentUser;

  // console.log("user At Admin--", user);
  const accessToken = getFromLocalStorage("ACCESS_TOKEN");
  // console.log("local accessToken---", accessToken);

  useEffect(() => {
    // console.log("user at useEffect---", user);
    mounted.current = true;
    if (!accessToken) push("/");

    return () => {
      mounted.current = false;
    };
  }, [accessToken, asPath]);

  return (
    <>
      <Head>
        <title>Edutech</title>
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:image" content={ogImage || ""} />

        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className="relative w-full bg-gray-100 flex">
        <BottomNavigation
          responsiveExpand={responsiveExpand}
          setResponsiveExpand={setResponsiveExpand}
        />
        <div
          className={` hidden lg:block sticky top-0 overflow-y-scroll h-screen scroll-bar-none transition-all duration-300 ease-in-out ${
            isAppDrawerOpen ? "w-[18rem] bg-gray-800" : "w-16"
          }`}
        >
          <AppDrawer
            isAppDrawerOpen={isAppDrawerOpen}
            setIsAppDrawerOpen={setIsAppDrawerOpen}
          />
        </div>
        <div className="lg:hidden">
          <ResponsiveAppDrawer
            responsiveExpand={responsiveExpand}
            setResponsiveExpand={setResponsiveExpand}
          />
        </div>

        <section
          className={`h-screen delay-animation overflow-y-scroll scroll_bar-none md:custom-container ${
            isAppDrawerOpen
              ? "w-full lg:w-[calc(100%-15rem)]"
              : "w-full lg:w-[calc(100%-3.8rem)]"
          } `}
        >
          <AppBar
            setResponsiveExpand={setResponsiveExpand}
            isAppDrawerOpen={isAppDrawerOpen}
            setIsAppDrawerOpen={setIsAppDrawerOpen}
          />
          <div className={`pt-5 pb-20 md:py-8 lg:py-8`}>{children}</div>
        </section>
      </main>
    </>
  );
};

export default AdminLayout;
