import Navbar from "react-bootstrap/Navbar";

const TheNavbar = () => {
    return (
        <div>
            <Navbar fixed='top' className="TheNavbar">
                    <Navbar.Brand href="#home">
                        <img
                            src="https://cdn.worldvectorlogo.com/logos/creyfs.svg"
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