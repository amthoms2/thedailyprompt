import { useState } from 'react';
import {
  HeroContainer,
  Background,
  LandingPageImage,
  Content,
  HeroH1,
  HeroP,
  ButtonWrapper,
  Button,
  ArrowDownward,
  ArrowUpward,
} from './HeroElements';
import img from '../../media/ocean.jpg';

const Hero = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <>
      <HeroContainer>
        <Background>
          <LandingPageImage src={img} />
        </Background>
        <Content>
          <HeroH1>mfklrenflrnlfnerjf</HeroH1>
          <HeroP>Lorem Ipssum dmkelfnenfke</HeroP>
          <ButtonWrapper>
            <Button onMouseEnter={onHover} onMouseLeave={onHover}>
              Explore{hover ? <ArrowUpward /> : <ArrowDownward />}
            </Button>
          </ButtonWrapper>
        </Content>
      </HeroContainer>
    </>
  );
};

export default Hero;
