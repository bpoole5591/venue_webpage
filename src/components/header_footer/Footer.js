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
      </Fade>
    </footer>
  );
};

export default Footer;
