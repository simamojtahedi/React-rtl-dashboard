import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { FaMoon } from "react-icons/fa6";
import { TbSunHigh } from "react-icons/tb";
import { CgMenuLeft } from "react-icons/cg";
import Logo from "../../../assets/images/logo.png";
import AvatarMenu from "./avatarMenu";
import { switchTheme } from "../../../features/app/appSlice";
import { AppDispatch, useAppDispatch } from "../../../features/store";
import styles from "./header.module.scss";

interface HeaderPropsType {
  sidebarItems: any;
  location: { pathname: string };
  expanded: boolean;
  isExpanded: any;
}

const Header: React.FC<HeaderPropsType> = ({
  sidebarItems,
  location,
  expanded,
  isExpanded,
}) => {
  const theme = useTheme();
  const dispatch: AppDispatch = useAppDispatch();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box className={styles.header_wrapper}>
      {isMobile && (
        <IconButton
          onClick={() => isExpanded(!expanded)}
          style={{
            background: theme.palette.common.white,
            color: theme.palette.common.black,
          }}
        >
          <CgMenuLeft size={19} />
        </IconButton>
      )}
      <Box>
        {!isMobile && (
          <Link to="/">
            <img src={Logo} alt="Logo" height={23} />
          </Link>
        )}
        <Typography variant="caption" component="h6">
          |{" "}
          {
            sidebarItems.find((item: any) => item.link === location.pathname)
              .title
          }
        </Typography>
      </Box>
      <Box>
        <IconButton
          size="small"
          sx={{ background: theme.palette.common.white, borderRadius: "4px" }}
          onClick={() =>
            dispatch(
              switchTheme(theme.palette.mode === "light" ? "dark" : "light")
            )
          }
        >
          {theme.palette.mode === "light" ? (
            <FaMoon style={{ color: theme.palette.common.black }} />
          ) : (
            <TbSunHigh style={{ color: theme.palette.common.black }} />
          )}
        </IconButton>
        <Typography variant="caption" component="h6">
          | سیما مجتهدی
        </Typography>
        <AvatarMenu />
      </Box>
    </Box>
  );
};

export default Header;
