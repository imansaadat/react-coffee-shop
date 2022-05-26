import Navbar from "./components/navbar/Navbar";
import Showcase from "./components/showcase/Showcase";
import About from "./components/about/About";
import {FacilityData} from './components/facility/data'
import {MenuData} from './components/menu/data'
import Facility from "./components/facility/Facility";
import Menu from "./components/menu/Menu";
import Gallery from "./components/gallery/Gallery";
import Team from "./components/team/Team";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import {FooterData} from "./components/footer/data";
function App() {
  return (
    <>
      <Navbar />
      <Showcase/>
      <About />
      <Facility data={FacilityData}/>
      <Menu data={MenuData}/>
      <Gallery />
      <Team />
      <Contact />
      <Footer data={FooterData} />
    </>
  );
}

export default App;
