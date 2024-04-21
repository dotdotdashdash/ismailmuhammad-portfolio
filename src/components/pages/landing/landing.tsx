// src/pages/LandingPage.tsx
import React from 'react';
import './landing.css';

const LandingPage: React.FC = () => {
  return (

    <div className="landing-page d-flex justify-content-center align-items-center vh-100">
    <div className="col-lg-4 paragraph-container text-left">
      <p className="centered-paragraph ">
      👋 <br/>Hey, Ismail here! <br/><br/>
      I'm a passionate Software Engineer, focused primarily on building robust and scalable web backend solutions.<br/><br/>
      I possess expertise in leveraging Go(Golang) and Node.JS to build systems that outlive the test of time and space.<br/><br/>
      You can get in touch with me at <strong>hello@ismailmuhammad.com</strong>.
      </p>
    </div>
  </div>
  );
};

export default LandingPage;
