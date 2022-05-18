import {
  SectionWrapper,
  SectionContainer,
  Row,
  Col1,
  Col2,
  Heading,
} from '../SectionElements';
import { Video, Text } from './PlayElements';
import vid from '../../../media/game.mov';
import { Element } from 'react-scroll';

const Play = () => {
  return (
    <SectionWrapper>
      <SectionContainer>
        <Row>
          <Col1>
            <Element name="play">
              <Heading>Think you're good at algorithms? Prove it!</Heading>
            </Element>
            <Text style={{ whiteSpace: 'pre-line' }}>
              {'One-big-Ocean is a web-based multiplayer game that helps players learn about big-O notation by navigating an underwater adventure<br/> <br/> By collecting pearls and answering questions, players can work together (or solo) to pass each level before the timer runs out<br/> <br/>If all the levels are passed, then the game is won as a team, while individuals are ranked by pearls and points '
                .split('<br/>')
                .join('\n')}
            </Text>

            <a
              href="https://one-big-ocean.herokuapp.com/"
              style={{ textDecoration: 'none' }}
            >
              Play Here!
            </a>
          </Col1>

          <Col2>
            <Video
              href="/"
              autoPlay
              loop
              muted
              src={vid}
              type="video/mp4"
              alt="algorithm game"
            />
          </Col2>
        </Row>
      </SectionContainer>
    </SectionWrapper>
  );
};

export default Play;
