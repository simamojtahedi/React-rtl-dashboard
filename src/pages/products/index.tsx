import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from "@mui/material";
import DashboardLayout from "../../layout";
import product_1 from "../../assets/images/product-1.jpg";
import product_2 from "../../assets/images/product-2.png";

const Products = () => {
  const theme = useTheme();

  const productsHeader = [
    "کد",
    "تصویر",
    "عنوان",
    "قیمت",
    "موجودی",
    "دسته‌بندی",
  ];

  const productsList = [
    {
      id: 1,
      name: "فوم شستشوی صورت",
      count: 201,
      categories: ["بهداشتی", "فوم شستشو "],
      price: 18000,
      image: product_1,
    },
    {
      id: 2,
      name: " ماسک خاک رس ",
      count: 11,
      categories: ["بهداشتی", " ماسک صورت "],
      price: 18000,
      image: product_2,
    },
  ];

  return (
    <DashboardLayout>
      <TableContainer
        className="default_card"
        sx={{ background: theme.palette.background.paper }}
      >
        <Table aria-label="products">
          <TableHead>
            <TableRow>
              {productsHeader.map((headerItem: string) => (
                <TableCell align="center" key={headerItem}>
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: 700, whiteSpace: "nowrap" }}
                  >
                    {headerItem}
                  </Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {productsList.map((product: any) => (
              <TableRow
                key={product.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="center">
                  <Typography
                    variant="body2"
                    component="h6"
                    sx={{ fontWeight: 700 }}
                  >
                    {product.id}
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <img
                    src={product.image}
                    alt={product.name}
                    height={80}
                    width={80}
                    style={{ objectFit: "cover", borderRadius: "8px" }}
                  />
                </TableCell>
                <TableCell align="center">
                  <Typography
                    variant="body2"
                    component="h6"
                    sx={{ fontWeight: 700, whiteSpace: "nowrap" }}
                  >
                    {product.name}
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography
                    variant="body2"
                    component="h6"
                    sx={{ fontWeight: 700 }}
                  >
                    {product.price}
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography
                    variant="body2"
                    component="h6"
                    sx={{ fontWeight: 700 }}
                  >
                    {product.count}
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  {product.categories.map((category: any) => (
                    <Typography
                      variant="caption"
                      key={category}
                      sx={{
                        marginRight: "0.1rem",
                        marginBottom: "0.1rem",
                        display: "inline-block",
                        backgroundColor: "#eee",
                        borderRadius: "8px",
                        padding: "3px 8px",
                        whiteSpace: "nowrap",
                        color: theme.palette.common.black,
                        background: theme.palette.grey[100],
                      }}
                    >
                      {category}
                    </Typography>
                  ))}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </DashboardLayout>
  );
};

export default Products;
