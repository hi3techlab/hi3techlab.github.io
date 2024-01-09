import TitleImage from "./../../assets/images/home/TitleImage.jpg";
import HeaderTemplate from "../headertemplate/HeaderTemplate";

const WelcomeMessage = () => {
  return (
    <div className="welcomeMessage">
      <HeaderTemplate
        firstLine="WELCOME TO"
        secondLine={
          <>
            HI<sup>3</sup> TECH LAB
          </>
        }
        thirdLine="Human Centered. Intelligent. Interdisciplinary. Interactive Tech"
        image={TitleImage}
      ></HeaderTemplate>
    </div>
  );
};

export default WelcomeMessage;
