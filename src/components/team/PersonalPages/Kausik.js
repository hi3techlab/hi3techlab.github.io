/**
 * @author Katelyn Wyandt
 * Personal Page for Kausik, personal template 
 */

import Filler from "./../../../assets/images/team/Filler.png";
import PersonalTemplate from "./PersonalTemplate";
const KausikPage = () => {
    return (
        <div className="personalHeader">
            <PersonalTemplate
                image = {Filler}
                firstLine = {<b>Kausik Lakkaraju</b>}
                secondLine = "Research Assistant"
                fourthLine = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            ></PersonalTemplate>
        </div>
    )
}

export default KausikPage;