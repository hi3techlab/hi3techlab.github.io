import ResearchTemplate from  "../researchTemplate/ResearchTemplate";
import cube from "./../../../assets/images/research/carouselImages/Rubik's Cube/rubiks cube 1.png";

const Allure  = () => {
    return (
        <div className = "ALLURE">
            <ResearchTemplate
                firstLine = "ALLURE"
                secondLine = "AI-Driven Rubik's Cube"
                thirdLine = "ALLURE is a multi-modal learning platform developed by our lab. Enabled via an XAI chatbot and AI-driven solutions, we've developed a user interface that breaks down problem solving techniques for the Rubik’s cube to be comprehensive at any skill level. This is an ongoing project with applications in pedagogical strategies, metacognition, explainable AI, and HCI. Our future research will continue to investigate improved user experiences and Human-AI interactions through usability studies and inductive qualitative analysis.  "
                fourthLine = "Katelyn Wyandt, Sai Revanth, Prathamjeet Singh, Cassidy Bradley, Fritz Culp, Kaushik Lakaraju, Britney Capp, Karen Wong, Gabriel Blackwell, Sophie Azula, Saborny Sen Gupta, Harvey Villabueva, Vidhee Patel, Callie Hribar, Bryce Christian, Alaina Haylock, Jonathan Fu, Mia Silver, Kimanh Le, Valerie Vera"
                /* carousel = {AIDrivenRubiksCubeCarousel} */
                image = {cube}
            ></ResearchTemplate>
        </div>
    );
};

export default Allure;