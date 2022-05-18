import { css } from 'styled-components';

export const laptop = (props) => {
  return css`
    @media only screen and (max-width: 768px) {
      ${props}
    }
  `;
};

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 368px) {
      ${props}
    }
  `;
};
