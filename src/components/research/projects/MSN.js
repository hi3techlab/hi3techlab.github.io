import ResearchTemplate from  "../researchTemplate/ResearchTemplate"
import MsnImage from "../../../assets/images/research/carouselImages/mcnair/Gabe MJF poster presentation-July2023.png"

const MSN  = () => {
    return (
        <div className = "MSN">
            <ResearchTemplate
                firstLine = "MSN Task"
                secondLine = "Dual-Task Interface Theory"
                thirdLine = "MSN Task is a multi-university project between the University of Nevada, Las Vegas and the University of South Carolina. Our lab members worked closely on developing a controlled study design and deploying a web app integrating React.js, Firebase, and python into one project to study use behavior in response to faux security prompts. This project seeks to explain and understand Dual-Task Interface theory and the effect on online security."
                fourthLine = "Gabriel Blackwell, Prathamjeet Singh, Cassidy Bradley"
                image = {MsnImage}
            ></ResearchTemplate>
        </div>
    );
};

export default MSN;