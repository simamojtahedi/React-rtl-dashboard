import { Grid, Box, Button, useTheme } from "@mui/material";
import MainTable from "../../mainTable";
import TableButton from "../../common/buttons/TableButton";

const transactionsHeader = [
  { id: "name", title: "نـــام" },
  { id: "phone_number", title: "شمــاره همراه" },
  { id: "purchase_frequency", title: "دفعــات خرید" },
  { id: "total_payment", title: "مجموع پرداخــتی" },
  { id: "faild_payments", title: "پرداخت نــاموفق" },
  { id: "discount_code", title: "ایجاد کد تخفیف اختصاصی" },
];

const transactionsBody = [
  {
    name: "علی رضوی",
    phone_number: "09124550978",
    purchase_frequency: 3,
    total_payment: 300000,
    faild_payments: 0,
    discount_code: <TableButton title=" کد تخفیف" />,
  },
  {
    name: "رویا جعفری",
    phone_number: "09124550978",
    purchase_frequency: 7,
    total_payment: 180000,
    faild_payments: 2,
    discount_code: <TableButton title=" کد تخفیف" />,
  },
];

const CustomersList = () => {
  const theme = useTheme();

  return (
    <Grid item xs={12}>
      <Box
        className="default_card"
        sx={{ background: theme.palette.background.paper }}
      >
        <MainTable header={transactionsHeader} tableItems={transactionsBody} />
      </Box>
    </Grid>
  );
};

export default CustomersList;
