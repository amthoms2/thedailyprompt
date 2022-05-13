import styled from 'styled-components';

export const HeroWrapper = styled.div`
  padding: 2.5rem 0;
  max-width: 700px;
  margin: 0 auto;
`;

export const HeroContainer = styled.div`
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  grid-gap: 2rem;

  /* justify-content: space-between;
  align-items: center;
  position: relative;
  max-width: 81rem;
  width: 100%;
  margin: 0 auto;
  padding: 0 3rem;
  z-index: 10; */
`;


export const Img = styled.video`
  width: 123%;
  transform: translate(15%, 25px);
`;

export const Left = styled.div``;
export const Right = styled.div``;

export const Titles = styled.div`
  font-size: 1.4rem;
  color: #312f3a;
  text-transform: capitalize;
  line-height: 1.4;
`;
export const Text = styled.p`
  color: #919191;
  font-size: 1.1rem;
  margin: 1.9rem 0 2.5rem;
  max-width: 600px;
  line-height: 2.3;
`;
