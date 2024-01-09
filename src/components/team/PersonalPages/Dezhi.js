/**
 * @author Katelyn Wyandt
 * Personal Page fo Dezhi Wu, utilizing personal template with hyperlink
 * 
 */
import Dezhi from "./../../../assets/images/team/Dezhi.png";
import PersonalTemplateLink from "./PersonalTemplateLink";

//import PersonalTemplate from "../PersonalPages/personaltemplate/PersonalTemplate";

const DezhiPage = () => {
    return (
        <div className="personalHeader">
            <PersonalTemplateLink
                image = {Dezhi}
                firstLine = {<b>Dr. Dezhi Wu</b>}
                secondLine = "Associate Professor at USC"
                thirdLine = "https://sites.google.com/view/wudezhi/home"
                fourthLine = "Dezhi Wu, Ph.D., PMP, is an associate professor in the Department of Integrated Information Technology at the University of South Carolina, Columbia, SC, USA. She is the former AIS SIGHCI Chair (2009-2011). Her research interests include human-computer/AI interaction, explainable AI, conversational UI design, health informatics, social media analytics, health IT, and information security. She has widely published in technology and business journals such as Information & Management, Information Technology and People, Computers in Human Behavior, Communications of the Association for Information Systems, Journal of Medical Internet Research, International Journal of Medical Informatics, Frontiers in Big Data, Computer & Education, Journal of Information Systems Security, and others in additional to ICIS, HICSS, ECIS, AMCIS, PACIS, AAAI, IEEE ICHI, and HCII conference proceedings. She regularly serves as an HCI track chair and AE for several leading conferences including ICIS, AMCIS, PACIS, and ECIS, and AIS Transactions on Human-Computer Interaction, and European Journal of Information Systems for its special issues on gamifications and security & privacy, and Frontiers for its special issue on Data Mining of Social Media in Healthcare"
            ></PersonalTemplateLink>
        </div>
    )
}

export default DezhiPage;