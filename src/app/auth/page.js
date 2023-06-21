import FrontLayout from '../components/FrontLayout';

const auth = () => {
    return (
        <FrontLayout>

            <main>
                <div className="container margin_60">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-6 col-md-8">
                            <div className="box_account">
                                <h3 className="client">Login Or Register through your phone</h3>
                                <div className="form_container">
                                    
                                    <div className="form-group">
                                        <input type="number" className="form-control" name="phone" id="phone" placeholder="Phone*" value="" />
                                    </div>
                                    <div className="float-right"><a id="forgot" href="#"><strong>Send OTP</strong></a></div>

                                    <div className="form-group">
                                        <input type="password" className="form-control" name="otp" id="otp" defaultValue placeholder="OTP*" value="" />
                                    </div>
                                    
                                    <div className="text-center"><input type="submit" defaultValue="Log In" className="btn_1 full-width" /></div>
                                    <div id="forgot_pw">
                                        <div className="form-group">
                                            <input type="email" className="form-control" name="email_forgot" id="email_forgot" placeholder="Type your email" />
                                        </div>
                                        <p>A new password will be sent shortly.</p>
                                        <div className="text-center"><input type="submit" defaultValue="Reset Password" className="btn_1" /></div>
                                    </div>
                                </div>
                                {/* /form_container */}
                            </div>
                            {/* /box_account */}
                            <div className="row hidden_tablet">
                                <div className="col-md-6">
                                    <ul className="list_ok">
                                        <li>Find Locations</li>
                                        <li>Quality Location check</li>
                                        <li>Data Protection</li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <ul className="list_ok">
                                        <li>Secure Payments</li>
                                        <li>H24 Support</li>
                                    </ul>
                                </div>
                            </div>
                            {/* /row */}
                        </div>
                       
                    </div>
                    {/* /row */}
                </div>
                {/* /container */}
            </main>
        </FrontLayout>
    );
}

export default auth;