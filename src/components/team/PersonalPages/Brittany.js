/**
 * @author Katelyn Wyandt
 * Personal Page for Brittany, personal template 
 */

import Brittany from "./../../../assets/images/team/Brittany.png";
import PersonalTemplate from "./PersonalTemplate";
const BrittanyPage = () => {
    return (
        <div className="personalHeader">
            <PersonalTemplate
                image = {Brittany}
                firstLine = {<b>Brittany Capps</b>}
                secondLine = "Research Assistant"
                fourthLine = "Brittany Capps is a 4th year PhD candidate in Composition and Rhetoric at the University of South Carolina. Her current research combined aspects of Genre Awareness, Teaching and Writing, and Teaching for Transfer pedagogies to meet students' needs in First-Year Composition. After graduating, she hopes to become a UX researcher and help create projects that serve users, particularly in health and wellness."
            ></PersonalTemplate>
        </div>
    )
}

export default BrittanyPage;