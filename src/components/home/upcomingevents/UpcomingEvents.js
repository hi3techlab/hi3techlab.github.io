/* This one is like the lab news one, we need to change it to 
new or current events for the lab, not sure what this contitutes
but will figure this out later, currently just a filler */
import './UpcomingEvents.css'


const UpcomingEvents = () => {
    return (
        <div className = "borderedSection">
            <div className="gray-container">
            {/*Heading upcoming events*/}
            <p className = "header">
                Upcoming Events
            </p>
            <div className = "events">
                <div className = "eventsBlock">
                    <p className = "newsUpdate">
                        Wu, D., Tang, H., Bradley, C., Capps, B., Singh, P., Wyandt, K., Wong, K., Irvin, M., Agostinelli, F. and Srivastava, B., ”AI-Driven User Interface Design for Solving a Rubik’s Cube: A Scaffolding Design Perspective,” HCII 2022, 10 pages.​
                    </p>
                </div>

                <div className = "eventsBlock">
                    <p className = "newsUpdate">
                        Bradley, C., Wu, D., Tang, H., Singh, P., Wyandt, K., Capps, B., Wong, K.,  Agostinelli, F., Irvin, M. and Srivastava, B., ”Explainable Artificial Intelligence (XAI) User Interface Design for Solving a Rubik’s Cube,” Proceedings of HCII 2022 conference, 9 pages.​
                    </p>
                </div>

                <div className = "eventsBlock">
                    <p className = "newsUpdate">
                        Lakkaraju, K., Hassan, T. , Khandelwal, V., Singh, P. , Bradley, C., Shah, R., Agostinelli, F., Srivastava, B., and D. Wu, “ALLURE: A Multi-modal Guided Environment for Helping Children Learn to Solve a Rubik’s Cube with Automatic Solving and Interactive Explanations,” Proceedings of AAAI 2022 Conference, Feb. 2022.​
                    </p>
                </div>
            </div>
        </div>
        </div>
    );
}

export default UpcomingEvents;