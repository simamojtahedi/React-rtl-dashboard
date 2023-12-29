import { Button, useTheme } from "@mui/material";

const TableButton: React.FC<{ title: string }> = ({ title }) => {
  const theme = useTheme();

  return (
    <Button
      variant="contained"
      size="small"
      sx={{ color: theme.palette.common.white }}
    >
      {title}
    </Button>
  );
};

export default TableButton;
