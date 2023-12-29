import { Grid, Box, Typography, useTheme } from "@mui/material";
import Title from "../../title";
import MainTable from "../../mainTable";
import TableButton from "../../common/buttons/TableButton";

const Campaigns = () => {
  const theme = useTheme();

  const campaignsHeader = [
    { id: "title", title: "عنوان" },
    { id: "result", title: "اثربخشی" },
    { id: "status", title: "وضعیت" },
    { id: "manage", title: "مدیریت" },
  ];

  const campaignsBody = [
    {
      title: "لورم ایپسوم متن ساختگی",
      result: (
        <Typography
          variant="body2"
          sx={{
            fontWeight: 700,
            color: theme.palette.success.main,
          }}
        >
          28.5%
        </Typography>
      ),
      status: (
        <Typography
          variant="body2"
          sx={{
            color: theme.palette.success.main,
          }}
        >
          فعال
        </Typography>
      ),
      manage: <TableButton title="مدیریت" />,
    },
    {
      title: "لورم ایپسوم متن ساختگی",
      result: (
        <Typography
          variant="body2"
          sx={{
            fontWeight: 700,
            color: theme.palette.success.main,
          }}
        >
          38.1%
        </Typography>
      ),
      status: (
        <Typography variant="body2" color={theme.palette.error.main}>
          غیرفعال
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
        <Title title="کمپیــن‌های بازاریابی" />
        <MainTable header={campaignsHeader} tableItems={campaignsBody} />
      </Box>
    </Grid>
  );
};

export default Campaigns;
