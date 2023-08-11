import Promo from "./Promo/Promo";
import AboutProject from "./AboutProject/AboutProject";
import Techs from "./Techs/Techs";
import AboutMe from "./AboutMe/AboutMe";
import Portfolio from "./Portfolio/Portfolio";
// import Footer from "./Footer/Footer";
// import Header from "./Header/Header";

const Main = () => {
  return (
    <>      
      <Promo loggedIn={false} />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />      
    </>
  );
};

export default Main;
