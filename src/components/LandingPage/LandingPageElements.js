import styled from 'styled-components';
import { laptop, mobile } from '../../responsive';
import { Link as LinkScroll } from 'react-scroll';

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const LogoImg = styled.img`
  width: 40px;
  margin-right: 0.6rem;
  margin-top: -0.6rem;
`;

export const H3 = styled.h3`
  color: #45424b;
  font-size: 1.55rem;
  line-height: 1.2;
  font-weight: 700;

  ${laptop({ fontSize: '1rem' })};
`;

export const NavMenu = styled.div``;

export const List = styled.ul`
  display: flex;
  align-items: center;
`;

export const ListItem = styled.li`
  color: #aaa;
  margin-left: 4.5rem;
  display: inline-block;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    color: #5bacdf;
    transform: scale(1.05);
  }
`;

export const Scroll = styled(LinkScroll)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  ${laptop({ fontSize: '14px', padding: '0' })};

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;
