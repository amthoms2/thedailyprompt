import LandingPage from '../components/LandingPage';
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  padding: 1.7rem 0 2rem;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  background-color: #f1f8fc;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`


const Container = styled.div`
  position: relative;
  max-width: 81rem;
  width: 100%;
  margin: 0 auto;
  padding: 0 3rem;
  z-index: 10;
`

function Home() {
  return (
    <>
    <Wrapper>
    <Container>
      <LandingPage />
      </Container>
      </Wrapper>
    </>
  );
}

export default Home;
