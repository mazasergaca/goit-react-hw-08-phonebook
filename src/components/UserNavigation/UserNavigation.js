import { useState } from 'react';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import { useLogOutMutation } from 'redux/auth/auth-api';
import { Tooltip, Menu, MenuItem, IconButton } from '@mui/material';
import { Logout } from '@mui/icons-material';
import {
  BadgeStyled,
  TextStyled,
  ContainerStyled,
  AvatarStyled,
  PaperProps,
  LogoutStyled,
} from './UserNavigation.style';

export default function UserNavigation() {
  const name = useSelector(authSelectors.getUsername);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const [logOut] = useLogOutMutation();

  const handleOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <ContainerStyled>
      <TextStyled>Welcome, {name}</TextStyled>
      <Tooltip title="Account settings">
        <IconButton onClick={handleOpen} size="small" sx={{ ml: 2 }}>
          <BadgeStyled
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant="dot"
          >
            <AvatarStyled>{name[0]}</AvatarStyled>
          </BadgeStyled>
        </IconButton>
      </Tooltip>
      <Menu
        disableScrollLock={true}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{ ...PaperProps }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={logOut}>
          <Logout fontSize="small" />
          <LogoutStyled>Logout</LogoutStyled>
        </MenuItem>
      </Menu>
    </ContainerStyled>
  );
}
