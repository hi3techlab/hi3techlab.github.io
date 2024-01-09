//import all team member images
import Cassidy from "./../../assets/images/team/Cassidy.png";
import Prathamjeet from "./../../assets/images/team/Prathamjeet.png";
import Karen from "./../../assets/images/team/Karen.png";
import Brittany from "./../../assets/images/team/Brittany.png";
import Yuqi from "./../../assets/images/team/Yuqi.png";
import Hannah from "./../../assets/images/team/Hannah.png";
import Vidhee from "./../../assets/images/team/Vidhee.png";
import Callie from "./../../assets/images/team/Callie.png";
import Alaina from "./../../assets/images/team/Alaina.png";
import Filler from "./../../assets/images/team/Filler.png";
import MemberTemplate from "../team/membertemplate/MemberTemplate";
//call member template

const AlumniTeam = () => {
    return (
        <div className="borderedSection">
            {/*Heading AlumniRight Align*/}
            <p className = "header">
                    Team Alumni
            </p>
            <div className= "currentTeam">
                {/*Cassidy Bradley*/}
                <MemberTemplate
                    firstLine= {<b>Cassidy Bradley</b>}
                    secondLine = {<i>, B.S., M.S.</i>}
                    thirdLine = "Research Assistant"
                    image = {Cassidy}
                    fourthLine = "Cassidy"
                ></MemberTemplate>

                {/*Prathamjeet Singh*/}
                <MemberTemplate
                    firstLine= {<b>Prathamjeet Singh</b>}
                    secondLine = {<i>, B.S.</i>}
                    thirdLine = "Research Assistant"
                    image = {Prathamjeet}
                    fourthLine = "Prathamjeet"
                ></MemberTemplate>

                {/*Karen Wong*/}
                <MemberTemplate
                    firstLine= {<b>Karen Wong</b>}
                    secondLine = {<i>, B.S.</i>}
                    thirdLine = "Research Assistant"
                    image = {Karen}
                    fourthLine = "Karen"
                ></MemberTemplate>

                {/*Brittany Capps*/}
                <MemberTemplate
                    firstLine= {<b>Brittany Capps</b>}
                    secondLine = {<i>, Ph. D.</i>}
                    thirdLine = "Research Assistant"
                    image = {Brittany}
                    fourthLine = "Brittany"
                ></MemberTemplate>

                {/*Yuqi Wu*/}
                <MemberTemplate
                    firstLine= {<b>Yuqi Wu</b>}
                    secondLine = {<i>, Ph.D. </i>}
                    thirdLine = "Research Assistant"
                    image = {Yuqi}
                    fourthLine = "Yuqi"
                ></MemberTemplate>

                {/*Hannah Shead*/}
                <MemberTemplate
                    firstLine= {<b>Hannah Shead</b>}
                    secondLine = {<i>, B.S.</i>}
                    thirdLine = "Research Assistant"
                    image = {Hannah}
                    fourthLine = "Hannah"
                ></MemberTemplate>

                {/*Vidhee Patel*/}
                <MemberTemplate
                    firstLine= {<b>Vidhee Patel</b>}
                    secondLine = {<i>B.S.</i>}
                    thirdLine = "Research Assistant"
                    image = {Vidhee}
                    fourthLine = "Vidhee"
                ></MemberTemplate>

                {/*Callie Hribar*/}
                <MemberTemplate
                    firstLine= {<b>Callie Hribar</b>}
                    secondLine = {<i></i>}
                    thirdLine = "Research Assistant"
                    image = {Callie}
                    fourthLine = "Callie"
                ></MemberTemplate>

                {/*Alaina Haylock*/}
                <MemberTemplate
                    firstLine= {<b>Alaina Haylock</b>}
                    secondLine = {<i></i>}
                    thirdLine = "Research Assistant"
                    image = {Alaina}
                    fourthLine = "Alaina"
                ></MemberTemplate>

            </div>
        </div>
    )
}

export default AlumniTeam;