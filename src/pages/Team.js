/**
 * @author Katelyn Wyandt
 * Team members page, calling components in 'components' folder to format divs
 */
import TeamBanner from "../components/team/TeamBanner";
import CurrentTeam from "../components/team/CurrentTeam";
import AlumniTeam from "../components/team/Alumni";
import Footer from "../components/footer/Footer";

const Team = () => {
  return (
    <div className="team">
      <TeamBanner />
      <CurrentTeam />
      <AlumniTeam />
      <Footer />
    </div>
  );
};

export default Team;
