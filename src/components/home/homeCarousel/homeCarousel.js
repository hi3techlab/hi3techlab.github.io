import { Link } from "react-router-dom";
import Arrow from "../../../assets/images/Arrow.svg";
import './homeCarousel.css';
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext
  } from "pure-react-carousel";
import img1 from '../../../assets/images/home/carouselImages/20210627_110711000_iOS 1.png';
import img2 from '../../../assets/images/home/carouselImages/20210627_111732000_iOS 1.png';
import img3 from '../../../assets/images/home/carouselImages/20210627_122056000_iOS 2.png';
import img4 from '../../../assets/images/home/carouselImages/20230211_110417110_iOS.jpg';
import img5 from '../../../assets/images/home/carouselImages/Amitta MJF poster presentation-July2023.png';
import img6 from '../../../assets/images/home/carouselImages/EEG_Experience.jpg';
import img7 from '../../../assets/images/home/carouselImages/Gabe MJF poster presentation-July2023.png';
import img8 from '../../../assets/images/home/carouselImages/Harvey_Presenting.jpg';
import img9 from '../../../assets/images/home/carouselImages/Katelyn__Presenting.jpg';
import img10 from '../../../assets/images/home/carouselImages/Mia MJF poster presentation-July2023.png';
import img11 from '../../../assets/images/home/carouselImages/Sam MJF poster presentation-July2023.png';

const  HomeCarousel = () => {
  return (
    <div className="carousel__container">
      <CarouselProvider
          naturalSlideWidth={5}
          naturalSlideHeight={5}
          totalSlides={11}
          visibleSlides={1}
          currentSlide={1}
          isPlaying={true}
          isIntrinsicHeight={true}
          interval={2000}
          infinite={true}
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
                      <img src={img1} className="div-image" alt="logo" />
                  </div>
            </Slide>
            <Slide index={1}>
                  <div className="currentProjectBlock">
                      <img src={img2} className="div-image" alt="logo" />
                  </div>
            </Slide>
            <Slide index={2}>
                  <div className="currentProjectBlock">
                      <img src={img3} className="div-image" alt="logo" />
                  </div>
            </Slide>
            <Slide index={3}>
                <div className="currentProjectBlock">
                      <img src={img4} className="div-image" alt="logo" />  
                  </div>
            </Slide>
            <Slide index={4}>
                  <div className="currentProjectBlock">
                      <img src={img5} className="div-image" alt="logo" />
                  </div>
            </Slide>
            <Slide index={5}>
                  <div className="currentProjectBlock">
                      <img src={img6} className="div-image" alt="logo" />
                  </div>
            </Slide>
            <Slide index={6}>
                  <div className="currentProjectBlock">
                      <img src={img7} className="div-image" alt="logo" />
                  </div>
            </Slide>
            <Slide index={7}>
                  <div className="currentProjectBlock">
                      <img src={img8} className="div-image" alt="logo" />
                  </div>
            </Slide>
            <Slide index={8}>
                  <div className="currentProjectBlock">
                      <img src={img9} className="div-image" alt="logo" />
                  </div>
            </Slide>
            <Slide index={9}>
                  <div className="currentProjectBlock">
                      <img src={img10} className="div-image" alt="logo" />
                  </div>
            </Slide>
            <Slide index={10}>
                  <div className="currentProjectBlock">
                      <img src={img11} className="div-image" alt="logo" />
                  </div>
            </Slide>
          </Slider>
          <div className="cool-buttons">
          <ButtonBack className="button">
            <img src={Arrow} className="arrow" style={{transform:'rotate(.5turn)'}}></img>
          </ButtonBack>
          <ButtonNext className="button">
            <img src={Arrow} className="arrow"></img>
          </ButtonNext>
          </div>
          </div>
        </CarouselProvider>
      </div>
  );
};
 
export default HomeCarousel;