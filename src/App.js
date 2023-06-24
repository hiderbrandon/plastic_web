import './App.css';
import Slider from './components/Slider'
import Cards from './components/Cards'
import Location from './components/Location'
import TheNavbar from "./components/TheNavbar";
import Footer from "./components/Footer";
import WhatsappFloat from "./components/WhatsappFloat";
import ContactUs from "./components/ContactUs"
import InfoSection from "./components/InfoSection"
import InfoSection2 from "./components/InfoSection2"
import InfoSection3 from "./components/InfoSection3"
import Introduction from "./components/Introduction"


function App() {
  return (
    <div className="App" >
      <Introduction></Introduction>
      <Cards></Cards>
      <InfoSection></InfoSection>
      <InfoSection2></InfoSection2>
      <InfoSection3></InfoSection3>
      <ContactUs></ContactUs>
      <a id="location">
      <Location ></Location>
      </a>
      <Footer></Footer>
      <WhatsappFloat></WhatsappFloat>

    </div>
  );
}

export default App;
