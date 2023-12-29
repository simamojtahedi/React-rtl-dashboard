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
      name: "برچسب گاوی",
      count: 201,
      categories: ["برچسب", "برچسب گل"],
      price: 18000,
      image:
        "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
    },
    {
      id: 2,
      name: "برچسب خری",
      count: 11,
      categories: ["برچسب", "برچسب گل"],
      price: 18000,
      image:
        "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
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
                  <img src={product.image} alt={product.name} width={100} />
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
