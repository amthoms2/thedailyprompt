import {
  HeroWrapper,
  HeroContainer,
  Left,
  Right,
  Titles,
  Text,
  Img,
} from './HeroElements';
// import img from '../../media/ocean.jpg';
import vid from '../../media/nailsvid.mp4';

const Hero = () => {
  return (
    <>
      <HeroWrapper>
        <HeroContainer>

            <Left>
              <Titles>
                <h1>Future is here,</h1>
                <h1>Start Exploring now.</h1>
              </Titles>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Delectus eius distinctio odit, magni magnam qui ex perferendis
                vitae!
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
