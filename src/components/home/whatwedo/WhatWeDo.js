import Block1Image from "./../../../assets/images/home/wwd-block1.png";
import Block2Image from "./../../../assets/images/home/wwd-block2.png";
import Block3Image from "./../../../assets/images/home/book.png";
import WWDT from './WWDT';
import './WhatWeDo.css';
import "./WWDT.scss";
const header = "What We Do";

const WhatWeDo = () => {
  const HCI = (
    <ul className = "font">
      <li>Gamification design</li>
      <li>Mixed reality immersive learning</li>
      <li>Scaffolding design</li>
      <li>Metacognitive thinking​</li>
      <li>Inclusive technological design</li>
      <li>Multi-modal learning platforms</li>
      <li>Online learning</li>
    </ul>
  );

  const Health = (
    <ul className = "font">
      <li>Social media data</li>
      <li>Youth vaping​</li>
      <li>Substance use disorder (SUD)</li>
      <li>Perinatal SUD​</li>
      <li>Electronic health records​</li>
      <li>Maternal health​</li>
      <li>Telehealth​ Health disparity and racial equity​</li>
      <li>COVID-19​</li>
    </ul>
  );

  const TBD = (
    <ul className="font">
      <li>Human-Computer/AI Interaction</li>
      <li>Explainable AI</li>
      <li>Conversational user interface design</li>
      <li>AI-driven intervention program design and evaluation</li>
      <li>Generative AI</li>
    </ul>
  );

  return (
    <div className="big-container">
      <h1>
        <p className="header">
            About Us
        </p>
      </h1>
      <div className="first-flex__container">
        <p className="big-container__tag">who we are</p>
        <div className="first-red-outer">
          <div className="white-inner">
            <p className = "what-we-do-text">
            HI3 Tech lab is an interdisciplinary research lab at the University of 
            South Carolina. Founded by Dr. Dezhi Wu, our research uses technology to 
            bridge gaps in education, healthcare, and human-computer interactions. 
            </p>
          </div>
        </div>

      </div>

      <div className="second-flex__container">
        <div className="second-red-outer">
          <div className="flex-container">
            <WWDT image={Block3Image} heading={"Education"} list={HCI} />
            <WWDT image={Block2Image} heading={"Health Informatics"} list={Health} />
            <WWDT image={Block1Image} heading={"AI Technology"} list={TBD} />
          </div>
        </div>
        <p>what we do</p>
      </div>
{/* 
      <div className="flex-container">
          <WWDT image={Block1Image} heading={"Human-Computer/AI Interaction"} list={HCI} />
          <WWDT image={Block2Image} heading={"Health Informatics"} list={Health} />
          <WWDT image={Block1Image} heading={"TBD"} list={TBD} />
      </div> */}
    </div>
  );
};

export default WhatWeDo;
