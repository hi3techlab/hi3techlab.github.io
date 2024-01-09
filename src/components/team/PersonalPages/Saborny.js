/**
 * @author Katelyn Wyandt
 * Personal Page for Saborny, personal template 
 */

import Saborny from "./../../../assets/images/team/Saborny.png";
import PersonalTemplate from "./PersonalTemplate";
const SabornyPage = () => {
    return (
        <div className="personalHeader">
            <PersonalTemplate
                image = {Saborny}
                firstLine = {<b>Saborny Sen Gupta</b>}
                secondLine = "Research Assistant"
                fourthLine = "Saborny is a PhD student of computer science. She joined the lab spring 2022 and has been involved in a variety of projects that have expanded her skills and interests in computer science. Her current projects focus on substance use disorder, mobile app development, and quantitative data analysis."
            ></PersonalTemplate>
        </div>
    )
}

export default SabornyPage;