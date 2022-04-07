import { css } from 'styled-components';

export const adaptiveContainer = css`
  margin-left: auto;
  margin-right: auto;
  padding: 0 15px;

  @media screen and (min-width: 480px) {
    width: 480px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;
