import { Link } from "react-router-dom";
import {
  Typography,
  Box,
  IconButton,
  List,
  ListItem,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { CgMenuLeft } from "react-icons/cg";
import { AiOutlineLogout } from "react-icons/ai";
import Logo from "../../../assets/images/logo.png";
import styles from "./sidebar.module.scss";

interface SidebarPropsType {
  expanded: Boolean;
  isExpanded: any;
  sidebarItems: any;
  location: { pathname: string };
}

const Sidebar: React.FC<SidebarPropsType> = ({
  expanded,
  isExpanded,
  sidebarItems,
  location,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      className={` ${styles.sidebar_wrapper} ${
        isMobile && expanded ? styles.res_visible_sidebar : ""
      } `}
      sx={{
        background: (theme: any) => theme.palette.common.sidebar,
        width: expanded ? "190px" : "70px",
      }}
    >
      {isMobile ? (
        <Link
          to="/"
          style={{ margin: "15px auto 0" }}
          onClick={() => isExpanded(!expanded)}
        >
          <img src={Logo} alt="Logo" height={23} />
        </Link>
      ) : (
        <IconButton onClick={() => isExpanded(!expanded)}>
          <CgMenuLeft size={23} color={theme.palette.common.white} />
        </IconButton>
      )}
      <List>
        {sidebarItems.map((sidebarItem: any) => (
          <ListItem
            key={sidebarItem.id}
            sx={{
              background:
                location.pathname === sidebarItem.link
                  ? theme.palette.primary.light
                  : "transparent",
            }}
          >
            <Link to={sidebarItem.link}>
              {sidebarItem.icon}
              <Typography
                component="span"
                variant="body2"
                sx={{
                  width: expanded ? "auto" : 0,
                  visibility: expanded ? "visible" : "hidden",
                  opacity: expanded ? 1 : 0,
                }}
                color={theme.palette.common.white}
              >
                {sidebarItem.title}
              </Typography>
            </Link>
          </ListItem>
        ))}
      </List>
      <IconButton>
        <AiOutlineLogout size={23} color={theme.palette.common.white} />
        <Typography
          component="span"
          variant="body2"
          sx={{
            width: expanded ? "auto" : 0,
            visibility: expanded ? "visible" : "hidden",
            opacity: expanded ? 1 : 0,
          }}
          color={theme.palette.common.white}
        >
          خـــروج
        </Typography>
      </IconButton>
    </Box>
  );
};

export default Sidebar;
