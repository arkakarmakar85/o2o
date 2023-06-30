"use client";
import FrontLayout from '../components/FrontLayout';
import Link from "next/link";
//import OpenApi from "./components/OpenApi";
import OpenApi from "../components/OpenApi";
import { useEffect, useState } from "react";
const auth = () => {
    const [phoneno, setPhoneno] = useState();
    const [phonenoreply, setPhonenoreply] = useState();
    const [otp, setOtp] = useState();
    const [otpreply, setOtpreply] = useState();
    

    const handleClickPhoneno = async () => {
     // setSelectedCategory(val); //setting the text value 
      try {
        let categories = await OpenApi.get("/send-otp?phone=" + phoneno);
        alert(categories.data.msg)
        setPhonenoreply(categories.data.msg);
      } catch (error) {
        setPhonenoreply(error);
        alert(error)
        console.log({ error });
      }
    };





    const handleClickOTP = async () => {
      // setSelectedCategory(val); //setting the text value 
       try {
        let otpreply = await OpenApi.get("/verify-otp?phone=" + phoneno+"&otp="+otp);
         alert(otpreply.data.msg)
         setOtpreply(otpreply.data.msg);
       } catch (error) {
        setOtpreply(error);
         alert(error)
         console.log({ error });
       }
     };
 


    const getPlaces = async (val) => {
        setSelectedPlace(val)
        try {
          let places = await OpenApi.get("/get-places?place=" + val);
          setPlaces(places.data.places);
        } catch (error) {
          setPlaces([]);
          console.log({ error });
        }
      };


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
        <input
          type="number"
          className="form-control"
          name="phone"
          id="phone"
          placeholder="Phone*"
          value={phoneno}
          onChange={(e) => setPhoneno(e.target.value)}
        />
      </div>
      
      <div  onClick={handleClickPhoneno} style={{ textAlign: 'right' }}
> 

<strong>Send OTP</strong>

</div>
      {/* <div className="float-right">
        <a id="forgot" href="#">
          <strong>Send OTP</strong>
        </a>
      </div> */}

      <div className="form-group">
        <input
          type="password"
          className="form-control"
          name="otp"
          id="otp"
          placeholder="OTP*"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
      </div>

      <div className="text-center">
      <input
        type="submit"
        value="Log In"
        className="btn_1 full-width"
        onClick={handleClickOTP}
      />
    </div>
      <div id="forgot_pw">
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            name="email_forgot"
            id="email_forgot"
            placeholder="Type your email"
          />
        </div>
        <p>A new password will be sent shortly.</p>
        <div className="text-center">
          <input type="submit" value="Reset Password" className="btn_1" />
        </div>
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