import Link from "next/link";
import Menu from "./Menu";

const FromOtherPageHeader = () => {
    return (
        <div>
            <header className="header_in is_sticky menu_fixed">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-12">
                            <div id="logo">
                                <Link href="/">
                                    <img src="/img/logo_sticky.svg" width={165} height={35} alt className="logo_sticky" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-9 col-12">
                            <ul id="top_menu">
                                <li><Link href="/auth" className="btn_add">Add Listing / Registration</Link></li>
                                {/* <li><a href="#sign-in-dialog" id="sign-in" className="login" title="Sign In">Sign In</a></li> */}
                            </ul>
                            {/* /top_menu */}
                            <a href="#menu" className="btn_mobile">
                                <div className="hamburger hamburger--spin" id="hamburger">
                                    <div className="hamburger-box">
                                        <div className="hamburger-inner" />
                                    </div>
                                </div>
                            </a>
                            <Menu />
                        </div>
                    </div>
                    {/* /row */}
                </div>
                {/* /container */}
            </header>

        </div>
    );
}

export default FromOtherPageHeader;