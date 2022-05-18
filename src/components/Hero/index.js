import {
  HeroWrapper,
  HeroContainer,
  Left,
  Right,
  Title,
  Text,
  Img,
} from './HeroElements';
import vid from '../../media/algo.mov';
import { Element } from 'react-scroll';

const Hero = () => {
  return (
    <>
      <HeroWrapper>
        <HeroContainer>
            <Left>
            <Element name="practice">
              <Title>
                <h1>Find the Time Complexity.</h1>
              </Title>
              </Element>
              <Text style={{ whiteSpace: "pre-line" }}>
              {'A website for practicing algorithms, improving your skills and becoming a better programmer.<br/> <br/> To practice: Copy and paste a function in any language to generate its time complexity. See example video ->  <br/> <br/>To play: Follow the link below and play solo or with up to 3 friends'.split('<br/>').join('\n')}
              </Text>
            </Left>
            <Right>
              <Img
                autoPlay
                loop
                muted
                src={vid}
                type="video/mp4"
                alt="ocean video"
              />
            </Right>
        </HeroContainer>
      </HeroWrapper>
    </>
  );
};

export default Hero;
