import { FaCalendar, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa"
import { AiOutlineForward } from "react-icons/ai"
import Link from "next/link"
import { linksPartOne, linksPartThree, linksPartTwo } from "./data";
const FooterComponent = () => {
    return (
        <>
            <footer className="bg-dark text-white pt-5 pb-4 " >
                <div className="container mt-4 gray-bottom-border pb-5">
                    <div className="row">
                        <div className="col-md-4 part-1 pr-0 pr-md-5 mb-5 mb-md-0">
                            <h5 className="text-white font-weight-bold mb-4">Contact info.</h5>
                            <p> <span className="d-inline-block"><FaMapMarkerAlt /> </span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas vero sunt animi nisi officia consequuntur. </p>
                            <p> <span className="d-inline-block"><FaEnvelope /> </span>contact@domain.com</p>
                            <p> <span className="d-inline-block"><FaPhoneAlt /> </span>+880 1753 5506688</p>
                            {/* <p> <span className="d-inline-block"><FaCalendar /> </span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum quae maxime provident!</p> */}
                        </div>
                        <div className="col-md-3 part-2 mb-5 mb-md-0">
                            <h5 className="text-white font-weight-bold mb-4">Quick Links</h5>
                            <ul className="footer-links">
                                {linksPartOne.map(item => <FooterLinkItem data={item} key={item.id} />)}
                            </ul>
                        </div>
                        {/* <div className="col-md-3 part-2">
                            <h5 className="text-white font-weight-bold mb-4">Account & Shipping <br /> Info</h5>
                            <ul className="footer-links">
                                {linksPartTwo.map(item => <FooterLinkItem data={item} key={item.id} />)}
                            </ul>
                        </div> */}
                        <div className="col-md-5">
                            <h5 className="text-white font-weight-bold mb-4">Stay Informed By Newsletter</h5>
                            <p className="text-white" >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est libero fugit velit consequuntur.</p>
                            <form className="contact-form">
                                <div className="row">
                                    <InputField label="Full Name" htmlFor="name">
                                        <input type="text" placeholder="Your Full Name..." className="form-control" />
                                    </InputField>
                                    <InputField label="Email Address" htmlFor="email">
                                        <input type="email" placeholder="Email Address..." className="form-control" />
                                    </InputField>
                                    <div className="col-12">
                                        <button className="btn btn-danger text-white font-14">SUBSCRIBE</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="container text-center white-top-border pt-4">
                    <p className="mb-0 text-white font-light btn-custom font-14">&copy; All Rights Reserved</p>
                </div>
            </footer>
        </>
    );
};

export default FooterComponent;

const FooterLinkItem = ({ data }) => {
    return (
        <li>
            <Link href={`/${data.link}`}>
                <div className="d-flex">
                    <span className="icon"><AiOutlineForward /></span>
                    <p>{data.text}</p>
                </div>
            </Link>
        </li>
    )
}
const InputField = ({ col, label, htmlFor, children }) => {
    return (
        <>
            <div className={`col-md-${col ? col : 6}`} >
                <div className="form-group">
                    <label className="text-white" htmlFor={htmlFor}>{label} </label>
                    {children}
                </div>
            </div>
        </>
    )
}