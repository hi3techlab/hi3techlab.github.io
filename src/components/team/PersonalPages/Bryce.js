/**
 * @author Katelyn Wyandt
 * Personal Page for Bryce, personal template 
 */

import Bryce from "./../../../assets/images/team/Bryce.png";
import PersonalTemplate from "./PersonalTemplate";
const BrycePage = () => {
    return (
        <div className="personalHeader">
            <PersonalTemplate
                image = {Bryce}
                firstLine = {<b>Bryce Christian</b>}
                secondLine = "Research Assistant"
                fourthLine = "Bryce Christian is pursuing her bachelor's degree in interaction design as a part of the University of South Carolina Honors College's BARSC program. Her interests lie in graphic design, user experience, and accessible design. She is excited to be a part of Dr. Wu's lab and learn more about human-computer interactions."
            ></PersonalTemplate>
        </div>
    )
}

export default BrycePage;