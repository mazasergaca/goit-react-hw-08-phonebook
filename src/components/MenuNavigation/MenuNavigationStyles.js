import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { Badge } from '@mui/material';
import * as mui from '@mui/material';
import { MdMenu } from 'react-icons/md';
import { IoMdClose } from 'react-icons/io';
import { keyframes } from 'styled-components';

export const ContainerStyled = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MenuStyled = styled.nav`
  margin-right: 25px;
`;

export const LinkStyled = styled(Link)`
  padding: 10px 20px;

  border: 1px solid #fff;
  font-family: Quicksand, sans-serif;
  font-weight: 300;

  color: #fff;
  transition: background-color 250ms linear;

  &:hover {
    background-color: rgba(211, 211, 211, 0.3);
  }
`;

export const NavLinkStyled = styled(Link)`
  width: 100%;
  padding: 10px 15px;
  display: flex;
  align-items: center;

  font-size: 16px;

  color: #fff;

  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const UserStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextStyled = styled.span`
  font-family: Quicksand, sans-serif;
  font-weight: 300;

  color: #fff;
`;

const avatarStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  font-size: 20px;

  color: #fff;
  background-color: #ccc;
`;

export const AvatarDesktopStyled = styled.div`
  ${avatarStyles}
  width: 40px;
  height: 40px;
`;

export const AvatarMobileStyled = styled.div`
  ${avatarStyles}
  width: 100px;
  height: 100px;

  font-size: 48px;

  background-color: #ccc;
`;

export const LogoutStyled = styled.span`
  margin-left: 5px;
`;

export const BadgeStyled = mui.styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    height: '18%',
    width: '18%',
    borderRadius: '50%',
    '&::after': {
      position: 'absolute',
      top: '-1px',
      left: '-1px',
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

export const PaperProps = {
  elevation: 0,
  sx: {
    overflow: 'visible',
    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
    mt: 1.5,
    '& .MuiAvatar-root': {
      width: 32,
      height: 32,
      ml: -0.5,
      mr: 1,
    },
    '&:before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      top: 0,
      right: 14,
      width: 10,
      height: 10,
      bgcolor: 'background.paper',
      transform: 'translateY(-50%) rotate(45deg)',
      zIndex: 0,
    },
  },
};

export const MobileMenu = styled.div`
  display: block;

  @media screen and (min-width: 769px) {
    display: none;
  }
`;
export const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  display: ${props => (props.open ? 'block' : 'none')};

  background-color: #00000080;
`;

export const ButtonMenuStyled = styled.button`
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  cursor: pointer;
  background-color: transparent;
`;

const animationCloseButton = keyframes`
0%{ opacity: 0 }
100%{ opacity: 1}
`;

export const MenuIconStyled = styled(MdMenu)`
  width: 34px;
  height: 34px;
  z-index: 1;

  color: #fff;
`;

export const CloseIconStyled = styled(IoMdClose)`
  width: 34px;
  height: 34px;
  z-index: 5;

  opacity: 0;
  color: #fff;

  animation-name: ${animationCloseButton};
  animation-duration: 300ms;
  animation-delay: 400ms;
  animation-fill-mode: forwards;
`;

export const BackdropMobileMenu = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 45vw;
  height: 100vh;
  padding: 75px 10px;
  z-index: 4;
  transform: ${props => (props.open ? 'translateX(0)' : 'translateX(100%)')};

  display: flex;
  flex-direction: column;
  align-items: center;

  border: none;
  background-image: linear-gradient(
    160deg,
    rgba(3, 0, 47, 1) 0%,
    rgba(27, 41, 95, 1) 48%,
    rgba(29, 44, 98, 1) 100%
  );
  transition: transform 300ms linear;
`;

export const NameStyled = styled.span`
  margin-top: 10px;
  margin-bottom: 20px;

  font-size: 26px;
  text-align: center;

  color: #fff;
`;

export const LogoutMobileStyled = styled.div`
  width: 100%;
  padding: 10px 15px;
  display: flex;
  align-items: center;

  font-size: 16px;

  color: #fff;
`;
