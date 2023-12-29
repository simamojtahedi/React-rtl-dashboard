import { Grid, Box, Typography, useTheme } from "@mui/material";
import Title from "../../title";
import ExpenseBar from "./expenseBar";
import styles from "./expenseStatus.module.scss";

const ExpenseStatus = () => {
  const theme = useTheme();

  return (
    <Grid item xs={12}>
      <Box
        className="default_card"
        sx={{ background: theme.palette.background.paper }}
      >
        <Title title="وضعیت هزینه‌ها" />
        <Grid container>
          <Grid item xs={12} md={4} p={3}>
            <ExpenseBar width={80} color={theme.palette.primary.main} />
            <Typography
              align="center"
              component="h4"
              variant="body2"
              sx={{ fontWeight: "bold" }}
            >
              فــروش
            </Typography>
            <Typography align="center" variant="caption" component="h5">
              مجموع کل فروش
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} p={3} px={3} className={styles.middle_box}>
            <ExpenseBar width={63} color={theme.palette.success.main} />
            <Typography
              align="center"
              component="h4"
              variant="body2"
              sx={{ fontWeight: "bold" }}
            >
              درآمــد
            </Typography>
            <Typography align="center" variant="caption" component="h5">
              مجموع کل درآمد
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} p={3}>
            <ExpenseBar width={44} color={theme.palette.secondary.main} />
            <Typography
              align="center"
              component="h4"
              variant="body2"
              sx={{ fontWeight: "bold" }}
            >
              هزیــنه
            </Typography>
            <Typography align="center" variant="caption" component="h5">
              مجموع کل هزینه‌ها
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default ExpenseStatus;
