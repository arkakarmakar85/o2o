"use client"
import { useEffect, useState } from "react";
import FrontLayout from "../../components/FrontLayout";
import OpenApi from "@/app/components/OpenApi";
import Common from './../../components/Common';
// import { DiscussionEmbed } from 'disqus-react';


const Details = ({ params }) => {
  const [details, setDetails] = useState();
  const [services, setServices] = useState();


  const getDetails = async (id) => {
    try {
      let details = await OpenApi.get("/details/" + id);
      console.log(details.data.details);
      setDetails(details.data.details);
      setServices(details.data.services);
    } catch (error) {
      setDetails([]);
      console.log({ error });
    }
  }
  useEffect(()=>{
    getDetails(params.slug[1]);
  }, []);
  return (
    <FrontLayout>
      <main>
        <div className="hero_in shop_detail">
          <div className="wrapper" style={{backgroundImage: `url(${process.env.NEXT_PUBLIC_BASE_IMG_URL + details?.f_img})`,
          
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                backgroundSize: 'cover',
            }}>
            <span className="magnific-gallery">
              <a
                href="img/gallery/hotel_list_1.jpg"
                className="btn_photos"
                title="Photo title"
                data-effect="mfp-zoom-in"
              >
                View photos
              </a>
              <a
                href="img/gallery/hotel_list_2.jpg"
                title="Photo title"
                data-effect="mfp-zoom-in"
              />
              <a
                href="img/gallery/hotel_list_3.jpg"
                title="Photo title"
                data-effect="mfp-zoom-in"
              />
            </span>
          </div>
        </div>
        {/*/hero_in*/}
        <nav className="secondary_nav sticky_horizontal_2">
          <div className="container">
            <ul className="clearfix">
              <li>
                <a href="#description" className="active">
                  Description
                </a>
              </li>
              <li>
                <a href="#reviews">Reviews</a>
              </li>
              <li>
                <a href="#sidebar">Booking</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container margin_60_35">
          <div className="row">
            <div className="col-lg-8">
              <section id="description">
                <div className="detail_title_1">
                  {details && <h1>{Common.ucWord(details.name)}</h1>}
                  <a
                    className="address"
                    href="https://www.google.com/maps/dir//Assistance+%E2%80%93+H%C3%B4pitaux+De+Paris,+3+Avenue+Victoria,+75004+Paris,+Francia/@48.8606548,2.3348734,14z/data=!4m15!1m6!3m5!1s0x47e66e1de36f4147:0xb6615b4092e0351f!2sAssistance+Publique+-+H%C3%B4pitaux+de+Paris+(AP-HP)+-+Si%C3%A8ge!8m2!3d48.8568376!4d2.3504305!4m7!1m0!1m5!1m1!1s0x47e67031f8c20147:0xa6a9af76b1e2d899!2m2!1d2.3504327!2d48.8568361"
                  >
                    {details?Common.ucWord(details.address):''}
                  </a>
                </div>
                {details && <p dangerouslySetInnerHTML={{ __html: details.short_description }}></p>}

                <h5 className="add_bottom_15">Services</h5>
                <div className="row add_bottom_30">
                  <div className="col-md-12">
                    <ul className="bullets">
                    {services &&
                      services.map((service) => {
                        console.log({service})
                        return (
                          <li key={service.id}>{Common.ucWord(service?.services)}</li>
                        );
                      })}
                      
                    </ul>
                  </div>
                
                </div>
                {/* /row */}
                <div className="opening">
                  <div className="ribbon">
                    <span className="open">Now Open</span>
                  </div>
                  <i className="icon_clock_alt" />
                  <h4>Opening Hours</h4>
                  <div className="row">
                    <div className="col-md-6">
                      <ul>
                        <li>
                          Monday <span>9 AM - 5 PM</span>
                        </li>
                        <li>
                          Tuesday <span>9 AM - 5 PM</span>
                        </li>
                        <li>
                          Wednesday <span>9 AM - 5 PM</span>
                        </li>
                        <li>
                          Thursday <span>9 AM - 5 PM</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul>
                        <li>
                          Friday <span>9 AM - 5 PM</span>
                        </li>
                        <li>
                          Saturday <span>9 AM - 5 PM</span>
                        </li>
                        <li>
                          Sunday <span>Closed</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* /opening */}
                {/* <hr />
                <h5>Special offers</h5>
                <div className="row">
                  <div className="col-lg-6 col-md-12">
                    <ul className="menu_list">
                      <li>
                        <div className="thumb">
                          <img src="/img/shop_item_1.jpg" alt="" />
                        </div>
                        <h6>
                          Clothing Cloth T-shirt <span>$12</span>
                        </h6>
                        <p>Small / Medium / Large</p>
                      </li>
                      <li>
                        <div className="thumb">
                          <img src="/img/shop_item_2.jpg" alt="" />
                        </div>
                        <h6>
                          Clothing Cloth T-shirt <span>$12</span>
                        </h6>
                        <p>Small / Medium / Large</p>
                      </li>
                      <li>
                        <div className="thumb">
                          <img src="/img/shop_item_3.jpg" alt="" />
                        </div>
                        <h6>
                          Clothing Cloth T-shirt <span>$12</span>
                        </h6>
                        <p>Small / Medium / Large</p>
                      </li>
                      <li>
                        <div className="thumb">
                          <img src="/img/shop_item_4.jpg" alt="" />
                        </div>
                        <h6>
                          Clothing Cloth T-shirt <span>$12</span>
                        </h6>
                        <p>Small / Medium / Large</p>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <ul className="menu_list">
                      <li>
                        <div className="thumb">
                          <img src="/img/shop_item_5.jpg" alt="" />
                        </div>
                        <h6>
                          Clothing Cloth T-shirt <span>$12</span>
                        </h6>
                        <p>Small / Medium / Large</p>
                      </li>
                      <li>
                        <div className="thumb">
                          <img src="/img/shop_item_6.jpg" alt="" />
                        </div>
                        <h6>
                          Clothing Cloth T-shirt <span>$12</span>
                        </h6>
                        <p>Small / Medium / Large</p>
                      </li>
                      <li>
                        <div className="thumb">
                          <img src="/img/shop_item_7.jpg" alt="" />
                        </div>
                        <h6>
                          Clothing Cloth T-shirt <span>$12</span>
                        </h6>
                        <p>Small / Medium / Large</p>
                      </li>
                      <li>
                        <div className="thumb">
                          <img src="/img/shop_item_8.jpg" alt="" />
                        </div>
                        <h6>
                          Clothing Cloth T-shirt <span>$12</span>
                        </h6>
                        <p>Small / Medium / Large</p>
                      </li>
                    </ul>
                  </div>
                </div> */}
                {/* /row */}
                <hr />
                <h3>Location</h3>
                {/* <div id="map" className="map map_single add_bottom_45" /> */}
                {details && <div className="map map_single add_bottom_45" dangerouslySetInnerHTML={{ __html: details.map_code }}></div>}
                {/* End Map */}
              </section>
              {/* /section */}
  
  
              <section id="reviews">
                <h2>Reviews</h2>
                <div className="reviews-container add_bottom_30">
                  <div className="row">
                    <div className="col-lg-3">
                      <div id="review_summary">
                        <strong>8.5</strong>
                        <em>Superb</em>
                        <small>Based on 4 reviews</small>
                      </div>
                    </div>
                    <div className="col-lg-9">
                      <div className="row">
                        <div className="col-lg-10 col-9">
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: "90%" }}
                              aria-valuenow={90}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                        <div className="col-lg-2 col-3">
                          <small>
                            <strong>5 stars</strong>
                          </small>
                        </div>
                      </div>
                      {/* /row */}
                      <div className="row">
                        <div className="col-lg-10 col-9">
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: "95%" }}
                              aria-valuenow={95}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                        <div className="col-lg-2 col-3">
                          <small>
                            <strong>4 stars</strong>
                          </small>
                        </div>
                      </div>
                      {/* /row */}
                      <div className="row">
                        <div className="col-lg-10 col-9">
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: "60%" }}
                              aria-valuenow={60}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                        <div className="col-lg-2 col-3">
                          <small>
                            <strong>3 stars</strong>
                          </small>
                        </div>
                      </div>
                      {/* /row */}
                      <div className="row">
                        <div className="col-lg-10 col-9">
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: "20%" }}
                              aria-valuenow={20}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                        <div className="col-lg-2 col-3">
                          <small>
                            <strong>2 stars</strong>
                          </small>
                        </div>
                      </div>
                      {/* /row */}
                      <div className="row">
                        <div className="col-lg-10 col-9">
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: 0 }}
                              aria-valuenow={0}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                        <div className="col-lg-2 col-3">
                          <small>
                            <strong>1 stars</strong>
                          </small>
                        </div>
                      </div>
                      {/* /row */}
                    </div>
                  </div>
                  {/* /row */}
                </div>
                
                {/* /review-container */}
              </section>
              {/* /section */}
              <hr />
              <div className="add-review">
                <h5>Leave a Review</h5>
                <form>
                  <div className="row">
                    <div className="form-group col-md-6">
                      <label>Name and Lastname *</label>
                      <input
                        type="text"
                        name="name_review"
                        id="name_review"
                        placeholder
                        className="form-control"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label>Email *</label>
                      <input
                        type="email"
                        name="email_review"
                        id="email_review"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label>Rating </label>
                      <div className="custom-select-form">
                        <select
                          name="rating_review"
                          id="rating_review"
                          className="wide"
                        >
                          <option value={1}>1 (lowest)</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                          <option value={4}>4</option>
                          <option value={5} selected>
                            5 (medium)
                          </option>
                          <option value={6}>6</option>
                          <option value={7}>7</option>
                          <option value={8}>8</option>
                          <option value={9}>9</option>
                          <option value={10}>10 (highest)</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group col-md-12">
                      <label>Your Review</label>
                      <textarea
                        name="review_text"
                        id="review_text"
                        className="form-control"
                        style={{ height: 130 }}
                        defaultValue={""}
                      />
                    </div>
                    <div className="form-group col-md-12 add_top_20 add_bottom_30">
                      <input
                        type="submit"
                        defaultValue="Submit"
                        className="btn_1"
                        id="submit-review"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* /col */}
            <aside className="col-lg-4" id="sidebar">
              <div className="box_detail booking">
                <div className="price">
                  <h5 className="d-inline">Contact us</h5>
                  <div className="score">
                    <span>
                      Good<em>350 Reviews</em>
                    </span>
                    <strong>7.0</strong>
                  </div>
                </div>
                <div id="message-contact-detail" />
                <form
                  method="post"
                  action="assets/contact_detail.php"
                  id="contact_detail"
                  autoComplete="off"
                >
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Name"
                      name="name_detail"
                      id="name_detail"
                    />
                    <i className="ti-user" />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Email"
                      name="email_detail"
                      id="email_detail"
                    />
                    <i className="icon_mail_alt" />
                  </div>
                  <div className="form-group">
                    <textarea
                      placeholder="Your message"
                      className="form-control"
                      name="message_detail"
                      id="message_detail"
                      defaultValue={""}
                    />
                    <i className="ti-pencil" />
                  </div>
                  <div className="form-group">
                    <input
                      placeholder="Are you human? 3 + 1 ="
                      className="form-control"
                      type="text"
                      id="verify_contact_detail"
                      name="verify_contact_detail"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      defaultValue="Contact us"
                      className="add_top_30 btn_1 full-width purchase"
                      id="submit-contact-detail"
                    />
                  </div>
                  <a
                    href="wishlist.html"
                    className="btn_1 full-width outline wishlist"
                  >
                    <i className="icon_heart" /> Add to wishlist
                  </a>
                  <div className="text-center">
                    <small>No money charged in this step</small>
                  </div>
                </form>
              </div>
              <ul className="share-buttons">
                <li>
                  <a className="fb-share" href="#0">
                    <i className="social_facebook" /> Share
                  </a>
                </li>
                <li>
                  <a className="twitter-share" href="#0">
                    <i className="social_twitter" /> Share
                  </a>
                </li>
                <li>
                  <a className="gplus-share" href="#0">
                    <i className="social_googleplus" /> Share
                  </a>
                </li>
              </ul>
            </aside>
          </div>
          {/* /row */}
        </div>
        {/* /container */}
      </main>
    </FrontLayout>
  );
};

export default Details;
