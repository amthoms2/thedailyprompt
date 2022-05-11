import { Nav, Img, NavContainer, Logo, LogoImg, NavItem, List, ListItem, H3 } from './NavElements';
import img from '../../media/logo.png';

const Navbar = () => {
  return (
    <>
      <Nav>
        {/* <Img src={img} /> */}
        <header>
        <NavContainer>
          <Logo>
            <LogoImg src={img} alt="" />
            <H3>bigOcean</H3>
          </Logo>

          <NavItem>
            <List>
              <ListItem>Code</ListItem>
              <ListItem>Play</ListItem>
            </List>
          </NavItem>
        </NavContainer>
        </header>
      </Nav>
    </>
  );
};

export default Navbar;
