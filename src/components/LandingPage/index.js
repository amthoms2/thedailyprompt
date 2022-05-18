import { useState, useEffect } from 'react';
import {
  NavContainer,
  Logo,
  LogoImg,
  NavMenu,
  List,
  ListItem,
  Scroll,
  H3,
} from './LandingPageElements';
import Hero from '../Hero';
import img from '../../media/logo.png';

const LandingPage = () => {
  const [scroll, setScroll] = useState('false');

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
                  to="practice"
                  smooth={'true'}
                  duration={500}
                  spy={'true'}
                  exact="true"
                  offset={700}
                >
                  Practice
                </Scroll>
              </ListItem>

              <ListItem>
                <Scroll
                  scroll={scroll}
                  to="play"
                  smooth={'true'}
                  duration={500}
                  spy={'true'}
                  exact="true"
                  offset={-70}
                >
                  Play
                </Scroll>
              </ListItem>
            </List>
          </NavMenu>
        </NavContainer>
      </header>

      <Hero />
    </>
  );
};

export default LandingPage;
