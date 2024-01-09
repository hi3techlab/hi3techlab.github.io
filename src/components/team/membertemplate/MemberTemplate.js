/**
 * @author Katelyn Wyandt
 * Template for team members on team page, display as circle image and rectangle name and description
 * Image hover links to personal team pages with more in depth descriptions
 * 
 * @parameters {*} props
 * - member image
 * - Member name
 * - member credentials/baccaulreate
 * - member position

 * @TODO : Templatize the links on the images, not sure why it isnt working
 */
import { Link } from "react-router-dom";
import "./MemberTemplate.css";

const MemberTemplate = (props) => {
    return (
        <div className="memberTemplate">
            {/*Member Image - circle frame, eclipse*/}
            <Link to={props.fourthLine}>
                <div className="member-image" >
                    <img src={props.image} className ="memberImage" alt= "logo" />
                </div>
            </Link>
            {/*TextBox - #F5F5F5 */}
            <div className = "member-nametags">
                {/*Line 1 with name - bold, degrees - italics*/}
                <div className="memberName"> {props.firstLine} 
                    <div className = "memberCred">{props.secondLine}
                    </div>
                </div>
                {/* <div className = "nameCred">
                    <div className="memberName"> {props.firstLine}</div>
                    <div className="memberCred"> {props.secondLine}</div>
                </div> */}
                {/*second line with position - regular*/}
                <p className = "memberPosition"> {props.thirdLine} </p>
            </div>
        </div>
    );
};

export default MemberTemplate;