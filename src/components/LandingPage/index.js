import { Nav, NavContainer, Logo, LogoImg, NavItem, List, ListItem, H3 } from './NavElements';
import Hero from '../Hero'
import img from '../../media/logo.png';

const LandingPage = () => {
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

        <Hero />
      </Nav>
    </>
  );
};

export default LandingPage;
