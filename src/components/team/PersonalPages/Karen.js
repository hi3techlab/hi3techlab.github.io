/**
 * @author Katelyn Wyandt
 * Personal Page fo Karen Wong, utilizing personal template with hyperlink
 * 
 */
import Karen from "./../../../assets/images/team/Karen.png";
import PersonalTemplateLink from "./PersonalTemplateLink";
const KarenPage = () => {
    return (
        <div className="personalHeader">
            <PersonalTemplateLink
                image = {Karen}
                firstLine = {<b>Karen Wong</b>}
                secondLine = "Research Assistant"
                thirdLine = "https://www.kwong.design/"
                fourthLine = "Karen Wong graduated in May 2022 with her B.S. in Business Administration from the University of South Carolina. In the fall of 2022, she will be beginning a full-time UX Design role with a technology company. Karen enjoys excited about all things design & business and is constantly trying to find ways to integrate inclusive design to create a more accessible space for users."
            ></PersonalTemplateLink>
        </div>
    )
}

export default KarenPage;