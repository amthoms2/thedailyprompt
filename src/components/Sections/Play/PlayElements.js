import styled from 'styled-components';
import { laptop, mobile } from '../../../responsive';

export const Video = styled.video`
  width: 100%;
  transform: translate(0%, 70px);

  ${laptop({ width: '100%', transform: 'none' })};
`;

export const Text = styled.p`
  color: #919191;
  font-size: 1.1rem;
  margin: 1.9rem 0 2.5rem;
  max-width: 600px;
  line-height: 2.3;

  ${mobile({ margin: '1.1rem 0 1.5rem' })};
  ${laptop({ fontSize: '1rem', margin: '1.4rem 0 1.5rem' })};
`;
