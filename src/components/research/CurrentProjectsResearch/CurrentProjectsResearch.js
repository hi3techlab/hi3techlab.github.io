/**
 * @author Sophie Azula
 * 3/26/23
 * Current project page, to hold all current project links to Individual Pages
 */

import { Link } from "react-router-dom";

import rubiksCube from "../../../assets/images/home/rubiksCube.png";
import maternalHealth from "../../../assets/images/home/maternalHealth.png";
import covid19 from "../../../assets/images/home/covid19.png";
import substanceUse from "../../../assets/images/home/substanceUse.png";
import youthVaping from "../../../assets/images/home/youthVaping.png";
import "./CurrentProjectsResearch.css";

const CurrentProjects = () => {

    return(
        <div className="borderedSection">
        <p className = "header"> Our Projects </p>
            <div className="currentProjectBlocks" >
                {/* Rubik's Cube Project */}
                <div >
                    <img src={rubiksCube} className="cp-image" alt="logo" />
                    <Link 
                      className="projectLink-button" 
                      to="AIDrivenRubiksCube"
                      ><p>AI Driven Rubik's Cube project</p>
                    </Link>
                </div>
                {/* Youth Vaping Project */}
                <div>
                    <img src={youthVaping} className="cp-image" alt="logo" />
                    <Link 
                      className="projectLink-button" 
                      to="YouthVaping"
                      ><p>Youth Vaping</p>
                    </Link>
                </div>
                {/* Substance Abuse Project */}
                <div>
                    <img src={substanceUse} className="cp-image" alt="logo" />
                    <Link 
                      className="projectLink-button" 
                      to="SubstanceAbuse"
                      ><p>Substance Abuse Disorder</p>
                    </Link>  
                  </div>                
            </div>
        </div>
    );
};

export default CurrentProjects;