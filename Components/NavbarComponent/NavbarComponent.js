import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Link from "next/link"
import ServicesMegaMenu from "./ServicesMegaMenu";
import IndustriesMegaMenu from "./IndustriesMegaMenu";
import InsightMegaMenu from "./InsightMegaMenu";

const NavbarComponent = () => {
    const shadow = true;
    return (
        <>
            <Navbar collapseOnSelect sticky="top" expand="lg" className="py-0 bg-white">
                <Navbar.Brand>
                    <Link href="/">
                        <a href="/" className="font-weight-bold mb-0 ">
                            <img src="/shubhankar-consulting-logo.png" alt="" className="site-logo" />
                        </a>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav style={{ color: "#FFFFFF" }} className="ml-auto text-center mt-1">
                        <Nav.Item>
                            <Nav.Link eventKey="129" className="active single-item"><Link href="/"><span className="nav-link">Home</span></Link></Nav.Link>
                        </Nav.Item>
                        <ServicesMegaMenu />
                        <IndustriesMegaMenu />
                        <InsightMegaMenu />
                        <Nav.Item>
                            <Nav.Link eventKey="122" className=" single-item"><Link href="/about-us"><span className="nav-link">About US</span></Link></Nav.Link>
                        </Nav.Item>
                        <NavDropdown className="dustu" title="Contact Us">
                            <NavDropdown.Item eventKey="11">
                                <Link to="/complaints">Complaints</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item eventKey="12">
                                <Link to="/get-in-touch">Get in touch</Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>

        </>
    );
};

export default NavbarComponent;