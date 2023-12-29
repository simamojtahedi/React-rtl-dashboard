import { Box } from "@mui/material";
import styles from "../expenseStatus.module.scss";

interface ExpenseBarProps {
  width: number;
  color: string;
}

const ExpenseBar: React.FC<ExpenseBarProps> = ({ width, color }) => {
  return (
    <Box className={styles.bar_wrapper}>
      <Box
        className={styles.bar_progress}
        sx={{
          width: `${width}%`,
          background: color,
        }}
      ></Box>
    </Box>
  );
};

export default ExpenseBar;
