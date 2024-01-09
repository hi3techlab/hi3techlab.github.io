import HarveyPresent from "../../../assets/images/experience/Harvey_Presenting.jpg";
import KatelynPresent from "../../../assets/images/experience/Katelyn__Presenting.jpg";
import Everyone from "../../../assets/images/experience/everyone.jpg";
import Logo from "../../../assets/images/experience/TeamsLogo.png";
import "./FillerScroll.scss";


const LogoFiller = () => {
    return ( 
        <div className="container">
            <hr></hr>
            <div className="logo-slider" >
                <div>
                    <img src={HarveyPresent} />
                    <img src={KatelynPresent} />
                    <img src={Everyone} />
                    <img src={KatelynPresent} />
                    <img src={KatelynPresent} />
                    <img src={KatelynPresent} />
                    <img src={KatelynPresent} />
                    <img src={KatelynPresent} />
                    <img src={HarveyPresent} />
                    <img src={HarveyPresent} />
                    <img src={HarveyPresent} />
                </div>
            </div>
            <div className="image-margin" >
              <img src={Logo} />
            </div>
            <hr></hr>
        </div>
    );
}
 
export default LogoFiller;