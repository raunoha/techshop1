import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import DownloadIcon from '@mui/icons-material/Download';
import "../styles/Home.css";

function Homepage() {

  
    const fileUrl = "Rauno_Harkmann_CV.pdf"
  

  return (
    <div className="home">
      <div className="about">
      <img className='frontpic' src="https://www.cvkeskus.ee/cv_photos/2020/27/1949253-1e45df94.jpeg" alt="" /> 
        <h2> Hi, my name is Rauno </h2>
        <div className="prompt">
          <p>A junior software developer with a passion for learning and creating.</p>
          <LinkedInIcon />
          <EmailIcon />
          <GitHubIcon />
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, HTML, CSS, i18n,
              Ionic, BootStrap, MaterialUI, NPM, TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            {/* <h2>Back-End</h2>
            <span>
              NodeJS, Java Spring, .NET, ExpressJS, GraphQL, ApolloServer,
              MySQL, MongoDB, DynamoDB, DigitalOcean, AWS S3, MS SQL
  </span> */ }
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, TypeScript, </span>
          </li>
        </ol>
      </div>
      <a href={fileUrl} download>
      <DownloadIcon /> 
      Download  CV
      </a>
    </div>
  );
}
    
  

export default Homepage