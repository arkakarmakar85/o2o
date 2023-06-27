"use client";
import { useEffect, useState } from "react";
import FrontLayout from "../../components/FrontLayout";
//import OpenApi from "@/app/components/OpenApi";
import OpenApi from "@/app/components/OpenApi";
const sample = ({ params }) => {
  const [details, setDetails] = useState();

  const getDetails = async (id) => {
    try {
      let details = await OpenApi.get("/category-details?id=" + id);
      console.log(details.data);

      setDetails(details.data);
    } catch (error) {
      setDetails([]);
    }
  };

  useEffect(() => {
    getDetails(params.slug[1]);
  }, []);

  return (
    <FrontLayout>
      <main>
        <div className="container margin_60_35">
          <div className="row">
            <div className="col-lg-9">
              <div className="singlepost">
                <figure>
                  <img alt className="img-fluid" src="/img/blog-single.jpg" />
                </figure>

                <h1>{details? details.categoryDetails.p_name : " "}</h1>

                <div className="post-content">
                  <div className="dropcaps">
                    <p>
                      {/* Description */}
                      {details ? details.categoryDetails.description : ""}
                    </p>
                  </div>

                  <hr />
                  <div className="row">
                    {details &&
                      details.leads.map((detail) => {
                        return (
                          <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="strip grid">
                              <div className="wrapper">
                                <figure>
                                  {/* <a href="#0" className="wish_bt liked" /> */}
                                  <a href="detail.html">
                                    {/* <img
                                      src="/img/location_1.jpg"
                                      className="img-fluid"
                                      alt
                                    /> */}
                                      <img src={process.env.NEXT_PUBLIC_BASE_IMG_URL + detail.f_img} alt={detail.f_img} />
                                    <div className="read_more">
                                      <span>Read more</span>
                                    </div>
                                  </a>
                                  {/* <small>Restaurant</small> */}
                                </figure>
                                <h3>
                                  <a href="detail.html">Da Alfredo</a>
                                </h3>
                                <small>
                                  {/* {service!= "" ? service[leads].city_id : " "} */}
                                </small>
                                <p>
                                  {detail.slug}
                                </p>
                                <a
                                  className="address"
                                  href="https://www.google.com/maps/dir//Assistance+%E2%80%93+H%C3%B4pitaux+De+Paris,+3+Avenue+Victoria,+75004+Paris,+Francia/@48.8606548,2.3348734,14z/data=!4m15!1m6!3m5!1s0x47e66e1de36f4147:0xb6615b4092e0351f!2sAssistance+Publique+-+H%C3%B4pitaux+de+Paris+(AP-HP)+-+Si%C3%A8ge!8m2!3d48.8568376!4d2.3504305!4m7!1m0!1m5!1m1!1s0x47e67031f8c20147:0xa6a9af76b1e2d899!2m2!1d2.3504327!2d48.8568361"
                                  target="_blank"
                                >
                                  Get directions
                                </a>
                              </div>
                              <ul>
                                <li>
                                  <span className="loc_open">Now Open</span>
                                </li>
                                <li>
                                  <div className="score">
                                    <span>
                                      Superb<em>350 Reviews</em>
                                    </span>
                                    <strong>8.9</strong>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>

                {/* start */}
              </div>

              <hr />
            </div>
            {/* /col */}
            <aside className="col-lg-3">
              {/* /widget */}
              <div className="widget">
                <div className="widget-title">
                  <h4>Top from this category</h4>
                </div>
                <ul className="comments-list">
                  <li>
                    <div className="alignleft">
                      <a href="#0">
                        <img src="/img/blog-5.jpg" alt />
                      </a>
                    </div>
                    <small>Category - 11.08.2016</small>
                    <h3>
                      <a href="#" title>
                        Verear qualisque ex minimum...
                      </a>
                    </h3>
                  </li>
                  <li>
                    <div className="alignleft">
                      <a href="#0">
                        <img src="/img/blog-6.jpg" alt />
                      </a>
                    </div>
                    <small>Category - 11.08.2016</small>
                    <h3>
                      <a href="#" title>
                        Verear qualisque ex minimum...
                      </a>
                    </h3>
                  </li>
                  <li>
                    <div className="alignleft">
                      <a href="#0">
                        <img src="/img/blog-4.jpg" alt />
                      </a>
                    </div>
                    <small>Category - 11.08.2016</small>
                    <h3>
                      <a href="#" title>
                        Verear qualisque ex minimum...
                      </a>
                    </h3>
                  </li>
                </ul>
              </div>
              {/* /widget */}
            </aside>
            {/* /aside */}
          </div>
          {/* /row */}
        </div>
        {/* /container */}
      </main>
      {/*/main*/}
      {/* SPECIFIC CSS */}
      <link href="/css/blog.css" rel="stylesheet" />
    </FrontLayout>
  );
};

export default sample;
