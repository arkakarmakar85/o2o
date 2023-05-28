import Script from 'next/script';

export default function FrontFooter() {
    return (
        <>
            <footer className="plus_border">
                <div className="container margin_60_35">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <h3 data-target="#collapse_ft_1">Quick Links</h3>
                            <div className="collapse dont-collapse-sm" id="collapse_ft_1">
                                <ul className="links">
                                    <li><a href="#0">About us</a></li>
                                    <li><a href="#0">Faq</a></li>
                                    <li><a href="#0">Help</a></li>
                                    <li><a href="#0">My account</a></li>
                                    <li><a href="#0">Create account</a></li>
                                    <li><a href="#0">Contacts</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <h3 data-target="#collapse_ft_2">Categories</h3>
                            <div className="collapse dont-collapse-sm" id="collapse_ft_2">
                                <ul className="links">
                                    <li><a href="#0">Shops</a></li>
                                    <li><a href="#0">Hotels</a></li>
                                    <li><a href="#0">Restaurants</a></li>
                                    <li><a href="#0">Bars</a></li>
                                    <li><a href="#0">Events</a></li>
                                    <li><a href="#0">Fitness</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <h3 data-target="#collapse_ft_3">Contacts</h3>
                            <div className="collapse dont-collapse-sm" id="collapse_ft_3">
                                <ul className="contacts">
                                    <li><i className="ti-home" />97845 Baker st. 567<br />Los Angeles - US</li>
                                    <li><i className="ti-headphone-alt" />+39 06 97240120</li>
                                    <li><i className="ti-email" /><a href="#0">info@sparker.com</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <h3 data-target="#collapse_ft_4">Keep in touch</h3>
                            <div className="collapse dont-collapse-sm" id="collapse_ft_4">
                                <div id="newsletter">
                                    <div id="message-newsletter" />
                                    <form method="post" action="assets/newsletter.php" name="newsletter_form" id="newsletter_form">
                                        <div className="form-group">
                                            <input type="email" name="email_newsletter" id="email_newsletter" className="form-control" placeholder="Your email" />
                                            <input type="submit" defaultValue="Submit" id="submit-newsletter" />
                                        </div>
                                    </form>
                                </div>
                                <div className="follow_us">
                                    <h5>Follow Us</h5>
                                    <ul>
                                        <li><a href="#0"><i className="ti-facebook" /></a></li>
                                        <li><a href="#0"><i className="ti-twitter-alt" /></a></li>
                                        <li><a href="#0"><i className="ti-google" /></a></li>
                                        <li><a href="#0"><i className="ti-pinterest" /></a></li>
                                        <li><a href="#0"><i className="ti-instagram" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /row*/}
                    <hr />
                    <div className="row">
                        <div className="col-lg-6">
                            <ul id="footer-selector">
                                <li>
                                    <div className="styled-select" id="lang-selector">
                                        <select>
                                            <option value="English" selected>English</option>
                                            <option value="French">French</option>
                                            <option value="Spanish">Spanish</option>
                                            <option value="Russian">Russian</option>
                                        </select>
                                    </div>
                                </li>
                                <li>
                                    <div className="styled-select" id="currency-selector">
                                        <select>
                                            <option value="US Dollars" selected>US Dollars</option>
                                            <option value="Euro">Euro</option>
                                        </select>
                                    </div>
                                </li>
                                <li><img src="img/cards_all.svg" alt="" /></li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <ul id="additional_links">
                                <li><a href="#0">Terms and conditions</a></li>
                                <li><a href="#0">Privacy</a></li>
                                <li><span>© 20243 Sparker</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>

            
            <Script src="https://maps.googleapis.com/maps/api/js" />
            <Script src="https://code.jquery.com/jquery-3.3.1.min.js" />
            <Script src="js/common_scripts.js" />
            <Script src="js/functions.js" />
            <Script src="assets/validate.js" />
            
            {/* <Script src="js/animated_canvas_min.js" /> */}

            
            <Script src="js/markerclusterer.js" />
            <Script src="js/map.js" />
            <Script src="js/infobox.js" />
        </>
    );
}