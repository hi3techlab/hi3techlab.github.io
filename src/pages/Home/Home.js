import WelcomeMessage from "../../components/home/WelcomeMessage";
import WhatWeDo from "../../components/home/whatwedo/WhatWeDo";
import ImagesSlide from "../../components/home/imagesslide/ImagesSlide";
import FillerScroll from "../../components/home/FillerScroll/FillerScroll";
import CurrentProjects from "../../components/home/currentprojects/CurrentProjects";
import LabNews from "../../components/home/labnews/LabNews";
import UpcomingEvents from "../../components/home/upcomingevents/UpcomingEvents";
import OurSponsors from "../../components/home/oursponsors/OurSponsors";
import Footer from "../../components/footer/Footer";
import HomeCarousel from "../../components/home/homeCarousel/homeCarousel"
import SuperInspirationalQuote from "../../components/home/SuperInspirationalQuote/SuperInspirationalQuote";

const Home = () => {
  return (
    <div className="home">
      <WelcomeMessage />
      <WhatWeDo />
      {/* <FillerScroll /> */}
      {/* <ImagesSlide /> */}
      {/* <ResearchCarousel/> */}
      {/* <SuperInspirationalQuote /> */}
      <CurrentProjects />
      <HomeCarousel />
      <LabNews />
      {/* <UpcomingEvents /> */}
      <OurSponsors/>
      <Footer />
    </div>
  );
};

export default Home;
