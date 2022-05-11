import styled from 'styled-components';

export const Nav = styled.div`
  /* background-color: #f1f8fc;
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  } */
  position: relative;
  padding: 1.7rem 0 2rem;
  width: 100%;
  overflow: hidden;
  background-color: #f1f8fc;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;
export const Img = styled.img`
  position: absolute;
  z-index: 0;
  width: 500px;
  bottom: -180px;
  left: -15px;
  opacity: 0.1;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  max-width: 81rem;
  width: 100%;
  margin: 0 auto;
  padding: 0 3rem;
  z-index: 10;
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

export const NavItem = styled.div``;

export const List = styled.ul`
  display: flex;
  align-items: center;
`;

export const ListItem = styled.li`
  color: #aaa;
  margin-left: 4.5rem;
  display: inline-block;
  transition: 0.3s;
`;

export const H3 = styled.h3`
  color: #45424b;
  font-size: 1.55rem;
  line-height: 1.2;
  font-weight: 700;
`
