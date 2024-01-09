/**
 * @author Ishu Singh
 * Template for page headers, setting up format for each page header to be uniform
 *
 * @param {*} props 
 * - background image
 * - Title
 * - Subtitle
 * - longer description/footer
 
 */
import "./HeaderTemplate.css";

const HeaderTemplate = (props) => {
  return (
    <div className="welcomeMessage">
      <div className="image-filter">
        <img src={props.image} className="titleImage" alt="logo" />
      </div>
      {/*Welcome Message*/}
      <div className = "message-container">
        <div>
          <p className="titleImageTitle">
            {props.firstLine}
            <br /> {props.secondLine}
          </p>
        </div>
        {/*Welcome footer*/}
        <div>
          <p className="titleImageFooter">{props.thirdLine}</p>
        </div>
      </div>
      {/*Scroll More Arrow*/}
      <div className = "down-arrow">
      </div>
    </div>
  );
};

export default HeaderTemplate;
