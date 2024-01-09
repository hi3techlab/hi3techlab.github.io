/**
 * @author Katelyn Wyandt
 * Personal Page for Alaina, personal template 
 */

import Alaina from "./../../../assets/images/team/Alaina.png";
import PersonalTemplate from "./PersonalTemplate";
const AlainaPage = () => {
    return (
        <div className="personalHeader">
            <PersonalTemplate
                image = {Alaina}
                firstLine = {<b>Alaina Haylock</b>}
                secondLine = "Research Assistant"
                fourthLine = "My name is Alaina Haylock, an IT major and neuroscience minor at my first year at the University of South Carolina. I transferred in from Greenville Technical College. So far, I’ve been able to experience clubs like rugby and National Society of Black Engineers. I currently intern at the Office of the State Treasury and hope to pursue a career related to human-computer interaction. I look forward to more research."
            ></PersonalTemplate>
        </div>
    )
}

export default AlainaPage;