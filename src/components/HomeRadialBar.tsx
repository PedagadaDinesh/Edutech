import dynamic from "next/dynamic";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

type Props = {
  type: "radialBar";
  height?: string;
  title?: string;
  radialSeries?: number[];
  radialLabel?: string[];
  colors?: string[];
  className?: string;
  totalReturn?: number | string;
};

export default function HomeRadialBar({
  radialSeries,
  radialLabel,
  title,
  totalReturn,
  colors,
  height,
}: Props) {
  return (
    <ApexCharts
      height={height}
      series={radialSeries}
      options={{
        labels: radialLabel,
        title: {
          style: {
            fontWeight: "700",
            fontSize: "16px",
            color: "black",
          },
          text: title,
        },

        chart: {
          height: 350,
          type: "radialBar",
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

        legend: {
          show: true,
          position: "bottom",
          horizontalAlign: "center",
          height: 40,
        },
        markers: {
          shape: 'circle',  // Only valid shapes
          // radius: 12,       // Set radius
          offsetX: 0,
          offsetY: 0,
          strokeWidth: 0,
        },
        fill: {
          type: "gradient",
          gradient: {
            gradientToColors: ["#613d7c", "#62a8ea"],
          },
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: "60%",
              dropShadow: {
                enabled: true,
                top: 0,
                left: 0,
                blur: 1,
                opacity: 0.5,
              },
            },
            dataLabels: {
              name: {
                fontSize: "22px",
              },
              value: {
                fontSize: "16px",
              },
              total: {
                show: true,
                label: "Total",
              },
            },
          },
        },
        colors: colors,
      }}
      type={"radialBar"}
    />
  );
}
