import Navbar from "react-bootstrap/Navbar"; 
import Santander from "../img/Santander_2.png";

const TheNavbar = () => {
    return (
        <div>
            <Navbar className="TheNavbar">
                    <Navbar.Brand href="#home">
                        <img
                            src={Santander}
                            width="80"
                            height="80"
                            className="d-inline-block align-top"
                            alt="LOGO"
                        />
                    </Navbar.Brand>
                    
            </Navbar>
        </div>
    );
}

export default TheNavbar;