import { AdminLayout } from "@/layouts";
import Link from "next/link";
import { MdPermContactCalendar } from "react-icons/md";

const Dashboard = () => {
  // const [contactData] = useDB<[]>(`contact`);
  return (
    <AdminLayout title="Edutech  | Dashboard">
      <section className="main-container">
        {/* <h1 className="text-3xl font-semibold pb-4 text-[#35477E]">
          Dashboard
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          <div className="bg-white p-4 flex gap-4 items-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-md">
            <span className="bg-secondary/5 text-secondary w-20 h-20 rounded-full grid place-items-center">
              <MdPermContactCalendar className="!text-4xl" />
            </span>
            <Link href="/admin/manage-contact">
              <div className="space-y-2">
                <h1 className="text-xl font-medium">Total Contact Requests</h1>
                <h1 className="text-4xl text-secondary font-medium">
                  {contactData?.length ? contactData?.length : 0}
                </h1>
              </div>
            </Link>
          </div>
        </div> */}
      </section>
    </AdminLayout>
  );
};

export default Dashboard;
