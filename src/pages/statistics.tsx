/* eslint-disable @next/next/no-img-element */
import { FaArrowTrendUp, FaRegUser } from "react-icons/fa6";
import { MdOutlineComputer } from "react-icons/md";
import { AdminLayout } from "@/layouts";
import { CiTimer } from "react-icons/ci";
import LeadColumnUserGraph from "@/components/LeadColumnUserGraph";


export default function AdminDashboardCard() {
  const cardArray = [
    {
      icon: <CiTimer />,
      title: "Time Spent",
      number: "15 Hours",
      iconClass: "bg-purple-500 text-white",
    },
    {
      icon: <FaArrowTrendUp />,
      title: "Exam Score",
      number: "82%",
      iconClass: "bg-red-500 text-white",
    },
    {
      icon: <MdOutlineComputer />,
      title: "Top Rankings",
      number: "#15",
      iconClass: "bg-blue-500 text-white",
    },
  ];

  const employeesCount = 50; // Replace this with actual count if needed

  const defaultData = {
    data: {
        roleWiseUsers: [
            { userRole: 'September', count: 70 },
            { userRole: 'November', count: 85 },
            { userRole: 'December', count: 82 }
        ]
    }
};

  return (
    <AdminLayout>
     <div className="flex flex-col gap-5 mx-2 md:mx-4 lg:mx-5 2xl:mx-6">
     <section className="grid grid-cols-12 gap-4">
        {/* Clients Card */}
        <div className="lg:col-span-3 md:col-span-6 col-span-ful bg-white p-6 rounded-xl shadow-xl relative">
          <div className="flex justify-between">
            <div className="flex flex-col gap-4">
              <p className="text-lg font-semibold text-primary-text">Time Spent</p>
              <div className="flex flex-col gap-2">
                <p className="text-3xl font-semibold">15 <span className="text-lg">hours</span></p> {/* Default data */}
                <p className="text-xs bg-gray-200 px-2 py-1 rounded-full">
                  Year of {new Date().getFullYear()}
                </p>
              </div>
            </div>
            <div className="absolute right-2 bottom-0">
              <img
                src="./abc.png"
                alt="Clients"
                className="w-fit lg:h-44 md:h-40 h-36"
              />
            </div>
          </div>
        </div>

        {/* Employees Card */}
        <div className="lg:col-span-3 md:col-span-6 col-span-full p-6 bg-white rounded-xl shadow-xl relative">
          <div className="flex justify-between">
            <div className="flex flex-col gap-4">
              <p className="text-lg font-semibold text-primary-text">
                Avg Score
              </p>
              <div className="flex flex-col gap-2">
                <p className="text-3xl font-semibold">82%</p>
                <p className="text-xs bg-gray-200 px-2 py-1 rounded-full">
                  Year of {new Date().getFullYear()}
                </p>
              </div>
            </div>
            <div className="absolute right-2 bottom-0">
              <img
                src="./def.png"
                alt="Employees"
                className="w-fit lg:h-44 md:h-40 h-36"
              />
            </div>
          </div>
        </div>

        {/* Transactions Card */}
        <div className="lg:col-span-6 col-span-full flex flex-col gap-2 p-6 shadow-xl bg-white rounded-xl">
          <p className="text-lg font-semibold text-primary-text">
            Progress
          </p>
          <p className="text-sm font-medium">
            Total 48.5% growth 😎
            <span className="text-primary-text font-normal"> this month</span>
          </p>
          <div className="flex justify-between items-center pt-2">
            {cardArray.map((data, i) => (
              <div
                key={i}
                className="flex gap-2 items-center md:flex-row flex-col"
              >
                <p
                  className={`${data.iconClass} p-2 rounded-md text-2xl shadow-md`}
                >
                  {data.icon}
                </p>
                <p className="flex flex-col items-center md:items-start">
                  <span className="text-sm text-primary-text">{data.title}</span>
                  <span className="text-md font-semibold">{data.number}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
     <section className="grid grid-cols-12">
     <article className="bg-white p-6 rounded-xl shadow-xl col-span-6">
          <div className="text-lg font-semibold">Exam Score Overview</div>
          <LeadColumnUserGraph
              barHeight={340}
              categories={defaultData.data.roleWiseUsers.map((data) => data.userRole)}
              series={[
                  {
                      name: "Score",
                      data: defaultData.data.roleWiseUsers.map((data) => data.count),
                  },
              ]}
              colors={["#62a8ea", "#613d7c"]}
          />
      </article>
     </section>

     </div>
    </AdminLayout>
  );
}
