import { Grid, Box, Typography, useTheme } from "@mui/material";
import Title from "../../title";
import MainTable from "../../mainTable";
import TableButton from "../../common/buttons/TableButton";

const TopProducts = () => {
  const theme = useTheme();

  const topProductsHeader = [
    { id: "title", title: "عنوان" },
    { id: "monthSells", title: "فروش در ماه گذشته" },
    { id: "totalSells", title: "فروش کل" },
    { id: "status", title: "وضعیت" },
    { id: "manage", title: "مدیریت" },
  ];

  const topProductsBody = [
    {
      title: "فوم شستشوی صورت",
      monthSells: 89,
      totalSells: Number(1189).toLocaleString(),
      status: (
        <Typography variant="body2" color={theme.palette.success.main}>
          موجود
        </Typography>
      ),
      manage: <TableButton title="مدیریت" />,
    },
    {
      title: " ماسک خاک رس ",
      monthSells: 19,
      totalSells: Number(189).toLocaleString(),
      status: (
        <Typography variant="body2" color={theme.palette.error.main}>
          ناموجود
        </Typography>
      ),
      manage: <TableButton title="مدیریت" />,
    },
  ];

  return (
    <Grid item xs={12}>
      <Box
        className="default_card"
        sx={{ background: theme.palette.background.paper }}
      >
        <Title title="محصــولات پرفروش" />
        <MainTable header={topProductsHeader} tableItems={topProductsBody} />
      </Box>
    </Grid>
  );
};

export default TopProducts;
