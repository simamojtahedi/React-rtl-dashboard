import { Grid, Box, useTheme, Typography } from "@mui/material";
import Title from "../../title";
import MainTable from "../../mainTable";

const LatestTransactions = () => {
  const theme = useTheme();

  const transactionsHeader = [
    { id: "date", title: "تاریــخ" },
    { id: "count", title: "تعداد فروش" },
    { id: "sellers", title: "فروشندگان برتر", isUser: true },
    { id: "gross_profit", title: "سود ناخالص" },
    { id: "tax", title: " مالیات" },
    { id: "net_profit", title: "سود خالص" },
  ];

  const transactionsBody = [
    {
      date: "1398/03/15",
      count: 824,
      sellers: [
        {
          name: "Amin",
          image:
            "https://images.healthshots.com/healthshots/en/uploads/2020/12/08182549/positive-person.jpg",
        },
        {
          name: "Ali",
          image:
            "https://images.healthshots.com/healthshots/en/uploads/2020/12/08182549/positive-person.jpg",
        },
      ],
      gross_profit: (
        <Typography variant="body2">
          <strong style={{ color: theme.palette.success.main }}>
            32,580+{" "}
          </strong>
          تومان
        </Typography>
      ),
      tax: (
        <Typography variant="body2">
          <strong style={{ color: theme.palette.error.main }}>32,580- </strong>{" "}
          تومان
        </Typography>
      ),
      net_profit: (
        <Typography variant="body2">
          <strong>32,580 </strong> تومان
        </Typography>
      ),
    },
    {
      date: "1398/03/14",
      count: 604,
      sellers: [
        {
          name: "Amin",
          image:
            "https://images.healthshots.com/healthshots/en/uploads/2020/12/08182549/positive-person.jpg",
        },
        {
          name: "Sima",
          image:
            "https://images.healthshots.com/healthshots/en/uploads/2020/12/08182549/positive-person.jpg",
        },
      ],
      gross_profit: (
        <Typography variant="body2">
          <strong style={{ color: theme.palette.success.main }}>
            32,580+{" "}
          </strong>
          تومان
        </Typography>
      ),
      tax: (
        <Typography variant="body2">
          <strong style={{ color: theme.palette.error.main }}>32,580- </strong>{" "}
          تومان
        </Typography>
      ),
      net_profit: (
        <Typography variant="body2">
          <strong>32,580 </strong> تومان
        </Typography>
      ),
    },
    {
      date: "1398/03/13",
      count: 729,
      sellers: [
        {
          name: "Amin",
          image:
            "https://images.healthshots.com/healthshots/en/uploads/2020/12/08182549/positive-person.jpg",
        },
        {
          name: "Sima",
          image:
            "https://images.healthshots.com/healthshots/en/uploads/2020/12/08182549/positive-person.jpg",
        },
        {
          name: "Ali",
          image:
            "https://images.healthshots.com/healthshots/en/uploads/2020/12/08182549/positive-person.jpg",
        },
      ],
      gross_profit: (
        <Typography variant="body2">
          <strong style={{ color: theme.palette.success.main }}>
            32,580+{" "}
          </strong>
          تومان
        </Typography>
      ),
      tax: (
        <Typography variant="body2">
          <strong style={{ color: theme.palette.error.main }}>32,580- </strong>{" "}
          تومان
        </Typography>
      ),
      net_profit: (
        <Typography variant="body2">
          <strong>32,580 </strong> تومان
        </Typography>
      ),
    },
    {
      date: "1398/03/12",
      count: 793,
      sellers: [
        {
          name: "Amin",
          image:
            "https://images.healthshots.com/healthshots/en/uploads/2020/12/08182549/positive-person.jpg",
        },
        {
          name: "Sima",
          image:
            "https://images.healthshots.com/healthshots/en/uploads/2020/12/08182549/positive-person.jpg",
        },
      ],
      gross_profit: (
        <Typography variant="body2">
          <strong style={{ color: theme.palette.success.main }}>
            32,580+{" "}
          </strong>
          تومان
        </Typography>
      ),
      tax: (
        <Typography variant="body2">
          <strong style={{ color: theme.palette.error.main }}>32,580- </strong>{" "}
          تومان
        </Typography>
      ),
      net_profit: (
        <Typography variant="body2">
          <strong>32,580 </strong> تومان
        </Typography>
      ),
    },
    {
      date: "1398/03/11",
      count: 1050,
      sellers: [
        {
          name: "Amin",
          image:
            "https://images.healthshots.com/healthshots/en/uploads/2020/12/08182549/positive-person.jpg",
        },
        {
          name: "Sima",
          image:
            "https://images.healthshots.com/healthshots/en/uploads/2020/12/08182549/positive-person.jpg",
        },
      ],
      gross_profit: (
        <Typography variant="body2">
          <strong style={{ color: theme.palette.success.main }}>
            32,580+{" "}
          </strong>
          تومان
        </Typography>
      ),
      tax: (
        <Typography variant="body2">
          <strong style={{ color: theme.palette.error.main }}>32,580- </strong>{" "}
          تومان
        </Typography>
      ),
      net_profit: (
        <Typography variant="body2">
          <strong>32,580 </strong> تومان
        </Typography>
      ),
    },
  ];

  return (
    <Grid item xs={12}>
      <Box
        className="default_card"
        sx={{ background: theme.palette.background.paper }}
      >
        <Title title="تراکــنش‌های اخیر" />
        <MainTable header={transactionsHeader} tableItems={transactionsBody} />
      </Box>
    </Grid>
  );
};

export default LatestTransactions;
