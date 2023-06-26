import Link from "next/link";

const Menu = () => {
    return (
        <>
            <nav id="menu" className="main-menu">
                <ul>
                    <li><span><Link href="/">Home</Link></span></li>
                    <li>
                        <span><a href="#0">Categories</a></span>
                        <ul>
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
                    </li>


                    <li><span><Link href="/about">About Us</Link></span></li>

                    
                </ul>
            </nav>
        </>
    );
}

export default Menu;