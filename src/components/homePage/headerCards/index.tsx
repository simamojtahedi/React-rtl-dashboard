import {
  Grid,
  Card,
  Box,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";

const HeaderCards = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const headerInfo = [
    {
      id: 1,
      title: "فــروش",
      subTitle: "تعداد فروش هفت روز گذشته",
      value: 12,
      background: theme.palette.primary.main,
    },
    {
      id: 2,
      title: "بازدیــد",
      subTitle: "مجموع بازدیدهای هفت روز گذشته",
      value: 823,
      background: theme.palette.success.main,
    },
    {
      id: 3,
      title: "درآمــد",
      subTitle: "مجموع درآمد ماه گذشته شما ",
      value: 1350000,
      background: theme.palette.warning.main,
    },
    {
      id: 4,
      title: "تیـــکت‌ها",
      subTitle: "مجموع تیکت‌های ایجاد شده",
      value: 4,
      background: theme.palette.secondary.main,
    },
  ];

  return (
    <>
      {headerInfo.map((headerCard: any) => (
        <Grid
          item
          md={3}
          xs={12}
          key={headerCard.id}
          sx={{
            "&:nth-of-type(2)": { px: isMobile ? 0 : 1, py: isMobile ? 1 : 0 },
            "&:nth-of-type(3)": {
              pl: isMobile ? 0 : 1,
              pb: isMobile ? 1 : 0,
            },
          }}
        >
          <Card
            sx={{
              background: theme.palette.background.paper,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              p: 2,
            }}
          >
            <Box>
              <Typography component="h2" variant="h6" sx={{ fontWeight: 700 }}>
                {headerCard.title}
              </Typography>
              <Typography variant="caption">{headerCard.subTitle}</Typography>
            </Box>
            <Box
              sx={{
                py: 1.5,
                minWidth: 90,
                textAlign: "center",
                borderRadius: "10px",
                background: headerCard.background,
              }}
            >
              <Typography
                variant="h2"
                color={theme.palette.common.white}
                sx={{ fontSize: "1.2rem" }}
              >
                {headerCard.value.toLocaleString()}
              </Typography>
            </Box>
          </Card>
        </Grid>
      ))}
    </>
  );
};

export default HeaderCards;
