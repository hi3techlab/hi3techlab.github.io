/**
 * @author Katelyn Wyandt
 * Personal Page for Gabe, personal template with hyperlink
 */

import Gabe from "./../../../assets/images/team/Gabe.png";
import PersonalTemplateLink from "./PersonalTemplateLink";
const GabePage = () => {
    return (
        <div className="personalHeader">
            <PersonalTemplateLink
                image = {Gabe}
                firstLine = {<b>Gabriel Blackwell</b>}
                secondLine = "Research Assistant, Lab Manager"
                thirdLine = "https://gabrielsblackwell.me"
                fourthLine = "Gabriel Blackwell is currently a junior studying for a Bachelor's in Computer Engineering at the University of South Carolina. His interests in research include Artificial Intelligence, Human-Robotics interactivity, and Full-Stack development. Currently he is working on Human-Robotics interactions with Augmented Reality. In the future, through research, he would like to grow numerous skills across the field outside of his particular interests."
            ></PersonalTemplateLink>
        </div>
    )
}

export default GabePage;