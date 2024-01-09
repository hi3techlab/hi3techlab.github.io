import ResearchTemplate from  "../researchTemplate/ResearchTemplate"
import sudImage from "./../../../assets/images/research/carouselImages/sud/Harvey_Presenting.jpg";

const SUD  = () => {
    return (
        <div className = "SUD">
            <ResearchTemplate
                firstLine = "Substance User"
                secondLine = "Social Media Analytics"
                thirdLine = "Substance use disorder is an ongoing prevalent issue that impacts over 46 million people. This is a research project that uses anonymous online data from Twitter to analyze how substances were discussed on social media before, during, and after COVID-19 vaccines became widly accessible in the United States. Our focus is on the pregnant population and how substance use disorder and pregnancy is discussed online. Our lab uses both qualitative and quantitative data analysis methods to study this topic from multiple perspectives."
                fourthLine = "Yang Ren, Fritz Culp, Yuqi Wu, Saborny Sen Gupta, Hannah Shead, Harvey Villanueva, Katelyn Wyandt, Nupur Shah"
                image = {sudImage}
            ></ResearchTemplate>
        </div>
    );
};

export default SUD;