/**
 * @author Katelyn Wyandt
 * Template for member pages for current and past team members, displays image, name, position, and detailed description
 * This version does not include option to include hyperlink for personal websites (see 'learnMore')
 * 
 * @param {*} props 
 *  - image
 *  - name
 *  - position in lab
 *  - description
 */
//header : half space white, circle img left align runs into bottom of header - large font name, subtitle position, sub sub website/linked in optional
//div element: description, all font one size
//background: that light grey color
//add a way to link people's personal websites

import "./personalTemplate.css"

const PersonalTemplate = (props) => {
    window.scrollTo(0, 0);
    return (
        <div className="personalTemplate">
            {/*Header with name, title, and picture */}
            <img src={props.image} className="personalImage" alt="logo" />
            <div className = "personalHeader">
                <div className = "personalInfo">
                    <h1 className = "personalName">{props.firstLine}</h1>
                    <h2 className = "personalTitle"> {props.secondLine} </h2>
                </div>
            </div>
            {/** Member Description */}
            <div className= "descriptionBox">
                <p className = "personalDescription"> {props.fourthLine}</p>
            </div>
        </div>
    )
}

export default PersonalTemplate;