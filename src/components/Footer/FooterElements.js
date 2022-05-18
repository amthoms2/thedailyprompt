import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { mobile } from '../../responsive';

export const FooterContainer = styled.footer`
  background-color: #101522;
`;

export const FooterWrapper = styled.div`
  padding: 48px 244px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 1100px;
  margin: 0 auto;
  ${mobile({ padding: '0px' })};
`;

export const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const LinksWrapper = styled.div`
  display: flex;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  box-sizing: border-box;
  text-align: left;
  width: 160px;
  color: #fff;
`;

export const FooterH1 = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
  font-size: 14px;
  margin-bottom: 0.5rem;
  color: #fff;
  text-decoration: none;

  &:hover {
    color: #01bf71;
    transition: 0.3s ease-out;
  }
`;

export const HREF = styled.a`
  font-size: 14px;
  margin-bottom: 0.5rem;
  color: #fff;
  text-decoration: none;

  &:hover {
    color: #01bf71;
    transition: 0.3s ease-out;
  }
`;
