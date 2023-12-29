import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import Title from "../../title";

const SalesNetworks = () => {
  const theme = useTheme();

  const [state, setState] = useState<{
    series: ApexAxisChartSeries | ApexNonAxisChartSeries | undefined;
    options: object;
  }>({
    series: [],
    options: {},
  });
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    setState({
      series: [
        {
          name: "اینستاگرام",
          data: [44, 55, 57, 56, 61, 58],
        },
        {
          name: "سایت",
          data: [76, 85, 101, 98, 87, 105],
        },
      ],
      options: {
        chart: {
          type: "bar",
          fontFamily: "iran-sans",
          zoom: {
            enabled: true,
          },
          toolbar: {
            tools: {
              download: false,
              zoom: true,
              zoomin: true,
              zoomout: true,
              pan: true,
              reset: false,
            },
          },
        },
        colors: [theme.palette.primary.main, theme.palette.secondary.main],
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "35%",
            borderRadius: 4,
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
        legend: {
          position: "bottom",
          fontWeight: 900,
          labels: {
            colors:
              theme.palette.mode === "dark"
                ? theme.palette.common.white
                : theme.palette.common.black,
          },
          markers: {
            width: 9,
            height: 9,
            radius: 50,
            offsetX: 3,
          },
        },
        grid: {
          borderColor: theme.palette.grey[100],
        },
        xaxis: {
          categories: [
            "فروردین",
            "اردیبهشت",
            "خرداد",
            "تیر",
            "مرداد",
            "شهریور",
          ],
          labels: {
            rotate: 0,
            style: {
              fontSize: isMobile ? "9px" : "12px",
              fontWeight: 700,
              colors:
                theme.palette.mode === "dark"
                  ? theme.palette.common.white
                  : theme.palette.common.black,
            },
          },
        },
        yaxis: {
          labels: {
            show: true,
            align: "left",
            style: {
              fontSize: 12,
              fontWeight: 900,
            },
          },
        },
        fill: {
          opacity: 1,
        },
      },
    });
  }, [theme.palette.mode]);

  return (
    <Box
      className="default_card"
      sx={{ background: theme.palette.background.paper }}
    >
      <Title title="شبــکه‌های فروش" />
      <div id="chart">
        <ReactApexChart
          //@ts-ignore
          options={state.options}
          series={state.series}
          type="bar"
          height={275}
        />
      </div>
    </Box>
  );
};

export default SalesNetworks;
