import DashboardLineGraph from "@/components/DashboardLineGraph";
import DashboardPieChart from "@/components/DashboardPieChart";
import DashboardUserCard from "@/components/DashboardUserCard";
import HomeRadialBar from "@/components/HomeRadialBar";
import { AdminLayout } from "@/layouts";
import { ChatOutlined, ForumOutlined, PersonOutlineOutlined } from "@mui/icons-material";
import { FaRegUser, FaTasks } from "react-icons/fa";
import { MdOutlineStarOutline } from "react-icons/md";
import { FaRegCircleCheck } from "react-icons/fa6";
import { IoLocationOutline, IoTimeOutline } from "react-icons/io5";
import { RiStarSmileLine } from "react-icons/ri";

const dashboard = () => {

  const Course_Card_Arr = [
    {
      id: "1",
      image: "/course.jpg",
      subject: "Trignometry",
      timing: "Start at Aug 5, 2023 10:00 AM",
      // route: `/panel/${role}/course/manage-course`,
    },
    {
      id: "2",
      image: "/course.jpg",
      subject: "Biology",
      timing: "Start at Aug 5, 2023 12:00 PM",
      // route: `/panel/${role}/course/manage-course`,
    },
    {
      id: "3",
      image: "/course.jpg",
      subject: "Chemistry",
      timing: "Start at Aug 5, 2023 03:00 PM",
      // route: `/panel/${role}/course/manage-course`,
    },
    {
      id: "4",
      image: "/course.jpg",
      subject: "Zoology",
      timing: "Start at Aug 5, 2023 04:00 PM",
      // route: `/panel/${role}/course/manage-course`,
    },
  ];

  const dashboardCardArr = [
    {
      _id: "1",
      percentage: "82%",
      title: "Avg Exam Score",
      img: "./exam.png",
    },
    {
      _id: "2",
      percentage: "12 Hours",
      title: "Total Time Spent",
      number: "63",
      img: "./time.png",
    },
    {
      _id: "3",
      percentage: "15 Exams",
      title: "Montly Streak",
      img: "./streaks.png",
    },
    {
      _id: "4",
      percentage: "#15",
      title: "Global Ranking",
      img: "./ranking.png",
    },
  ];

  const iconArray = [
    {
      icon: <RiStarSmileLine />,
      label: "Interested",
    },
    {
      icon: <MdOutlineStarOutline />,
      label: "Starred",
    },
    {
      icon: <FaRegCircleCheck />,
      label: "Joined",
    },
    {
      icon: <FaRegUser />,
      label: "Invited",
    },
  ];

  return (
    <AdminLayout>
      <div className="mx-2 md:mx-4 lg:mx-5 2xl:mx-6 flex flex-col gap-5">
        <div className="grid grid-cols-12 gap-5">
         <div className="bg-white col-span-8 p-6 rounded-xl shadow-xl flex flex-col gap-3">
          <h1 className="font-semibold text-lg">Welcome back, <span className="text-xl"> Felecia 👋🏻</span></h1>
          <p className="text-gray-600 text-sm">Your progress this week is Awesome. let's keep it up <br /> and get a lot of points reward!</p>
          <div className="grid grid-cols-3 gap-3 pt-2.5">
          <div className="flex gap-2 items-center bg-blue-100 rounded-lg p-3">
            <img src="./exam.png" alt="images" className="h-12 w-12" />
            <div className="flex flex-col">
                <h1 className="font-medium text-sm text-gray-600">Exam Score</h1>
                <p className=" font-semibold text-xl text-blue-500">82% </p>
            </div>
          </div>
          <div className="flex gap-2 items-center bg-purple-100 rounded-lg p-3">
            <img src="./time.png" alt="images" className="h-12 w-12" />
            <div className="flex flex-col">
                <h1 className="font-medium text-sm text-gray-600">Time Spent</h1>
                <p className=" text-xl text-blue-500 font-semibold">15 hours </p>
            </div>
          </div>
          <div className="flex gap-2 items-center bg-red-100 rounded-lg p-3">
            <img src="./ranking.png" alt="images" className="h-12 w-12" />
            <div className="flex flex-col">
                <h1 className="font-medium text-sm text-gray-600">Top Rankings</h1>
                <p className=" text-xl text-red-500 font-semibold">#15 </p>
            </div>
          </div>
          </div>
         </div>
         <div className="w-full col-span-12 md:col-span-4 flex bg-primary shadow-xl rounded-xl h-56 p-4 lg:p-5 items-center">
              <div className="w-[calc(100%-10rem)] md:w-[calc(100%-10rem)] 2xl:w-[calc(100%-13rem)] flex flex-col gap-5">
                <h2 className="font-bold text-lg 2xl:text-2xl text-white ">
                  In last 6 months 200 exams service registered
                </h2>
                <button className="2xl:px-4 py-2 px-3 2xl:py-2.5 font-semibold text-sm hover:bg-quinary common-transition rounded-lg w-fit text-white bg-purple-500">
                  View Details
                </button>
              </div>
              <div className="w-40 2xl:w-52 flex h-full justify-end items-end">
                <img src="./hand.png" alt="" className="w-full" />
              </div>
         </div>
        </div>
        <section className="grid grid-cols-3 gap-5">
        <div className="flex flex-col justify-center bg-secondary items-center shadow-lg rounded-xl">
             <div className="px-5 text-lg font-semibold">
              Total Average Score
            </div>
            <HomeRadialBar
              height="300"
              className="w-full"
              type="radialBar"
              radialLabel={["Total Exams", "Average Score"]}
              radialSeries={[
                100,        
                82 
              ]}
              colors={["#613d7c", "#62a8ea"]}
            />
          </div>
          <div className="flex flex-col bg-white shadow-xl rounded-2xl p-6 transition-all duration-300">
            {/* Global Ranking Section */}
            <div className="border-b border-dashed pb-4 border-gray-300 flex flex-col gap-2">
             <div className="flex items-center gap-3">
              <img src="./global.png" alt="" className="h-14 w-14" />
             <div className="flex flex-col gap-1">
             <h1 className="text-xl font-bold text-gray-800"> Global Ranking</h1>
              <p className="text-4xl font-bold text-blue-500 flex items-end gap-2 font-[sans-serif]">
                #15 
                <span className="text-sm text-gray-500 font-medium">of 23K learners</span>
              </p>
             </div>
             </div>
            </div>

            {/* Top Local Ranks Section */}
            <p className="py-3 text-lg font-semibold text-gray-600">🏆 Top Local Ranks</p>

            <div className="flex flex-col py-2 gap-4">
              {Array(3).fill("").map((_, idx) => (
                <div
                  key={idx}
                  className="flex gap-3 items-center py-2 px-4 bg-gray-100 rounded-lg hover:from-gray-200 hover:to-gray-300 transition-all duration-300"
                >
                  <img
                    src="./profile-4.avif"
                    alt="Profile"
                    className="h-12 w-12 rounded-full object-cover shadow-md border-2 border-gray-300"
                  />
                  <div>
                    <p className="text-md font-semibold text-gray-800">Brooklyn Simmons</p>
                    <p className="text-xs text-gray-500">Top Performer</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col bg-white rounded-lg shadow-md h-full">
        <img
          src="./workstation.jpg"
          alt=""
          className="w-fit  object-contain rounded-t-lg"
        />
        <div className="p-5 flex flex-col gap-4">
          <div className="flex gap-4 items-center">
            <div className="bg-pink-blue/10 text-pink-blue flex flex-col items-center rounded-md p-2">
              <p className="text-sm font-medium">Jan</p>
              <p className="text-md font-medium">24</p>
            </div>
            <div className="flex flex-col ">
              <p className="text-md font-medium">Students Meetup</p>
              <p className="text-sm text-primary-text opacity-50">
                The WordPress open source, free software project is the
                community behind the…
              </p>
            </div>
          </div>
          <hr />
          <div className="flex justify-evenly items-center">
            {iconArray.map((data, i) => (
              <div
                key={i}
                className={`flex flex-col items-center  cursor-pointer`}
              >
                <p className="text-lg">{data?.icon}</p>
                <p className={`text-sm `}>{data?.label}</p>
              </div>
            ))}
          </div>
          <hr />
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <IoTimeOutline className="text-2xl text-primary-text" />
              <p className="flex flex-col">
                <span className="text-sm text-primary-text">
                  Tuesday, 24 January, 10:20 -12:30pm
                </span>
                <span className="text-sm text-primary-text opacity-50">
                  After 1 Week
                </span>
              </p>
            </div>
            {/* <div className="flex gap-2 items-center">
              <IoLocationOutline className="text-2xl text-primary-text" />
              <p className="flex flex-col">
                <span className="text-sm text-primary-text">
                  The Rochard NYC
                </span>
                <span className="text-sm text-primary-text opacity-50">
                  1305 Lexington Ave, New York
                </span>
              </p>
            </div> */}
          </div>
        </div>
      </div>
        
        </section>
        <article className="gap-5 lg:grid grid-cols-11 flex flex-col">
          <aside className=" col-span-7 h-fit bg-white shadow-lg rounded-xl">
            <div className="px-5 pt-5 text-lg font-semibold">
              Monthly Streak Analytics in this year
            </div>
            <DashboardLineGraph
              categories={[
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ]}
              colors={["#62a8ea"]}
              height={400}
              series={[
                {
                  name: "Exams",
                  data: [10, 41, 25, 51, 39, 62, 29, 91, 14, 23, 67, 34],
                },
              ]}
            />
          </aside>

          <div className="w-full col-span-4 flex flex-col gap-5 bg-white rounded-xl px-5 pt-5 shadow-xl">
            <aside className="flex gap-4 flex-col panel-card h-fit">
              <div className="text-lg font-semibold">Total Time Spent</div>
              <div className="flex justify-center items-center py-3">
              <DashboardPieChart
                pieSeries={[100, 15]} // Default values: Male = 10, Female = 15
                pieLabel={["Total Time", "Time Spent"]}
              />
              </div>
            </aside>
            <aside>
              <div className="panel-card flex justify-between items-center">
                <div className="bg-purple-shade/80 p-3 rounded-xl">
                  <PersonOutlineOutlined className="text-white md:!h-12 md:!w-12 !h-10 !w-10" />
                </div>
                <span className="flex items-end flex-col gap-2">
                <p className="text-3xl font-semibold">15 Hours</p>
                  <p className="2xl:text-xl 2xl:font-semibold">
                   Time Spent
                  </p>
                </span>
              </div>
            </aside>
          </div>
        </article>


      </div>
    </AdminLayout>
  );
};

export default dashboard;
