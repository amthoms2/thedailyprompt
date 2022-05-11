import styled from 'styled-components';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';


export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const LandingPageImage = styled.img`
  width: 100%;
  height: 100%;
  background: #ffff;
  -o-object-fit: cover;
  object-fit: cover;
`

export const Content = styled.div`
  z-index: 1;
  max-width: 120px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const ArrowDownward = styled(MdKeyboardArrowDown)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowUpward = styled(MdKeyboardArrowUp)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ButtonWrapper = styled.div`
  margin-top: 625px;
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    color: #43e4db;
  }
`;

export const Button = styled.button`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  color: #010606;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
  }
`


