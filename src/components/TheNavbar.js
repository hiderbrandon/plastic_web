import Navbar from "react-bootstrap/Navbar";

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
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <a href="#login">contacto</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default TheNavbar;