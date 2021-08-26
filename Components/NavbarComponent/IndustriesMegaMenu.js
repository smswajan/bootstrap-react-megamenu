import { industriesMenus } from "./data/serviceMenus";
import Link from "next/link";
const IndustriesMegaMenu = () => {
    return (
        <>
            <div className="nav-item insight-drop dropdown has-megamenu mr-0 ">
                <a className="nav-link dropdown-toggle" role="button" aria-expended="false" aria-haspopup="true" href="#" data-bs-toggle="dropdown">Industries</a>
                <div className="dropdown-menu bg-dark insight-mega megamenu" role="menu">
                    <div className="container">
                        <div className="w-100 py-0 py-4 ">
                            <div className="row d-flex align-items-center">
                                {industriesMenus && industriesMenus.map(item => <SingleMenu item={item} />)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default IndustriesMegaMenu;

const SingleMenu = ({ item }) => {
    return (
        <>
            <div className={"col-md-3 py-0 py-md-3 col-6 text-left text-blue mega-item font-18 "}>
                <Link href={"/industries/" + item.link}>{item.name}</Link>
            </div>
        </>
    )
}