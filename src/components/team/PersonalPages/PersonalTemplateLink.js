/**
 * @author Katelyn Wyandt
 * Template for member pages for current and past team members, displays image, name, position, and detailed description
 * This version includes option to include hyperlink for personal websites (see 'learnMore')
 * 
 * @param {*} props 
 *  - image
 *  - name
 *  - position in lab
 *  - link
 *  - description
 */

import "./personalTemplate.css"

const PersonalTemplateLink = (props) => {
    window.scrollTo(0, 0);
    return (
        <div className="personalTemplate">
            {/*Header with name, title, and picture */}
            <img src={props.image} className="personalImage" alt="logo" />
            <div className = "personalHeader">
                <div className = "personalInfo">
                    <h1 className = "personalName">{props.firstLine}</h1>
                    <h2 className = "personalTitle"> {props.secondLine} </h2>
                    <h5 className = "learnMore">More information can be found <a href={props.thirdLine}>here</a> on their website</h5>
                </div>
            </div>
            {/** Member Description */}
            <div className= "descriptionBox">
                <p className = "personalDescription"> {props.fourthLine}</p>
            </div>
        </div>
    )
}

export default PersonalTemplateLink;