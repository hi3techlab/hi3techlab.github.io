/**
 * Component for Current Projects 
 * Created by Ishu Singh
 * Edited by Sophie Azula 3/12/2023
 */

import { Link } from "react-router-dom";
import styled from 'styled-components';
import rubiksCube from "./../../../assets/images/home/rubiksCube.png";
import substanceUse from "./../../../assets/images/home/substanceUse.png";
import youthVaping from "./../../../assets/images/home/youthVaping.png";
import './CurrentProjects.css';
import Project from "../../../components/project/Project";

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const  CurrentProjects = () => {
    return (  
        <div className="currentProjects">
            {/*Heading current projects*/}
            <div className = "projectsHeader">
                <p className="header">
                    Current Projects
                    &#38; Publications
                </p>
            </div>
            <Project 
                image={rubiksCube}
                title={"ALLURE"}
                summary={"AI-Driven Rubik's Cube Project"}
                description={"Allure is an interactive educational interface "+
                "for teaching users critical problem solving skills."}
            />
            <Project 
                image={youthVaping}
                title={"QuitStart"}
                summary={"Preventative Rural Healthcare App"}
                description={"QuitStart is a mobile app made in tandem with the University"+ 
                "of Washington seeking to make resources to quit smoking more accessible."}
            />
            <Project 
                image={substanceUse}
                title={"MSN Task"}
                summary={"Dual-Task Interface Theory"}
                description={"MSN Task is a research project developed with the University"+ 
                " of Nevada to study user behavior in response to faux security prompts."}
            />

            <h1 className="currentProjects-viewmore">
                <Link to="/research" style={{color:"gray"}}>
                    <u>View More Projects</u>
                </Link>
            </h1>

            {/* <div className="currentProjectBlocks">
                <div className="currentProjectBlock">
                    <img src={rubiksCube} className="cp-image" alt="logo" />
                    <div className="project-button">
                      <StyledLink 
                      to="/research/AIDrivenRubiksCube"
                      ><p>ALLURE: AI Driven Rubiks Cube</p>
                      </StyledLink>
                    </div>
                </div>

                <div className="currentProjectBlock">
                    <img src={youthVaping} className="cp-image" alt="logo" />
                    <div className="project-button">
                      <StyledLink 
                      to="/research/YouthVaping"
                      ><p>Youth Vaping</p>
                      </StyledLink>
                    </div>
                </div>

                <div className="currentProjectBlock">
                    <img src={substanceUse} className="cp-image" alt="logo" />
                    <div className="project-button">
                      <StyledLink  
                      to="/research/SubstanceAbuse"
                      ><p>Substance Abuse</p>
                    </StyledLink>
                  </div>  
                </div>
            </div>
            <div className="currentProjectBlock">
                    <StyledLink to="/research">
                     <p className="viewMoreProjects">
                        View More Projects
                     </p>
                     </StyledLink>
              </div> */}
        </div>
    );
}
 
export default CurrentProjects;