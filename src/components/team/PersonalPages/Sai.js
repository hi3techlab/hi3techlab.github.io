/**
 * @author Katelyn Wyandt
 * Personal Page for Sai, personal template 
 */

import Sai from "./../../../assets/images/team/Sai.png";
import PersonalTemplate from "./PersonalTemplate";
const SaiPage = () => {
    return (
        <div className="personalHeader">
            <PersonalTemplate
                image = {Sai}
                firstLine = {<b>Sai Vuruma</b>}
                secondLine = "Graduate Assistant"
                fourthLine = "Sai is pursuing a master's degree in computer science at the University of South Carolina. He has experience working in the private sector as a software engineer and his interests lie in full stack development, generative AI, and natural language processing. He enjoys working collaboratively and taking on new challenges in the lab. "
            ></PersonalTemplate>
        </div>
    )
}

export default SaiPage;