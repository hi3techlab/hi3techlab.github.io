/**
 * @author Katelyn Wyandt
 * Personal Page for Kim, personal template 
 */

import Kim from "./../../../assets/images/team/Kim.png";
import PersonalTemplate from "./PersonalTemplate";
const KimPage = () => {
    return (
        <div className="personalHeader">
            <PersonalTemplate
                image = {Kim}
                firstLine = {<b>Kim Le</b>}
                secondLine = "Research Assistant"
                fourthLine = "My name is Kim, and I am a first-year doctoral student in the Health Promotion, Education, and Behavior department. Currently, I am taking my core classes in preparation for the qualifying exam in August. I am working with my primary advisor on interventions and papers related to increasing physical activity using wearable technology and applying a gamification component. I have done research on social media and its effects on college students mental health. Relevant hobbies include lifting, rock climbing, doing jigsaw puzzles, cooking, volunteering, and watching crime shows. I am excited to have the opportunity to volunteer in Dr. Wu's lab and to learn more about user experience. "
            ></PersonalTemplate>
        </div>
    )
}

export default KimPage;