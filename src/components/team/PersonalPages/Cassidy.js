/**
 * @author Katelyn Wyandt
 * Personal Page for Cassidy, personal template 
 */

import Cassidy from "./../../../assets/images/team/Cassidy.png";
import PersonalTemplate from "./PersonalTemplate";
const CassidyPage = () => {
    return (
        <div className="personalHeader">
            <PersonalTemplate
                image = {Cassidy}
                firstLine = {<b>Cassidy Bradley</b>}
                secondLine = "Research Assistant"
                fourthLine = "Cassidy Bradley graduated in May 2022 with her Master's in Computer Science from the University of South Carolina. She received her Bachelor's in Computer Science with a minor in Business Administration from UofSC in May 2021. In the summer of 2022, she will be beginning a full-time software engineering role with a financial services company. Cassidy enjoys exploring the connection between humans and technology as well as how we can better design technology for users."
            ></PersonalTemplate>
        </div>
    )
}

export default CassidyPage;