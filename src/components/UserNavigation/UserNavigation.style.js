import Badge from '@mui/material/Badge';
import s from 'styled-components';
import { styled } from '@mui/material/styles';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
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
const ContainerStyled = s.div`
display: flex;
justify-content: center;
align-items: center;`;
const GreetingsStyled = s.span`
font-family: Quicksand, sans-serif;
 font-weight: 300;
 color: #fff;`;

export { StyledBadge, GreetingsStyled, ContainerStyled };
