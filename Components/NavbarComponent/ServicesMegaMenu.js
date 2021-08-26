import { serviceMenus } from "./data/serviceMenus";
import Link from "next/link";
const ServicesMegaMenu = () => {
    return (
        <>
            <div className="nav-item insight-drop dropdown has-megamenu mr-0 ">
                <a className="nav-link dropdown-toggle" role="button" aria-expended="false" aria-haspopup="true" href="#" data-bs-toggle="dropdown">Services</a>
                <div className="dropdown-menu bg-dark insight-mega megamenu" role="menu">
                    <div className="container">
                        <div className="w-100 py-0 py-4 ">
                            <div className="row d-flex align-items-center">
                                {serviceMenus && serviceMenus.map(item => <SingleMenu item={item} />)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesMegaMenu;

const SingleMenu = ({ item }) => {
    return (
        <>
            <div className={"col-md-4 py-0 py-md-3 col-6 text-left text-blue mega-item font-18 "}>
                <Link href={"/services/" + item.link}>{item.name}</Link>
            </div>
        </>
    )
}