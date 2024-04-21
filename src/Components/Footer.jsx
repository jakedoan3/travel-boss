import React from "react";
import { ImTwitter } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="footer">
      <footer>
        <div>
          <p>
            Ready to plan your next trip?
            <br />
            <a href="/contact">Contact Form</a>
            <br />
            <a href="mailto:travelboss70@gmail.com">Email me</a>
          </p>
        </div>
        <div className="socials">
          <a className="social" href="https://twitter.com/">
            <ImTwitter size={25} />
          </a>
          <a className="social" href="https://instagram.com/">
            <GrInstagram size={25} />
          </a>
        </div>
        <p>Copyright 2024 Travel Boss</p>
      </footer>
    </div>
  );
};

export default Footer;
