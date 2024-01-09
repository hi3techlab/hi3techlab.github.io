/**
 * @author Katelyn Wyandt
 * Personal Page for Vidhee, personal template 
 */

import Vidhee from "./../../../assets/images/team/Vidhee.png";
import PersonalTemplate from "./PersonalTemplate";
const VidheePage = () => {
    return (
        <div className="personalHeader">
            <PersonalTemplate
                image = {Vidhee}
                firstLine = {<b>Vidhee Patel</b>}
                secondLine = "Research Assistant"
                fourthLine = "Vidhee recently obtained her B.S. in computer science from the University of South Carolina. She is now working in the private sector as a software engineer. As a member of the lab her primary involvement was as a software developer for multiple projects. Additionally, worked closely with the AI institute to further develop our projects."
            ></PersonalTemplate>
        </div>
    )
}

export default VidheePage;