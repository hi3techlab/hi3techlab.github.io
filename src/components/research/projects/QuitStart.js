import ResearchTemplate from  "../researchTemplate/ResearchTemplate"
import quitStartImage from "./../../../assets/images/research/carouselImages/quitStart/MicrosoftTeams-image (8).png";

const QuitStart  = () => {
    return (
        <div className = "QuitStart">
            <ResearchTemplate
                firstLine = "QuitStart"
                secondLine = "Preventative Rural Healthcare App"
                thirdLine = "QuitStart is a mobile app developed for both IOS and Android. It was developed to address barriers in accessing programs that aid in quiting smoking habits. This is a combined effort with the University of Washington to better engage active smokers in quitting smoking. Through this project, we are studying how users engage with the platform and understanding how to apply HCI theories to increase positive outcomes in smoking cessation. Additionally, we hope to increase the potential success of the app by studying methods to improve usability of the app for a larger demographic of users."
                fourthLine = "Sai Revanth, Saborny Sen Gupta, Gabriel Blackwell, Sophie Azula"
                image = {quitStartImage}
            ></ResearchTemplate>
        </div>
    );
};

export default QuitStart;
