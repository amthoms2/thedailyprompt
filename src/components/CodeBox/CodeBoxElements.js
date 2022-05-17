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
width: 575px;
height: 411px;
background: aliceblue;
&::placeholder {
  padding: 20px;
  font-size: 16px;
  }
  ${laptop({ width: '100%', transform: 'none' })};
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: #f7f8fa;

  ${mobile({ fontSize: '32px' })};
`;

export const SpinnerImg = styled.img`
  height: 14px;
  display: inline-block;
  margin-left: 10px;
  width: 15px;
`;

export const Error = styled.div`
  position: relative;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
`;
