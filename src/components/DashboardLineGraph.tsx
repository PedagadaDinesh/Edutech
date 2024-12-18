import dynamic from "next/dynamic";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function DashboardLineGraph({
  series,
  categories,
  colors,
  labels,
  title,
  height,
}: {
  series?: any[];
  categories?: string[] | number[];
  colors?: string[];
  labels?: string[];
  title?: string;
  height?: string | number;
}) {
  return (
    <ApexCharts
      height={height}
      options={{
        title: {
          text: title,
          style: {
            fontWeight: "700",
            fontSize: "16px",
            color: "black",
          },
        },
        chart: {
          height: 350,
          type: "line",
          zoom: {
            enabled: false,
          },
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                position: "bottom",
                offsetX: -10,
                offsetY: 0,
              },
            },
          },
        ],
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },

        fill: {
          opacity: 1,
        },
        legend: {
          position: "bottom",
          // offsetX: 0,
          // offsetY: 50,
        },
        xaxis: {
          categories: categories,
        },

        colors: colors,
      }}
      series={series}
      type={"line"}
    />
  );
}
