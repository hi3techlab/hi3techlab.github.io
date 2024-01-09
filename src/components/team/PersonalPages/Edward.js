/**
 * @author Katelyn Wyandt
 * Personal Page for Edward, personal template 
 */

import Edward from "./../../../assets/images/team/Edward.png";
import PersonalTemplate from "./PersonalTemplate";
const EdwardPage = () => {
    return (
        <div className="personalHeader">
            <PersonalTemplate
                image = {Edward}
                firstLine = {<b>Edward Tsien</b>}
                secondLine = "Research Assistant"
                fourthLine = "Edward Tsien is a Computer Science PhD Candidate co-advised by Professor Dezhi Wu and Professor Yan Tong, and his doctoral research focuses on developing new multi-task learning methods and applying them to healthcare contexts. Prior to coming to U. of SC, he obtained his B.S. in CS at Georgia Tech and worked as a full-stack software developer. He has interned at BuzzFeed and Futurewei Technologies contributing to their AI/ML stacks. In addition to training neural networks on electronic medical records, he also has experience with computer vision, reinforcement learning, and generative AI methods. Away from the computer, he is either outside skiing, planting crops, or finding restaurants to learn from."
            ></PersonalTemplate>
        </div>
    )
}

export default EdwardPage;