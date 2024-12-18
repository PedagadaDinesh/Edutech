/* eslint-disable @next/next/no-img-element */
import { FaArrowTrendUp, FaRegUser } from "react-icons/fa6";
import { MdOutlineComputer } from "react-icons/md";
import { AdminLayout } from "@/layouts";

export default function AdminDashboardCard() {
  const cardArray = [
    {
      icon: <FaArrowTrendUp />,
      title: "Sales",
      number: "245k",
      iconClass: "bg-primary/80 text-white",
    },
    {
      icon: <FaRegUser />,
      title: "Customers",
      number: "245k",
      iconClass: "bg-secondary/80 text-white",
    },
    {
      icon: <MdOutlineComputer />,
      title: "Products",
      number: "245k",
      iconClass: "bg-pink-blue/80 text-white",
    },
  ];

  const employeesCount = 50; // Replace this with actual count if needed

  return (
    <AdminLayout>
      <section className="grid grid-cols-12 gap-4 mx-2 md:mx-4 lg:mx-5 2xl:mx-6">
        {/* Clients Card */}
        <div className="lg:col-span-3 md:col-span-6 col-span-full admin-card relative">
          <div className="flex justify-between">
            <div className="flex flex-col gap-4">
              <p className="text-lg font-semibold text-primary-text">Clients</p>
              <div className="flex flex-col gap-2">
                <p className="text-3xl font-semibold">120</p> {/* Default data */}
                <p className="text-xs text-primary bg-primary/5 px-2 py-1 rounded-full">
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
        <div className="lg:col-span-3 md:col-span-6 col-span-full admin-card relative">
          <div className="flex justify-between">
            <div className="flex flex-col gap-4">
              <p className="text-lg font-semibold text-primary-text">
                Employees
              </p>
              <div className="flex flex-col gap-2">
                <p className="text-3xl font-semibold">{employeesCount}</p>
                <p className="text-xs text-pink-blue bg-pink-blue/5 px-2 py-1 rounded-full">
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
        <div className="lg:col-span-6 col-span-full flex flex-col gap-2 admin-card">
          <p className="text-lg font-semibold text-primary-text">
            Transactions
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
    </AdminLayout>
  );
}
