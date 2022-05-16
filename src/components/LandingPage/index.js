import { useState, useEffect } from 'react';
import { animateScroll as scrollUp } from 'react-scroll';
import {
  // Nav,
  NavContainer,
  Logo,
  LogoImg,
  NavMenu,
  List,
  ListItem,
  Scroll,
  H3,
} from './NavElements';
import Hero from '../Hero';
import img from '../../media/logo.png';

const LandingPage = () => {
  const [scroll, setScroll] = useState(false);

  const toggleHome = () => {
    scrollUp.scrollToTop();
  };

  const scrollChange = () => {
    if (window.scrollY >= 80) {
      setScroll('true');
    } else {
      setScroll('false');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollChange);
  }, []);

  return (
    <>
      {/* <Nav scroll={scroll}> */}
      {/* <Img src={img} /> */}
      <header style={{ position: 'relative', zIndex: '70' }}>
        <NavContainer scroll={scroll}>
          <Logo>
            <LogoImg src={img} alt="Logo" />
            <H3>bigOcean</H3>
          </Logo>

          <NavMenu>
            <List>
              <ListItem>
                <Scroll
                  scroll={scroll}
                  to="code"
                  smooth={'true'}
                  duration={500}
                  spy={'true'}
                  exact="true"
                  offset={-80}
                >
                  Practice
                </Scroll>
              </ListItem>

              <ListItem>Play</ListItem>
            </List>
          </NavMenu>
        </NavContainer>
      </header>

      <Hero />
      {/* </Nav> */}
    </>
  );
};

export default LandingPage;
