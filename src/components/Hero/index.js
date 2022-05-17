import {
  HeroWrapper,
  HeroContainer,
  Left,
  Right,
  Titles,
  Text,
  Img,
} from './HeroElements';
import vid from '../../media/game.mov';
// import vid from '../../media/zoom0.mp4'

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
