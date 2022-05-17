import styled from 'styled-components';
import {laptop} from '../../../responsive'

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
