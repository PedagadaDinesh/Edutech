import dynamic from "next/dynamic";

const ReactApexChart: any = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
type Props = {
  pieLabel: string[];
  pieSeries: number[];
  title?: string;
  className?: string;
};
const DashboardPieChart = ({
  pieLabel,
  pieSeries,
  title,
  className,
}: Props) => {
  return (
    <ReactApexChart
      type="pie"
      height={280}
      series={pieSeries}
      options={{
        chart: {
          type: "pie",
        },
        legend: {
          position: "bottom",
        },
        colors: ["#613d7c", "#62a8ea"],
        labels: pieLabel,
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                height: 300,
              },
            },
          },
        ],
      }}
    />
  );
};

export default DashboardPieChart;
