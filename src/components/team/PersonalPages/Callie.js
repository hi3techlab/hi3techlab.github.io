/**
 * @author Katelyn Wyandt
 * Personal Page for Callie, personal template 
 */

import Callie from "./../../../assets/images/team/Callie.png";
import PersonalTemplate from "./PersonalTemplate";
const CalliePage = () => {
    return (
        <div className="personalHeader">
            <PersonalTemplate
                image = {Callie}
                firstLine = {<b>Callie Hribar</b>}
                secondLine = "Research Assistant"
                fourthLine = "Callie is studying visual communications at the University of South Carolina. As a member of the lab she was involved in usability testing to study user experiences on our projects and worked closely with the development team to optimize user experiences."
            ></PersonalTemplate>
        </div>
    )
}

export default CalliePage;