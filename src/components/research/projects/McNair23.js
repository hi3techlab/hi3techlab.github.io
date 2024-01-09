import ResearchTemplate from  "../researchTemplate/ResearchTemplate"
import McNairImage from "../../../assets/images/research/carouselImages/mcnair/MicrosoftTeams-image (10).png"

const McNair23  = () => {
    return (
        <div className = "McNair23">
            <ResearchTemplate
                firstLine = "AR/VR Cohort"
                secondLine = "McNair Junior Scholar Summer 2023"
                thirdLine = "The McNair Junior Scholar Fellowship is a prestigious grant offered at the University of South Carolina to current engineering undergraduates engaged in meaningful research. This is our labs third year producing McNair Junior scholars and the first year to create a cohort in our lab. This year’s cohort of students worked together to earn certifications in Unity, a mixed reality and game development software. With this experience, our four members led their own research projects implementing mixed reality and presented their preliminary research and Unity development skills at the University of South Carolina’s summer symposium 2023."
                fourthLine = "Gabriel Blackwell, Mia Silver, Hsi-En Hsu, Amitta Soutthivong "
                image = {McNairImage}
            ></ResearchTemplate>
        </div>
    );
};

export default McNair23;