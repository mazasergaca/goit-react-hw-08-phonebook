import styled, { keyframes, css } from 'styled-components';
import heroImageDesktop from 'image/background-hero-desktop.jpg';
import heroImageTablet from 'image/background-hero-tablet.jpg';
import heroImageMobile from 'image/background-hero-mobile.jpg';
import { Link } from 'react-router-dom';

const animationLinkHero = keyframes`
0% {
  opacity: 0;
  transform: translateY(-10%);
}
100% {
  opacity: 1;
  transform: translateY(0);
}
`;
export const LinkStyled = styled(Link)`
  padding: 10px 20px;

  font-family: Quicksand, sans-serif;
  font-weight: 300;

  border: 1px solid #fff;
  opacity: 0;
  color: #fff;
  background-color: #1976d2;

  animation-name: ${animationLinkHero};
  animation-duration: 2000ms;
  animation-delay: 1300ms;
  animation-fill-mode: forwards;
  transition: background-color 250ms linear;

  &:hover {
    background-color: #1667b8;
  }
`;

export const SectionStyled = styled.div`
  width: 100%;
  height: 100vh;
  margin-right: auto;
  margin-left: auto;

  border-top: 1px solid transparent;
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.2),
      rgba(47, 48, 58, 0.4)
    ),
    url(${heroImageMobile});
  background-size: cover;

  @media screen and (min-width: 577px) {
    background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.2),
        rgba(47, 48, 58, 0.4)
      ),
      url(${heroImageTablet});
  }
  @media screen and (min-width: 960px) {
    max-width: 1920px;
    background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.2),
        rgba(47, 48, 58, 0.4)
      ),
      url(${heroImageDesktop});
  }
`;

export const ContainerStyled = styled.div`
  height: 100vh;
  padding: 80px 15px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const animationHeroText = keyframes`
0% {
  opacity: 0;
  transform: translateY(-10%);
}
100% {
  opacity: 1;
  transform: translateY(0);
}
`;

const textStyle = css`
  transform: translateY(-10%);

  font-size: 42px;
  font-family: 'Russo One', sans-serif;
  font-weight: 300;
  text-align: center;

  opacity: 0;
  color: #fff;

  animation-name: ${animationHeroText};
  animation-duration: 2000ms;
  animation-fill-mode: forwards;
`;

export const TitleStyled = styled.span`
  ${textStyle}

  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 46px;
  }

  @media screen and (min-width: 1200px) {
    width: 850px;
    font-size: 52px;
  }
`;

export const TextStyled = styled.span`
  ${textStyle}

  margin-bottom: 10px;

  font-size: 22px;

  animation-delay: 1300ms;

  @media screen and (min-width: 768px) {
    font-size: 28px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 34px;
  }
`;
