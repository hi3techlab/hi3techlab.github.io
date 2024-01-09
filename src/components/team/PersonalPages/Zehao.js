/**
 * @author Katelyn Wyandt
 * Personal Page for Zehao, personal template 
 */

import Zehao from "./../../../assets/images/team/Zehao.png";
import PersonalTemplate from "./PersonalTemplate";
const ZehaoPage = () => {
    return (
        <div className="personalHeader">
            <PersonalTemplate
                image = {Zehao}
                firstLine = {<b>Zehao Yu</b>}
                secondLine = "Research Assistant"
                fourthLine = "My name is Zehao, I am a 4th year PhD in Stats. Currently I am working on my own thesis about directional data. In addition, I am working with Prof. Wu for the summer and we are going to work on the SUD data."
            ></PersonalTemplate>
        </div>
    )
}

export default ZehaoPage;