import "./ResearchTemplate.css";
/* import ResearchCarousel from "../Carousel/researchCarousel"; */

const ResearchTemplate = (props) => {

/* const Carousel = props => <ResearchCarousel>{props.inner}</ResearchCarousel> */
    return (
        <div className = "project">
            {/* Project Title, Substitle, Content Desription, and Contributors */}
            <div className = "projectContent">
                {/* Adding ID for future header links */}
                <div className = "projectTitle" id={`project-${props.firstLine}`} > {props.firstLine}</div>
                <div className = "projectSubTitle"> {props.secondLine}</div>
                <br />
                <div className = "projectDescription">{props.thirdLine}</div>
                <br />
                <div className = "projectContributors">Contributors: {props.fourthLine}</div>
            </div>

            {/* Project Images, Posters, Papers, Videos*/}
            <div className = "projectResources">
                {/* {props.carousel} */}
                <div className="image-div">
                    <img src={props.image} className="research-image" />
                </div>
            </div>

        </div>
    );
};

export default ResearchTemplate;