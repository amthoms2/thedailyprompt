import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { animateScroll as scrollUp } from 'react-scroll';
import {
  FooterContainer,
  FooterWrapper,
  FooterLinks,
  LinksWrapper,
  FooterItems,
  FooterH1,
  FooterLink,
  HREF,
} from './FooterElements';

const Footer = () => {
  const toggleHome = () => {
    scrollUp.scrollToTop();
  };

  return (
    <>
      <FooterContainer>
        <FooterWrapper>
          <FooterLinks>
            <LinksWrapper>
              <FooterItems>
                <FooterH1>Quick Links</FooterH1>
                <FooterLink to="/" onClick={toggleHome}>
                  Back to the Top
                  <ArrowUpwardIcon
                    style={{ height: '16px', marginBottom: '-2px' }}
                  />
                </FooterLink>
                <HREF href="https://beta.openai.com/docs/introduction">
                  OpenAI
                </HREF>
                <HREF href="https://www.linkedin.com/in/amthoms2/.">
                  Linkedin
                </HREF>
              </FooterItems>
              <FooterItems>
                <p style={{ fontSize: '11px' }}>
                  *disclaimer: The accuracy of any open API must not be relied
                  upon and is not guaranteed. All information is provided "as
                  is", with no guarantee of completeness, accuracy or
                  timeliness. The user of any open API should make their own
                  independent inquiries before relying on the information.
                </p>
              </FooterItems>
            </LinksWrapper>
          </FooterLinks>
        </FooterWrapper>
      </FooterContainer>
    </>
  );
};

export default Footer;
