import "./BannerTemplate.css"
import header from "./../../assets/images/research/header.png";

const BannerTemplate = (props) => {
    return(
        <div className = "bannerWelcome">
            {/*Banner Image, constant*/}
            <div className = "image-filter"> <img src = {header} className="bannerImage"></img></div>
            
            {/*Banner Title*/}
            <div className = "banner-title"> {props.firstLine} </div>
        </div>
    );
};

export default BannerTemplate