import { Grid, Box, Typography, useTheme } from "@mui/material";
import Title from "../../title";

const Sellers = () => {
  const theme = useTheme();

  return (
    <Grid item xs={12} md={6}>
      <Box
        className="default_card"
        sx={{ background: theme.palette.background.paper }}
      >
        <Title title="فروشنــدگان" />
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          py={2}
        >
          <Box>
            <Typography
              variant="body2"
              component="h5"
              sx={{ fontWeight: "bold" }}
            >
              5 فروشنده
            </Typography>
            <Typography variant="caption">تعداد فروشندگان فعال </Typography>
          </Box>
          <Box>
            <img
              src="https://images.healthshots.com/healthshots/en/uploads/2020/12/08182549/positive-person.jpg"
              alt="Seller"
              className="table_image"
            />
            <img
              src="https://images.healthshots.com/healthshots/en/uploads/2020/12/08182549/positive-person.jpg"
              alt="Seller"
              className="table_image"
            />
            <img
              src="https://images.healthshots.com/healthshots/en/uploads/2020/12/08182549/positive-person.jpg"
              alt="Seller"
              className="table_image"
            />
            <img
              src="https://images.healthshots.com/healthshots/en/uploads/2020/12/08182549/positive-person.jpg"
              alt="Seller"
              className="table_image"
            />
            <img
              src="https://images.healthshots.com/healthshots/en/uploads/2020/12/08182549/positive-person.jpg"
              alt="Seller"
              className="table_image"
            />
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default Sellers;
