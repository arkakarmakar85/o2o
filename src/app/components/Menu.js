import Link from "next/link";

const Menu = () => {
    return (
        <>
            <nav id="menu" className="main-menu">
                <ul>
                    <li><span><Link href="/">Home</Link></span></li>
                    <li><span><Link href="/about">About Us</Link></span></li>
                    <li><span><Link href="/sample">Sample</Link></span></li>

                        {/* <li><span><a href="#0">Pages</a></span>
                        <ul>
                            <li><a href="admin_section/index.html">Admin section</a></li>
                            <li><a href="blog.html">Blog</a></li>
                            <li><a href="account.html">Account</a></li>
                            <li><a href="help.html">Help Section</a></li>
                            <li><a href="faq.html">Faq Section</a></li>
                            <li><a href="wishlist.html">Wishlist page</a></li>
                            <li><a href="contacts.html">Contacts</a></li>
                            <li>
                                <span><a href="#0">Icon Packs</a></span>
                                <ul>
                                    <li><a href="icon-pack-1.html">Icon pack 1</a></li>
                                    <li><a href="icon-pack-2.html">Icon pack 2</a></li>
                                    <li><a href="icon-pack-3.html">Icon pack 3</a></li>
                                    <li><a href="icon-pack-4.html">Icon pack 4</a></li>
                                </ul>
                            </li>
                            <li><a href="about.html">About</a></li>
                            <li><a href="media-gallery.html">Media gallery</a></li>
                        </ul>
                    </li> */}
                </ul>
            </nav>
        </>
    );
}

export default Menu;