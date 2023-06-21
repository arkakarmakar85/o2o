import Link from "next/link";
import Menu from './Menu';

export default function HomeHeader() {
    return (
        <div>
        <header className="header menu_fixed">
            <div id="logo">
                <Link href="/" title={process.env.NEXT_PUBLIC_BASE_APP_NAME+' - Directory and listings template'}>
                    <img src="/img/logo.svg" width={165} height={35} alt className="logo_normal" />
                    <img src="/img/logo_sticky.svg" width={165} height={35} alt className="logo_sticky" />
                </Link>
            </div>
            <ul id="top_menu">
                <li><Link href="auth" className="btn_add">Add Listing / Registration</Link></li>
                {/* <li><Link href="#sign-in-dialog" id="sign-in" className="login" title="Sign In">Sign In</Link></li> */}
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
        </header>
        </div>
    );
} 