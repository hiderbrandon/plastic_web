import Navbar from "react-bootstrap/Navbar";
import WhatsappFloat from "./WhatsappFloat";

const TheNavbar = () => {
    return (
        <div>
            <Navbar fixed='top' className="TheNavbar">
                    <Navbar.Brand href="#home">
                        <img
                            src="https://cdn.worldvectorlogo.com/logos/pax-east.svg"
                            width="80"
                            height="80"
                            className="d-inline-block align-top"
                            alt="public/compaq-1"
                        />
                    </Navbar.Brand>
                    
            </Navbar>
        </div>
    );
}

export default TheNavbar;