/**
 * @author Katelyn Wyandt
 * Personal Page for Yuqi, personal template 
 */

import Yuqi from "./../../../assets/images/team/Yuqi.png";
import PersonalTemplate from "./PersonalTemplate";
const YuqiPage = () => {
    
    return (
        <div className="personalHeader">
            <PersonalTemplate
                image = {Yuqi}
                firstLine = {<b>Yuqi Christian</b>}
                secondLine = "Research Assistant"
                fourthLine = "Yuqi Wu is a Ph.D. candidate in Public Health from the Department of Health Services Policy and Management at the University of South Carolina. She received her master’s degrees in both Public Health and Public Affairs from the University of Missouri. Yuqi conducts healthcare and translational research using both structured and unstructured health data to solve public health problems in the areas of cancer prevention, chronic disease management, and clinical/surgical outcomes by applying statistical and artificial intelligence methods, including machine learning, deep learning, natural language processing, etc."
            ></PersonalTemplate>
        </div>
    )
}

export default YuqiPage;