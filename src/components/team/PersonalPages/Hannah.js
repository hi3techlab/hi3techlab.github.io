/**
 * @author Katelyn Wyandt
 * Personal Page for Hannah, personal template 
 */

import Hannah from "./../../../assets/images/team/Hannah.png";
import PersonalTemplate from "./PersonalTemplate";
const HannahPage = () => {
    return (
        <div className="personalHeader">
            <PersonalTemplate
                image = {Hannah}
                firstLine = {<b>Hannah Shead</b>}
                secondLine = "Research Assistant"
                fourthLine = "I have a B.S. in Mathematics with a minor in Computer Science. Currently I am working to complete a masters in Biological and Computational Mathematics at Augusta University where I was awarded a teaching assistantship. Additional educational experiences include being chosen as one of eight participants in the University of South Carolina's T35 Big Data Science Traineeship funded by the NIH and working as a student mentor to recipients of the POPUPS scholarship program funded by the NSF during the last year of my undergraduate degree."
            ></PersonalTemplate>
        </div>
    )
}

export default HannahPage;