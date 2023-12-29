import { useState } from "react";
import {
  IconButton,
  Menu,
  MenuItem,
  Avatar,
  Box,
  Typography,
} from "@mui/material";

export default function AvatarMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <IconButton
        id="avatar-button"
        aria-controls={open ? "avatar-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ padding: 0, marginRight: "10px" }}
      >
        <Avatar
          alt="Avatar"
          src="https://www.georgetown.edu/wp-content/uploads/2022/02/Jkramerheadshot-scaled-e1645036825432-1050x1050-c-default.jpg"
        />
      </IconButton>
      <Menu
        id="avatar-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "avatar-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <Typography variant="body2" pl={4} align="right">
            پروفــایل
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Typography variant="body2" pl={4} align="right">
            تیـــکت
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Typography variant="body2" pl={4} align="right">
            خــروج
          </Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
}
