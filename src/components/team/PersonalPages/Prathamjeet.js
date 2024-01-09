/**
 * @author Katelyn Wyandt
 * Personal Page for Prathamjeet, personal template 
 */

import Prathamjeet from "./../../../assets/images/team/Prathamjeet.png";
import PersonalTemplate from "./PersonalTemplate";
const PrathamjeetPage = () => {
    return (
        <div className="personalHeader">
            <PersonalTemplate
                image = {Prathamjeet}
                firstLine = {<b>Prathamjeet Singh</b>}
                secondLine = "Research Assistant"
                fourthLine = "Prathamjeet (Ishu) Singh graduated in May 2022 with his Bachelor's of Computer Science from the University of South Carolina. He joined Dr. Wu's lab in the summer of 2021 and has since then worked on multiple projects which have helped him to learn a lot about software development and data analytics. His favorite project has been designing and developing a multimodal Rubik's Cube learning platform, which he's had the opportunity to be a part of from the design stages. With the experience he has gained in Dr. Wu's lab, he is excited to start working at EY in August 2022."
            ></PersonalTemplate>
        </div>
    )
}

export default PrathamjeetPage;