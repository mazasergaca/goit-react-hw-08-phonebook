import { useState } from 'react';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import { useLogOutMutation } from 'redux/auth/auth-api';
import { Tooltip, Menu, MenuItem, IconButton } from '@mui/material';
import { Logout } from '@mui/icons-material';
import { AiOutlineHome } from 'react-icons/ai';
import { RiContactsBook2Line } from 'react-icons/ri';
import { MdLogout } from 'react-icons/md';
import {
  MenuStyled,
  LinkStyled,
  BadgeStyled,
  TextStyled,
  ContainerStyled,
  AvatarDesktopStyled,
  PaperProps,
  LogoutStyled,
  UserStyled,
  ButtonMenuStyled,
  MenuIconStyled,
  MobileMenu,
  BackdropMobileMenu,
  CloseIconStyled,
  AvatarMobileStyled,
  NameStyled,
  NavLinkStyled,
  LogoutMobileStyled,
  Backdrop,
} from './MenuNavigationStyles';

export default function MenuNavigation() {
  const name = useSelector(authSelectors.getUsername);
  const [menu, setMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const [logOut] = useLogOutMutation();

  const handleOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleOnClick = () => {
    setMenu(!menu);
  };

  return (
    <>
      <ContainerStyled>
        <MenuStyled>
          <LinkStyled to="contacts">My contacts</LinkStyled>
        </MenuStyled>
        <UserStyled>
          <TextStyled>Welcome, {name}</TextStyled>
          <Tooltip title="Account settings">
            <IconButton onClick={handleOpen} size="small" sx={{ ml: 2 }}>
              <BadgeStyled
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                variant="dot"
              >
                <AvatarDesktopStyled>{name[0]}</AvatarDesktopStyled>
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
        </UserStyled>
      </ContainerStyled>

      <MobileMenu>
        <ButtonMenuStyled onClick={toggleOnClick}>
          {menu ? (
            <CloseIconStyled open={menu} />
          ) : (
            <MenuIconStyled open={menu} />
          )}
        </ButtonMenuStyled>
        <BackdropMobileMenu open={menu}>
          <div>
            <BadgeStyled
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              variant="dot"
            >
              <AvatarMobileStyled>{name[0]}</AvatarMobileStyled>
            </BadgeStyled>
          </div>
          <NameStyled>{name}</NameStyled>
          <NavLinkStyled to="/" onClick={toggleOnClick}>
            <AiOutlineHome size="34px" style={{ marginRight: '10px' }} />
            Home
          </NavLinkStyled>
          <NavLinkStyled to="contacts" onClick={toggleOnClick}>
            <RiContactsBook2Line size="34px" style={{ marginRight: '10px' }} />
            Contacts
          </NavLinkStyled>
          <LogoutMobileStyled onClick={logOut}>
            <MdLogout size="34px" style={{ marginRight: '10px' }} />
            Logout
          </LogoutMobileStyled>
        </BackdropMobileMenu>
        <Backdrop open={menu} onClick={toggleOnClick} />
      </MobileMenu>
    </>
  );
}
