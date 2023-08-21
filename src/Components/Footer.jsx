import React from "react";
import { ImTwitter } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="footer">
      <footer>
        <div>
            <p>P.O. Box 123 <br/>Cleveland, OH 44101 </p>
            <p>(123)456-7890</p>
        </div>
        <div className="socials">
        <a className="social" href="https://twitter.com/">
          <ImTwitter size={30}/>
        </a>
        <a className="social" href="https://instagram.com/">
          <GrInstagram size={30} />
        </a>
        </div>

      <p>Copyright 2023 Travel Boss</p>
    </footer>
    </div>
  );
};

export default Footer;
