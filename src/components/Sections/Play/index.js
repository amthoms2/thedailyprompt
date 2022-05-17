import {
  SectionWrapper,
  SectionContainer,
  Row,
  Col1,
  Col2,
  Heading,
} from '../SectionElements';
import {Video} from './PlayElements'
import vid from '../../../media/game.mov';

const Play = () => {
  return (
    <SectionWrapper>
      <SectionContainer>
        <Row>
          <Col1>
            <Heading>EXPLAIN</Heading>
          </Col1>

          <Col2>
            {/* <Heading>explain</Heading> */}
            <Video
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
