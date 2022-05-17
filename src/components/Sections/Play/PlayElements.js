import styled from 'styled-components';
import { laptop, mobile } from '../../../responsive';

export const Video = styled.video`
  width: 100%;
  height: 80vh;
  transform: translate(0%, 70px);

  ${laptop({ width: '100%', transform: 'none' })};
`;

export const IMG = styled.img`
  width: 100%;
  height: 80vh;
  transform: translate(0%, 70px);

  ${laptop({ width: '100%', transform: 'none' })};
`;
