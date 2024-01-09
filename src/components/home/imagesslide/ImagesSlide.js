import { Slide } from "react-slideshow-image";
import CubeImage from "./../../../assets/images/home/cube.png";
import VapingImage from "./../../../assets/images/home/vaping.png";
import SUDImage from "./../../../assets/images/home/sud.png";
import PrenatalImage from "./../../../assets/images/home/prenatal.png";
import Covid19Image from "./../../../assets/images/home/covid19.png";
import './ImagesSlide.css';

const properties = {
  duration: 5000,
  transitionDuration: 1000,
  infinite: true,
  indicators: true,
  arrows: true,
};

const ImagesSlide = () => {
  return (
    <div className="slide-container">
      <br />
      
      <br />
      <Slide {...properties}>
        <div className="each-slide">
          <img src={CubeImage} alt="" className="slide-image-settings" />
        </div>
        <div className="each-slide">
          <img src={VapingImage} alt="" className="slide-image-settings" />
        </div>
        <div className="each-slide">
          <img src={SUDImage} alt="" className="slide-image-settings" />
        </div>
        <div className="each-slide">
          <img src={PrenatalImage} alt="" className="slide-image-settings" />
        </div>
        <div className="each-slide">
          <img src={Covid19Image} alt="" className="slide-image-settings" />
        </div>
      </Slide>
    </div>
  );
};

export default ImagesSlide;
