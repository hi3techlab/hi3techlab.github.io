/*Note to future self, change from publications to a thread that is easy to update for anyone,
maybe embed facebook or twitter for easy update

if there are more than 4 news  thigns, how can I set it to only show those four?*/

import React from "react";
import "./labnews.css";
import {Link} from 'react-router-dom';
const LabNews = () => {
    return (
        <div>
            <div className="gray-container_labnews">
            <h1>
                Publications
            </h1>
            <p><u>
                <Link className="link" to="https://link.springer.com/chapter/10.1007/978-3-031-17615-9_34">
                    Wu, D., Tang, H., Bradley, C., Capps, B., Singh, P., Wyandt, K., Wong, K., Irvin, M., Agostinelli, F. and Srivastava, B., ”AI-Driven User Interface Design for Solving a Rubik’s Cube: A Scaffolding Design Perspective,” HCII 2022, 10 pages.
                </Link>​
            </u> </p>

            <p><u>
                <Link className="link" to="https://link.springer.com/chapter/10.1007/978-3-031-19682-9_76">
                    Bradley, C., Wu, D., Tang, H., Singh, P., Wyandt, K., Capps, B., Wong, K., Agostinelli, F., Irvin, M. and Srivastava, B., ”Explainable Artificial Intelligence (XAI) User Interface Design for Solving a Rubik’s Cube,” Proceedings of HCII 2022 conference, 9 pages.
                </Link>
            </u></p>
{/* 
            <p><u>
                <Link className="link">
                    Lakkaraju, K., Hassan, T. , Khandelwal, V., Singh, P. , Bradley, C., Shah, R., Agostinelli, F., Srivastava, B., and D. Wu, “ALLURE: A Multi-modal Guided Environment for Helping Children Learn to Solve a Rubik’s Cube with Automatic Solving and Interactive Explanations,” Proceedings of AAAI 2022 Conference, Feb. 2022.​ 
                </Link>
            </u></p> */}

            <p><u>
                <Link className="link" to="https://dl.acm.org/doi/abs/10.1145/3459990.3465175">
                    Agostinelli, F., Mavalankar, M., Khandelwal, V., Tang, H., Wu, D., Berry, B., Srivastava, B., Sheth, A. and Irvin, M. “Designing Children’s New Learning Partner: Collaborative Artificial Intelligence for Learning to Solve the Rubik’s Cube,” Proceedings of ACM Interaction Design and Children Conference, June 2021.
                </Link>
            </u> ​</p>

            <p><b>
                <Link to="/publications" style={{color:"black"}}>
                    View More ->
                </Link>
            </b></p>
        </div>
    </div>
    );
}

export default LabNews;