/**
 * @author Katelyn Wyandt
 * Personal Page for Fritz, personal template 
 */

import Fritz from "./../../../assets/images/team/Fritz.png";
import PersonalTemplate from "./PersonalTemplate";
const FritzPage = () => {
    return (
        <div className="personalHeader">
            <PersonalTemplate
                image = {Fritz}
                firstLine = {<b>Dr. Fritz Culp</b>}
                secondLine = "Post-Doctaral Researcher"
                fourthLine = "Fritz Culp is a recent PhD graduate from the Spanish program at UofSC. His dissertation studied mining conflicts in the Andes — focusing on the outcomes of corporate welfare and resettlement design. In his free time, Fritz enjoys playing with his 3 yr-old twins and volunteering at Hack for LA as a UX Researcher. He looks forward to working on projects that engage in qualitative user research—and in a broader sense—anything that deals with discovering why people do the things they do."
            ></PersonalTemplate>
        </div>
    )
}

export default FritzPage;