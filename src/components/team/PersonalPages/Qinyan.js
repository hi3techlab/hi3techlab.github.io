/**
 * @author Katelyn Wyandt
 * Personal Page for Qinyan, personal template 
 * 
 * @TODO : Make description longer, issue with text box;
 */

import Qinyan from "./../../../assets/images/team/Qinyan.png";
import PersonalTemplate from "./PersonalTemplate";
const QinyanPage = () => {
    return (
        <div className="personalHeader">
            <PersonalTemplate
                image = {Qinyan}
                firstLine = {<b>Qinyan Shen</b>}
                secondLine = "Research Assistant"
                fourthLine = "Hi, my name is Qinyan (Kate) Shen. I'm a 3rd year statistics PhD student. I'm passionate about data analytics and applying analytics to quantitative research. I enjoy doing research collaboratively and working in Dr. Wu's lab!"
            ></PersonalTemplate>
        </div>
    )
}

export default QinyanPage;