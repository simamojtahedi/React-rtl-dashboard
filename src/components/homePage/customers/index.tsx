import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { BiSolidUpArrow } from "react-icons/bi";
import { Grid, Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Title from "../../title";

const Customers = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [state, setState] = useState<{
    series: ApexAxisChartSeries | ApexNonAxisChartSeries | undefined;
    options: object;
  }>({
    series: [],
    options: {},
  });

  useEffect(() => {
    setState({
      series: [
        {
          name: "مشتریان",
          data: [14, 30, 13, 40, 27, 40, 18],
        },
      ],
      options: {
        chart: {
          type: "area",
          fontFamily: "iran-sans",
          zoom: {
            enabled: true,
          },
          toolbar: {
            show: false,
          },
          offsetY: -30,
          parentHeightOffset: 0,
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
          width: 1.5,
        },
        grid: {
          show: false,
        },
        xaxis: {
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          labels: {
            show: false,
          },
        },
        yaxis: {
          labels: {
            show: false,
          },
        },
      },
    });
  }, []);

  return (
    <Grid item xs={12} md={6} pl={isMobile ? 0 : 1}>
      <Box
        className="default_card"
        sx={{ background: theme.palette.background.paper }}
      >
        <Title title="کل مشتــریان" />
        <Box id="chart">
          <ReactApexChart
            options={state.options}
            series={state.series}
            type="area"
            height={80}
          />
        </Box>
        <Box
          px={1}
          mt={isMobile ? 0 : -4}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography align="center" variant="h6" sx={{ fontWeight: "bold" }}>
            129
          </Typography>
          <Typography
            align="center"
            variant="caption"
            display="flex"
            alignItems="center"
          >
            <BiSolidUpArrow
              size={12}
              color={theme.palette.success.main}
              style={{ marginLeft: 3 }}
            />
            23% افزایش در هفته پیش
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
};

export default Customers;
