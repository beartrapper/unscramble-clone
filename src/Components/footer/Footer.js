import React from "react";
import { Link } from "react-router-dom";


const Footer = () => {
  const [width, setWidth] = React.useState(window.innerWidth);

  return (
    <div>
      <footer id="footer" className="footer-1 text-center">
        <div className="main-footer widgets-dark typo-light">

          <div className="container">

          <div className="row centered centeredd">
                <div className="">
                  <a className="hoverred">Contact Us</a>
              </div>
              <div className="pl-5">
                  <a>About Us</a>
              </div>
            </div>
        <hr />
            
            <div className="row">
              <div className="footer-copyright">
                <div className="centered">
                  <p>Copyright Scrabbler © 2020. All rights reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div />
    </div>
  );
};

export default Footer;



