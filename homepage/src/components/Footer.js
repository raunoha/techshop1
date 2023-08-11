import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../styles/Footer.css";

function Footer() {
  const instagramProfileUrl = 'https://www.instagram.com/your_username/';
  const facebookProfileUrl = 'https://www.facebook.com/your_username/';
  const linkedInProfileUrl = 'https://www.linkedin.com/in/your_username/';
  
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href={instagramProfileUrl} target="_blank" rel="noopener noreferrer">
          <InstagramIcon />
        </a>
        <a href={facebookProfileUrl} target="_blank" rel="noopener noreferrer">
          <FacebookIcon />
        </a>
        <a href={linkedInProfileUrl} target="_blank" rel="noopener noreferrer">
          <LinkedInIcon />
        </a>
      </div>
      <p> &copy; 2023 rahawebsite.web.app</p>
    </div>
  );
};

export default Footer;