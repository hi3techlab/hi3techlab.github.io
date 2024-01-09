/**
 * @author Katelyn Wyandt
 * Personal Page for Mia, personal template 
 */

import Mia from "./../../../assets/images/team/Mia.png";
import PersonalTemplate from "./PersonalTemplate";
const MiaPage = () => {
    return (
        <div className="personalHeader">
            <PersonalTemplate
                image = {Mia}
                firstLine = {<b>Mia Silver</b>}
                secondLine = "Research Assistant"
                fourthLine = "Mia Silver is a junior pursuing her bachelors degree in computer science with a minor in media arts. Her interests lie in media animations, front end development and generative AI. She loves to learn about new ways to combine art and technology, and has enjoyed working in human-computer interactions."
            ></PersonalTemplate>
        </div>
    )
}

export default MiaPage;