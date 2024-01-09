/**
 * @author Katelyn Wyandt
 * Personal Page for Sophie, personal template 
 */

import Sophie from "./../../../assets/images/team/Sophie.png";
import PersonalTemplate from "./PersonalTemplate";
const SophiePage = () => {
    return (
        <div className="personalHeader">
            <PersonalTemplate
                image = {Sophie}
                firstLine = {<b>Sophie Azula</b>}
                secondLine = "Research Assistant"
                fourthLine = "Sophie Azula is a senior at the University of South Carolina pursuing her bachelor's degree in Computer Science with a minor in Spanish. Her research interests include software design, web development, and artificial intelligence. She is currently working on a research project involving human-chatbot interaction and web/mobile application development. After college, she is looking to pursue a career in the software industry with the humanitarian goal of increasing global access to technology and digital literacy."
            ></PersonalTemplate>
        </div>
    )
}

export default SophiePage;