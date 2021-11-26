import './App.css';
import Slider from './components/Slider'
import Cards from './components/Cards'
import Location from './components/Location'
import TheNavbar from "./components/TheNavbar";
import Footer from "./components/Footer";
import WhatsappFloat from "./components/WhatsappFloat";


function App() {
  return (
    <div className="App" >
      <div style={{'padding-top':'15%'}} ></div>
      <TheNavbar id='CarouselWrapper'></TheNavbar>
      <Slider id="TheSlider" ></Slider>
      <Cards></Cards>
      <Location></Location>
      <Footer></Footer>
      <WhatsappFloat></WhatsappFloat>

    </div>
  );
}

export default App;
