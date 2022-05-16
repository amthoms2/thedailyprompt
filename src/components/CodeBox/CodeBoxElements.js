import styled from 'styled-components';
import {laptop, mobile} from '../../responsive'

export const CodeBoxWrapper = styled.div`
  color: #fff;
  background: #010606;
`;

export const CodeBoxContainer = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
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

export const TextArea = styled.textarea`
  /* width: 80%;
  height: 30vh; */
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: #f7f8fa;

  ${mobile({ fontSize: '32px' })};
`;
