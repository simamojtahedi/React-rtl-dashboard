import { Typography } from "@mui/material";

interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <Typography variant="body2" sx={{ fontWeight: "bold" }} mb={3}>
      {title}
    </Typography>
  );
};

export default Title;
