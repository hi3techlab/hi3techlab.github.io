/**
 * Sophie Azula, 3/9/2023
 * Research page to display current and past projects
 * TODO: Reformat div structure into grid?
 *       Transform into Component-extending class to allow for 'componentDidMount()' for .scrollTo call?
 */

import ResearchBanner from "../components/research/ResearchBanner";
import Footer from "../components/footer/Footer";
import Allure from "../components/research/projects/Allure";
import QuitStart from "../components/research/projects/QuitStart";
import MSN from "../components/research/projects/MSN";
import McNair23 from "../components/research/projects/McNair23";
import SUD from "../components/research/projects/SUD";

// import CurrentProjectsResearch from "../components/research/CurrentProjectsResearch/CurrentProjectsResearch";
// import PastProjects from "../components/research/PastProjects";

const Research = () => {
  // Ensure the window 'loads' at top of page
  window.scrollTo(0, 0);
  

  return (
    <div className="reasearch">
      <ResearchBanner />
      <Allure />
      <QuitStart />
      <MSN />
      <McNair23 />
      <SUD />
      {/* <CurrentProjectsResearch/> */}
      {/* Commenting out for now, until more projects or restructured*/}
      {/* <PastProjects/> */}
      <Footer />
      </div>
  );
};

export default Research;
