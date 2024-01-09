/**
 * @author Katelyn Wyandt
 * Personal Page for Jonathan, personal template 
 */

import Jonathan from "./../../../assets/images/team/Jonathan.png";
import PersonalTemplate from "./PersonalTemplate";
const JonathanPage = () => {
    return (
        <div className="personalHeader">
            <PersonalTemplate
                image = {Jonathan}
                firstLine = {<b>Jonathan Fu</b>}
                secondLine = "Research Assistant"
                fourthLine = "Jonathan Fu is a sophomore in highschool with an early interest in engaging in research. He loves technology and is excited to learn more and collaborate with the undergraduate and graduate students and learn about the process or scientific research."
            ></PersonalTemplate>
        </div>
    )
}

export default JonathanPage;