/**
 * @author Ishu Singh, Katelyn Wyandt
 * header for team members page, utilizing header template
 */
import BannerTemplate from "../headertemplate/BannerTemplate";

const TeamBanner = () => {
  return (
    <div className="welcomeMessage">
      <BannerTemplate firstLine="OUR MEMBERS"></BannerTemplate>
    </div>
  );
};

export default TeamBanner;
