/**
 * @author Katelyn Wyandt
 * Current Team Members on Teams Page, using member template to display rows of 3 members at a time
 * 
 * @TODO : add links to each personal members page, make the members page
 */
import Dezhi from "./../../assets/images/team/Dezhi.png";
import Yang from "./../../assets/images/team/Yang.png";
import Fritz from "./../../assets/images/team/Fritz.png";
import Qinyan from "./../../assets/images/team/Qinyan.png";
import Zehao from "./../../assets/images/team/Zehao.png";
import Katelyn from "./../../assets/images/team/Katelyn.png";
import Harvey from "./../../assets/images/team/Harvey.png";
import Nupur from "./../../assets/images/team/Nupur.png";
import Sophie from "./../../assets/images/team/Sophie.png";
import Gabe from "./../../assets/images/team/Gabe.png";
import Bryce from "./../../assets/images/team/Bryce.png";
import Sai from "./../../assets/images/team/Sai.png";
import Jonathan from "./../../assets/images/team/Jonathan.png";
import Kim from "./../../assets/images/team/Kim.png";
import Mia from "./../../assets/images/team/Mia.png";
import Saborny from "./../../assets/images/team/Saborny.png";
import Edward from "./../../assets/images/team/Edward.png";
//import Filler from "./../../assets/images/team/Filler.png";
import MemberTemplate from "../team/membertemplate/MemberTemplate";
//import DezhiPage from "./PersonalPages/Dezhi";
//need to link all member pictures to separate member pages
//hover effect

const CurrentTeam = () => {
    return (
        <div className="borderedSection">
            {/*Heading Current Team Right Align*/}
            <p className = "header">
                Current Team
            </p>
            <div className = "currentTeam">
                {/*Dr. Wu*/}
                <MemberTemplate
                    firstLine= {<b>Dr. Dezhi Wu</b>}
                    secondLine = {<i>, Ph. D. , PMP</i>}
                    thirdLine = "Associate Professor at USC"
                    //fourthLine = {DezhiPage}
                    fourthLine = "Dezhi"
                    image = {Dezhi}
                ></MemberTemplate>

                {/*Yang*/}
                <MemberTemplate
                    firstLine= {<b>Yang Ren</b>}
                    secondLine = {<i>, M.S., Ph.D. Candidate</i>}
                    thirdLine = "Graduate Assistant"
                    image = {Yang}
                    fourthLine = "Yang"
                ></MemberTemplate>


                {/*Fritz*/}
                <MemberTemplate
                    firstLine= {<b>Dr. Fritz Culp</b>}
                    secondLine = {<i>, Ph. D.</i>}
                    thirdLine = "Postdoctoral Researcher"
                    image = {Fritz}
                    fourthLine = "Fritz"
                ></MemberTemplate>


                {/*Qinyan Shen*/}
                <MemberTemplate
                    firstLine= {<b>Qinyan Shen</b>}
                    secondLine = {<i>, Ph. D. Candidate</i>}
                    thirdLine = "Research Assistant"
                    image = {Qinyan}
                    fourthLine = "Qinyan"
                ></MemberTemplate>

                {/*Zehao Yu*/}
                <MemberTemplate
                    firstLine= {<b>Zehao Yu</b>}
                    secondLine = {<i>, Ph.D. Candidate</i>}
                    thirdLine = "Research Assistant"
                    image = {Zehao}
                    fourthLine = "Zehao"
                ></MemberTemplate>

                

                {/*Katelyn Wyandt*/}
                <MemberTemplate
                    firstLine= {<b>Katelyn Wyandt</b>}
                    secondLine = {<i></i>}
                    thirdLine = "Research Assistant, Lab Manager"
                    image = {Katelyn}
                    fourthLine = "Katelyn"
                ></MemberTemplate>

                {/*Harvey Villanueva*/}
                <MemberTemplate
                    firstLine= {<b>Harvey Villanueva</b>}
                    secondLine = {<i></i>}
                    thirdLine = "Research Assistant"
                    image = {Harvey}
                    fourthLine = "Harvey"
                ></MemberTemplate>

                {/*Nupur Shah*/}
                <MemberTemplate
                    firstLine= {<b>Nupur Shah</b>}
                    secondLine = {<i></i>}
                    thirdLine = "Research Assistant"
                    image = {Nupur}
                    fourthLine = "Nupur"
                ></MemberTemplate>

                {/*Sophie Azula*/}
                <MemberTemplate
                    firstLine= {<b>Sophie Azula</b>}
                    secondLine = {<i></i>}
                    thirdLine = "Research Assistant"
                    image = {Sophie}
                    fourthLine = "Sophie"
                ></MemberTemplate>

                {/*Sai Vuruma*/}
                <MemberTemplate
                    firstLine= {<b>Sai Vuruma</b>}
                    secondLine = {<i>, Ph.D. Candidate</i>}
                    thirdLine = "Research Assistant"
                    image = {Sai}
                    fourthLine = "Sai"
                ></MemberTemplate>

                

                {/*Gabriel Blackwell*/}
                <MemberTemplate
                    firstLine= {<b>Gabriel Blackwell</b>}
                    secondLine = {<i></i>}
                    thirdLine = "Research Assistant, Lab Manager"
                    image = {Gabe}
                    fourthLine = "Gabe"
                ></MemberTemplate>

                

                {/*Bryce Christian*/}
                <MemberTemplate
                    firstLine= {<b>Bryce Christian</b>}
                    secondLine = {<i></i>}
                    thirdLine = "Research Assistant"
                    image = {Bryce}
                    fourthLine = "Bryce"
                ></MemberTemplate>

                

                {/*Jonathan Fu*/}
                <MemberTemplate
                    firstLine= {<b>Jonathan Fu</b>}
                    secondLine = {<i></i>}
                    thirdLine = "Research Assistant"
                    image = {Jonathan}
                    fourthLine = "Jonathan"
                ></MemberTemplate>

                {/*Kimanh Le*/}
                <MemberTemplate
                    firstLine= {<b>Kimanh Le</b>}
                    secondLine = {<i>, B.S.</i>}
                    thirdLine = "Research Assistant"
                    image = {Kim}
                    fourthLine = "Kim"
                ></MemberTemplate>

                {/*Mia Silver*/}
                <MemberTemplate
                    firstLine= {<b>Mia Silver</b>}
                    secondLine = {<i></i>}
                    thirdLine = "Research Assistant"
                    image = {Mia}
                    fourthLine = "Mia"
                ></MemberTemplate>

                {/*Saborny*/}
                <MemberTemplate
                    firstLine= {<b>Saborny Sen Gupta</b>}
                    secondLine = {<i>, Ph.D. Candidate</i>}
                    thirdLine = "Research Assistant"
                    image = {Saborny}
                    fourthLine = "Saborny"
                ></MemberTemplate>

                {/*Edward */}
                <MemberTemplate
                    firstLine= {<b>Edward Tsien</b>}
                    secondLine = {<i>, Ph. D Candidate</i>}
                    thirdLine = "Research Assistant"
                    image = {Edward}
                    fourthLine = "Edward"
                ></MemberTemplate>
            </div>
        </div>
    )
}

export default CurrentTeam;