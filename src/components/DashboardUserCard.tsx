import { useRouter } from "next/router";

export default function DashboardUserCard({ curElm, imgClass }: any) {
  const { push, asPath } = useRouter();
  const role = asPath?.split("/")[2];
  return (
    <div onClick={() => push(curElm?.route)}
    className="bg-white rounded-md shadow-lg flex items-center p-2 2xl:p-3 xl:p-1 gap-3 hover:scale-105 duration-300 w-full border-2 solid-border border-purple-shade/20 cursor-pointer">
      <div className="">
        <div className="">
          <img
            src={curElm.image}
            alt="course image"
            className={`h-16 w-20 md:h-16 md:w-20 xl:h-16 xl:w-24 2xl:h-14 2xl:w-20 ${imgClass}`}
          />
        </div>
      </div>
      <div className="flex flex-col justify-start gap-1 w-full ">
        <h5 className="!font-medium text-md">{curElm.subject}</h5>
        <p className="text-sm text-black/60">{curElm.timing}</p>
      </div>
    </div>
  );
}