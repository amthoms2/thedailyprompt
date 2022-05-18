import styled from 'styled-components';
import { laptop, mobile } from '../../responsive';

export const SectionWrapper = styled.div`
  color: ${({ color }) => (color === 'light' ? '#fff' : 'black')};
  background: ${({ background }) =>
    background === 'dark' ? '#010606' : 'aliceblue'};
`;

export const SectionContainer = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;

  ${laptop({ height: 'fit-content', padding: 'inherit'})};
`;

export const Row = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: 'col1 col2';

  ${laptop({ gridTemplateAreas: `'col1 col1' 'col2 col2'` })};
`;

export const Col1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Col2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 38px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ color }) => (color === 'light' ? '#f7f8fa' : '#312F3A')};
  ${mobile({ fontSize: '32px', paddingTop: '30px' })};
`;
