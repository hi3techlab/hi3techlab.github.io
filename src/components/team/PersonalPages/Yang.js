/**
 * @author Katelyn Wyandt
 * Personal Page for Yang, personal template 
 */

import Yang from "./../../../assets/images/team/Yang.png";
import PersonalTemplate from "./PersonalTemplate";
const YangPage = () => {
    return (
        <div className="personalHeader">
            <PersonalTemplate
                image = {Yang}
                firstLine = {<b>Yang Ren</b>}
                secondLine = "Graduate Assistant"
                fourthLine = "Yang Ren, M.S., is a Ph.D. candidate in the Department of Computer Science and Engineering at the University of South Carolina in Columbia, SC. He is a graduate assistant in Dr. Dezhi Wu’s lab in the department of Integrated Information Technology. Yang’s research aims at a) the application of big data techniques on health-related topics using machine learning and deep learning methods; b) developing and optimizing the machine learning and deep learning model design and model performance. Yang’s recent research involves: (1) Using machine learning methods to identify risk factors of low-weight-birth outcomes in a US hospital system; (2) Using D-Dimer as a biomarker to predict disease severity and clinical outcomes with a large COVID-19 inpatient cohort: a machine learning approach; (3) Exploring sentiment and communication exchange patterns of substance use disorder (SUD) on Twitter associated with pregnant women during COVID-19 pandemic; (4) Automated detection of vaping-related tweets on twitter during the 2019 EVALI outbreak."
            ></PersonalTemplate>
        </div>
    )
}

export default YangPage;