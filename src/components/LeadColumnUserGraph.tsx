import dynamic from "next/dynamic";
const ApexCharts: any = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function LeadColumnUserGraph({
  series,
  categories,
  colors,
  labels,
  title,
  barHeight,
}: {
  series?: any[];
  categories?: string[] | number[];
  colors?: string[];
  labels?: string[];
  title?: string;
  barHeight?: string | number;
}) {
  return (
    <ApexCharts
      height={barHeight}
      options={{
        title: {
          text: title,
          align: "center",
          style: {
            fontWeight: "700",
            fontSize: "16px",
            color: "black",
          },
        },
        chart: {
          type: "bar",
          height: 350,
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                height: 250,
              },
            },
          },
        ],
        xaxis: {
          categories: categories,
          position: "bottom",
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          crosshairs: {
            fill: {
              type: "gradient",
              gradient: {
                colorFrom: "#D8E3F0",
                colorTo: "#BED1E6",
                stops: [0, 100],
                opacityFrom: 0.4,
                opacityTo: 0.5,
              },
            },
          },
          tooltip: {
            enabled: true,
          },
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "55%",
            borderRadius: 10,
            borderRadiusApplication: "end",
            borderRadiusWhenStacked: "last",
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"],
        },
        fill: {
          opacity: 1,
        },
        legend: {
          position: "bottom",
          offsetX: 0,
        },

        colors: colors,
      }}
      series={series}
      type={"bar"}
    />
  );
}
