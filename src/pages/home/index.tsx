import { Grid, useMediaQuery, useTheme } from "@mui/material";
import DashboardLayout from "../../layout";
import HeaderCards from "../../components/homePage/headerCards";
import LatestTransactions from "../../components/homePage/latestTransactions";
import ExpenseStatus from "../../components/homePage/expenseStatus";
import Customers from "../../components/homePage/customers";
import Sellers from "../../components/homePage/sellers";
import Campaigns from "../../components/homePage/campaigns";
import TopProducts from "../../components/homePage/topProducts";
import SaleStatistics from "../../components/homePage/saleStatistics";
import SalesNetworks from "../../components/homePage/salesNetworks";

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <DashboardLayout>
      <Grid container>
        <HeaderCards />
        <LatestTransactions />
        <Grid item md={6} xs={12} pl={isMobile ? 0 : 0.5}>
          <SalesNetworks />
        </Grid>
        <Grid item md={6} xs={12} pr={isMobile ? 0 : 0.5}>
          <ExpenseStatus />
          <Grid container>
            <Customers />
            <Sellers />
          </Grid>
        </Grid>
        <Grid item md={6} xs={12} pl={isMobile ? 0 : 0.5}>
          <Campaigns />
        </Grid>
        <Grid item md={6} xs={12} pr={isMobile ? 0 : 0.5}>
          <TopProducts />
        </Grid>
        <SaleStatistics />
      </Grid>
    </DashboardLayout>
  );
};

export default Home;
