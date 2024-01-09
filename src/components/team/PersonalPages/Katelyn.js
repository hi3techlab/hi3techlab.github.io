/**
 * @author Katelyn Wyandt
 * Personal Page for Katelyn, personal template 
 */

import Katelyn from "./../../../assets/images/team/Katelyn.png";
import PersonalTemplate from "./PersonalTemplate";
const KatelynPage = () => {
    return (
        <div className="personalHeader">
            <PersonalTemplate
                image = {Katelyn}
                firstLine = {<b>Katelyn Wyandt</b>}
                secondLine = "Research Assistant, Lab Manager"
                fourthLine = "Katelyn Wyandt is a junior Carolina Scholar pursuing her bachelor's degree majoring in Computer Science and minoring in Asian Studies at the University of South Carolina. Her research interests include Human-Computer Interactions, User Design Experience, and Explainable Artificial Intelligence. Right now, she is excited to be working on multiple projects involving human-centered design, user sentiment analysis and gamification design for inclusive learning."
            ></PersonalTemplate>
        </div>
    )
}

export default KatelynPage;