import { Link } from "react-router-dom";
import rubiksCube from "./../../../assets/images/home/rubiksCube.png";
import maternalHealth from "./../../../assets/images/home/maternalHealth.png";
import covid19 from "./../../../assets/images/home/covid19.png";
import substanceUse from "./../../../assets/images/home/substanceUse.png";
import youthVaping from "./../../../assets/images/home/youthVaping.png";
import Arrow from "../../../assets/images/Arrow.svg";
import './researchCarousel.css';


import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext
  } from "pure-react-carousel";
// import Slider from "react-styled-carousel";

import "pure-react-carousel/dist/react-carousel.es.css";
  
const  researchCarousel = () => {
  return (
    <div className="carousel__container">
      <CarouselProvider
          naturalSlideWidth={6}
          naturalSlideHeight={6}
          totalSlides={5}
          visibleSlides={1}
          currentSlide={1}
          interval={10}
        >
          <div>
              <h1>
                Highlights
              </h1>
          </div>
          <div className="slider__positioning">
          <Slider>
            <Slide index={0}>
                  <div className="currentProjectBlock">
                      <img src={rubiksCube} className="cp-image" alt="logo" />
                      <Link 
                      className="projectLink-button" 
                      to="/research/AIDrivenRubiksCube">
                        {/* <p>AI Driven Rubik's Cube project</p> */}
                    </Link>
                  </div>
            </Slide>
            <Slide index={1}>
                  <div className="currentProjectBlock">
                      <img src={youthVaping} className="cp-image" alt="logo" />
                      <Link 
                      className="projectLink-button" 
                      to="/research/YouthVaping">
                        {/* <p>Youth Vaping</p> */}
                    </Link>
                  </div>
            </Slide>
            <Slide index={2}>
                  <div className="currentProjectBlock">
                      <img src={substanceUse} className="cp-image" alt="logo" />
                      <Link 
                      className="projectLink-button" 
                      to="/research/SubstanceAbuse">
                        {/* <p>Substance Abuse</p> */}
                    </Link>  
                  </div>
            </Slide>
            <Slide index={3}>
                <div className="currentProjectBlock">
                      <img src={maternalHealth} className="cp-image" alt="logo" />
                      <Link 
                      className="projectLink-button" 
                      to="/research/MaternalHealth">
                        {/* <p>Maternal Health</p> */}
                    </Link>    
                  </div>
            </Slide>
            <Slide index={4}>
                  <div className="currentProjectBlock">
                      <img src={covid19} className="cp-image" alt="logo" />
                      <Link 
                      className="projectLink-button" 
                      to="/research/Covid19">
                        {/* <p>Covid-19 Project</p> */}
                    </Link>
                  </div>
            </Slide>
          </Slider>
          <div className="cool-buttons">
          <ButtonBack class="button">
            <img src={Arrow} class="arrow"></img>
          </ButtonBack>
          <ButtonNext class="button">
            <img src={Arrow}></img>
          </ButtonNext>
          </div>
          </div>
        </CarouselProvider>
      </div>
  );
};
 
export default researchCarousel;