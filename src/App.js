import './App.css';
import Slider from './components/Slider'
import Cards from './components/Cards'
import Location from './components/Location'
import TheNavbar from "./components/TheNavbar";
import Footer from "./components/Footer";
import WhatsappFloat from "./components/WhatsappFloat";
import ContactUs from "./components/ContactUs"

function App() {
  return (
    <div className="App" >
     
      <TheNavbar id='CarouselWrapper'></TheNavbar>
      <Slider id="TheSlider" ></Slider>
      <Cards ></Cards>
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
