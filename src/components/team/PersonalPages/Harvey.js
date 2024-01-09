/**
 * @author Katelyn Wyandt
 * Personal Page for Harvey, personal template 
 */

import Harvey from "./../../../assets/images/team/Harvey.png";
import PersonalTemplate from "./PersonalTemplate";
const HarveyPage = () => {
    return (
        <div className="personalHeader">
            <PersonalTemplate
                image = {Harvey}
                firstLine = {<b>Harvey Viallanueva</b>}
                secondLine = "Research Assistant"
                fourthLine = "Harvey Villanueva is a computer science major with an application area in data science, and is currently researching evaluating substance use disorders via social media analytics. In the future, he'd like to continue developing my data science techniques through the various projects this lab has! In his free time he like working out, watching anime, and producing music."
            ></PersonalTemplate>
        </div>
    )
}

export default HarveyPage;