/**
 * @author Katelyn Wyandt
 * Personal Page for Nupur, personal template 
 */

import Nupur from "./../../../assets/images/team/Nupur.png";
import PersonalTemplate from "./PersonalTemplate";
const NupurPage = () => {
    return (
        <div className="personalHeader">
            <PersonalTemplate
                image = {Nupur}
                firstLine = {<b>Nupur Shah</b>}
                secondLine = "Research Assistant"
                fourthLine = "I'm Nupur Shah, a student of Computer Science major and Business Administration minor at UofSC. Currently, I'm working on the research topic of 'Effects of SUD on pregnant women's health'. I've been working with women empowerment clubs for the past few months, so the topic of women's health is a major concern to me. I like working on research as it gives me real world experience of my major. I'm looking forward to working on more such research projects and internships."
            ></PersonalTemplate>
        </div>
    )
}

export default NupurPage;