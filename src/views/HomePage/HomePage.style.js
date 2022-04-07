import styled, { keyframes } from 'styled-components';
import heroImage from 'image/background-hero.jpg';

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

const SectionStyled = styled.div`
  width: 100%;
  max-width: 2048px;
  margin-right: auto;
  margin-left: auto;
  padding-top: 80px;
  height: 100vh;
  border-top: 1px solid transparent;
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.2),
      rgba(47, 48, 58, 0.4)
    ),
    url(${heroImage});
  background-size: cover;
`;

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const TextStyled = styled.p`
  font-size: 48px;
  font-family: 'Russo One', sans-serif;
  font-weight: 300;
  text-align: center;
  color: #fff;
  opacity: 0;
  transform: translateY(-10%);

  animation-name: ${animationHeroText};
  animation-duration: 2000ms;
  animation-fill-mode: forwards;

  &:not(:last-child) {
    margin-bottom: 25px;
  }
`;

export { SectionStyled, TextStyled, ContainerStyled };
