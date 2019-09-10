import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
  return (
    <footer className="back_black">
      <Fade delay={500}>
        <div className="font_righteous footer_logo_venue">House of Blues</div>
        <div className="footer_copyright">
          Copyright &copy; 2019 House of Blues. All Rights Reserved.
        </div>
        <div className="footer-disclaimer">
        Disclaimer: This website does not have any affiliation with House of Blues or Blue October. No tickets are available for purchase from this webpage. This page intended for demonstration purposes only.
        </div>
      </Fade>
    </footer>
  );
};

export default Footer;
