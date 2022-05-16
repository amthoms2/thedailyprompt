import styled from 'styled-components';
import { laptop, mobile } from '../../responsive';

export const HeroWrapper = styled.div`
  ${laptop({ padding: '2.5rem 0', maxWidth: '700px', margin: '0 auto' })};
`;

export const HeroContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-content: center;

  ${laptop({ gridTemplateColumns: '1fr', justifyContent: 'center', gridGap: '2rem' })};

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
  width: 100%;
  height: 80vh;
  transform: translate(0%, 70px);

  ${laptop({ width: '100%', transform: 'none' })};

`;

export const Left = styled.div``;

export const Right = styled.div`
`;

export const Titles = styled.div`
  font-size: 1.4rem;
  color: #312f3a;
  text-transform: capitalize;
  line-height: 1.4;

  ${mobile({ fontSize: '1rem' })};
  ${laptop({ fontSize: '1rem' })};
`;

export const Text = styled.p`
  color: #919191;
  font-size: 1.1rem;
  margin: 1.9rem 0 2.5rem;
  max-width: 600px;
  line-height: 2.3;

  ${mobile({ margin: '1.1rem 0 1.5rem' })};
  ${laptop({ fontSize: '1rem', margin: '1.4rem 0 1.5rem'})};
`;
