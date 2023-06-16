"use client"
import { useEffect } from "react";
import FrontLayout from "../components/FrontLayout";
import OpenApi from "@/app/components/OpenApi";
import { useSearchParams  } from 'next/navigation';



const listing = ({ params }) => {
  const queryParams = useSearchParams();
  const place = queryParams.get('place');
  const category = queryParams.get('category');


  const getDetails = async (id) => {
    try {
      
    } catch (error) {
      
    }
  }

  useEffect(()=>{
    getDetails();
  }, []);


  return (
    <>
      <FrontLayout>
        <main>
          <div id="results">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-4 col-10">
                  <h4>
                    <strong>145</strong> result for All listing
                  </h4>
                </div>
                <div className="col-lg-9 col-md-8 col-2">
                  <a href="#0" className="search_mob btn_search_mobile" />{" "}
                  {/* /open search panel */}
                  <div className="row no-gutters custom-search-input-2 inner">
                    <div className="col-lg-4">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="What are you looking for..."
                        />
                        <i className="icon_search" />
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Where"
                        />
                        <i className="icon_pin_alt" />
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <select className="wide">
                        <option>All Categories</option>
                        <option>Shops</option>
                        <option>Hotels</option>
                        <option>Restaurants</option>
                        <option>Bars</option>
                        <option>Events</option>
                        <option>Fitness</option>
                      </select>
                    </div>
                    <div className="col-lg-1">
                      <input type="submit" defaultValue="Search" />
                    </div>
                  </div>
                </div>
              </div>
              {/* /row */}
              <div className="search_mob_wp">
                <div className="custom-search-input-2">
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="What are you looking for..."
                    />
                    <i className="icon_search" />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Where"
                    />
                    <i className="icon_pin_alt" />
                  </div>
                  {/* <select className="wide">
                    <option>All Categories</option>
                    <option>Shops</option>
                    <option>Hotels</option>
                    <option>Restaurants</option>
                    <option>Bars</option>
                    <option>Events</option>
                    <option>Fitness</option>
                  </select> */}
                  <input type="submit" defaultValue="Search" />
                </div>
              </div>
              {/* /search_mobile */}
            </div>
            {/* /container */}
          </div>
          {/* /results */}
          <div className="filters_listing version_2  sticky_horizontal">
            {/* <div className="container">
              <ul className="clearfix">
                <li>
                  <div className="switch-field">
                    <input
                      type="radio"
                      id="all"
                      name="listing_filter"
                      defaultValue="all"
                      defaultChecked
                    />
                    <label htmlFor="all">All</label>
                    <input
                      type="radio"
                      id="popular"
                      name="listing_filter"
                      defaultValue="popular"
                    />
                    <label htmlFor="popular">Popular</label>
                    <input
                      type="radio"
                      id="latest"
                      name="listing_filter"
                      defaultValue="latest"
                    />
                    <label htmlFor="latest">Latest</label>
                  </div>
                </li>
                <li>
                  <div className="layout_view">
                    <a href="#0" className="active">
                      <i className="icon-th" />
                    </a>
                    <a href="listing-2.html">
                      <i className="icon-th-list" />
                    </a>
                    <a href="list-map.html">
                      <i className="icon-map" />
                    </a>
                  </div>
                </li>
                <li>
                  <a
                    className="btn_map"
                    data-toggle="collapse"
                    href="#collapseMap"
                    aria-expanded="false"
                    aria-controls="collapseMap"
                    data-text-swap="Hide map"
                    data-text-original="View on map"
                  >
                    View on map
                  </a>
                </li>
              </ul>
            </div> */}
            {/* /container */}
          </div>
          {/* /filters */}
          <div className="collapse" id="collapseMap">
            <div id="map" className="map" />
          </div>
          {/* /Map */}
          <div className="container margin_60_35">
            <div className="row">
              <aside className="col-lg-3" id="sidebar">
                <div id="filters_col">
                  <a
                    data-toggle="collapse"
                    href="#collapseFilters"
                    aria-expanded="false"
                    aria-controls="collapseFilters"
                    id="filters_col_bt"
                  >
                    Filters{" "}
                  </a>
                  <div className="collapse show" id="collapseFilters">
                    <div className="filter_type">
                      <h6>Category</h6>
                      <ul>
                        <li>
                          <label className="container_check">
                            Restaurants <small>43</small>
                            <input type="checkbox" />
                            <span className="checkmark" />
                          </label>
                        </li>
                        <li>
                          <label className="container_check">
                            Shops <small>33</small>
                            <input type="checkbox" />
                            <span className="checkmark" />
                          </label>
                        </li>
                        <li>
                          <label className="container_check">
                            Bars <small>12</small>
                            <input type="checkbox" />
                            <span className="checkmark" />
                          </label>
                        </li>
                        <li>
                          <label className="container_check">
                            Events <small>44</small>
                            <input type="checkbox" />
                            <span className="checkmark" />
                          </label>
                        </li>
                      </ul>
                    </div>
                    <div className="filter_type">
                      <h6>Distance</h6>
                      <div className="distance">
                        {" "}
                        Radius around selected destination <span /> km
                      </div>
                      <input
                        type="range"
                        min={10}
                        max={100}
                        step={10}
                        defaultValue={30}
                        data-orientation="horizontal"
                      />
                    </div>
                    <div className="filter_type">
                      <h6>Rating</h6>
                      <ul>
                        <li>
                          <label className="container_check">
                            Superb 9+ <small>34</small>
                            <input type="checkbox" />
                            <span className="checkmark" />
                          </label>
                        </li>
                        <li>
                          <label className="container_check">
                            Very Good 8+ <small>21</small>
                            <input type="checkbox" />
                            <span className="checkmark" />
                          </label>
                        </li>
                        <li>
                          <label className="container_check">
                            Good 7+ <small>15</small>
                            <input type="checkbox" />
                            <span className="checkmark" />
                          </label>
                        </li>
                        <li>
                          <label className="container_check">
                            Pleasant 6+ <small>34</small>
                            <input type="checkbox" />
                            <span className="checkmark" />
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/*/collapse */}
                </div>
                {/*/filters col*/}
              </aside>
              {/* /aside */}
              <div className="col-lg-9">
                <div className="row">
                  <div className="col-md-6">
                    <div className="strip grid">
                      <figure>
                        <a href="#0" className="wish_bt" />
                        <a href="detail-restaurant.html">
                          <img
                            src="img/location_1.jpg"
                            className="img-fluid"
                            alt=""
                          />
                          <div className="read_more">
                            <span>Read more</span>
                          </div>
                        </a>
                        <small>Restaurant</small>
                      </figure>
                      <div className="wrapper">
                        <h3>
                          <a href="detail-restaurant.html">Da Alfredo</a>
                        </h3>
                        <small>27 Old Gloucester St</small>
                        <p>
                          Id placerat tacimates definitionem sea, prima quidam
                          vim no. Duo nobis persecuti cu.
                        </p>
                        <a
                          className="address"
                          href="https://www.google.com/maps/dir//Assistance+%E2%80%93+H%C3%B4pitaux+De+Paris,+3+Avenue+Victoria,+75004+Paris,+Francia/@48.8606548,2.3348734,14z/data=!4m15!1m6!3m5!1s0x47e66e1de36f4147:0xb6615b4092e0351f!2sAssistance+Publique+-+H%C3%B4pitaux+de+Paris+(AP-HP)+-+Si%C3%A8ge!8m2!3d48.8568376!4d2.3504305!4m7!1m0!1m5!1m1!1s0x47e67031f8c20147:0xa6a9af76b1e2d899!2m2!1d2.3504327!2d48.8568361"
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
                  {/* /strip grid */}
                  <div className="col-md-6">
                    <div className="strip grid">
                      <figure>
                        <a href="#0" className="wish_bt" />
                        <a href="detail-restaurant.html">
                          <img
                            src="img/location_2.jpg"
                            className="img-fluid"
                            alt=""
                          />
                          <div className="read_more">
                            <span>Read more</span>
                          </div>
                        </a>
                        <small>Bar</small>
                      </figure>
                      <div className="wrapper">
                        <h3>
                          <a href="detail-restaurant.html">Limon Bar</a>
                        </h3>
                        <small>438 Rush Green Road, Romford</small>
                        <p>
                          Id placerat tacimates definitionem sea, prima quidam
                          vim no. Duo nobis persecuti cu.
                        </p>
                        <a
                          className="address"
                          href="https://www.google.com/maps/dir//Assistance+%E2%80%93+H%C3%B4pitaux+De+Paris,+3+Avenue+Victoria,+75004+Paris,+Francia/@48.8606548,2.3348734,14z/data=!4m15!1m6!3m5!1s0x47e66e1de36f4147:0xb6615b4092e0351f!2sAssistance+Publique+-+H%C3%B4pitaux+de+Paris+(AP-HP)+-+Si%C3%A8ge!8m2!3d48.8568376!4d2.3504305!4m7!1m0!1m5!1m1!1s0x47e67031f8c20147:0xa6a9af76b1e2d899!2m2!1d2.3504327!2d48.8568361"
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
                              Good<em>350 Reviews</em>
                            </span>
                            <strong>7.0</strong>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* /strip grid */}
                  <div className="col-md-6">
                    <div className="strip grid">
                      <figure>
                        <a href="#0" className="wish_bt" />
                        <a href="detail-shop.html">
                          <img
                            src="img/location_3.jpg"
                            className="img-fluid"
                            alt=""
                          />
                          <div className="read_more">
                            <span>Read more</span>
                          </div>
                        </a>
                        <small>Shop</small>
                      </figure>
                      <div className="wrapper">
                        <h3>
                          <a href="detail-shop.html">Mary Boutique</a>
                        </h3>
                        <small>43 Stephen Road, Bexleyheath</small>
                        <p>
                          Id placerat tacimates definitionem sea, prima quidam
                          vim no. Duo nobis persecuti cu.
                        </p>
                        <a
                          className="address"
                          href="https://www.google.com/maps/dir//Assistance+%E2%80%93+H%C3%B4pitaux+De+Paris,+3+Avenue+Victoria,+75004+Paris,+Francia/@48.8606548,2.3348734,14z/data=!4m15!1m6!3m5!1s0x47e66e1de36f4147:0xb6615b4092e0351f!2sAssistance+Publique+-+H%C3%B4pitaux+de+Paris+(AP-HP)+-+Si%C3%A8ge!8m2!3d48.8568376!4d2.3504305!4m7!1m0!1m5!1m1!1s0x47e67031f8c20147:0xa6a9af76b1e2d899!2m2!1d2.3504327!2d48.8568361"
                        >
                          Get directions
                        </a>
                      </div>
                      <ul>
                        <li>
                          <span className="loc_closed">Now Closed</span>
                        </li>
                        <li>
                          <div className="score">
                            <span>
                              Good<em>350 Reviews</em>
                            </span>
                            <strong>7.0</strong>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* /strip grid */}
                  <div className="col-md-6">
                    <div className="strip grid">
                      <figure>
                        <a href="#0" className="wish_bt" />
                        <a href="detail-restaurant.html">
                          <img
                            src="img/location_4.jpg"
                            className="img-fluid"
                            alt=""
                          />
                          <div className="read_more">
                            <span>Read more</span>
                          </div>
                        </a>
                        <small>Bar</small>
                      </figure>
                      <div className="wrapper">
                        <h3>
                          <a href="detail-restaurant.html">Garden Bar</a>
                        </h3>
                        <small>40 Beechwood Road, Sanderstead</small>
                        <p>
                          Id placerat tacimates definitionem sea, prima quidam
                          vim no. Duo nobis persecuti cu.
                        </p>
                        <a
                          className="address"
                          href="https://www.google.com/maps/dir//Assistance+%E2%80%93+H%C3%B4pitaux+De+Paris,+3+Avenue+Victoria,+75004+Paris,+Francia/@48.8606548,2.3348734,14z/data=!4m15!1m6!3m5!1s0x47e66e1de36f4147:0xb6615b4092e0351f!2sAssistance+Publique+-+H%C3%B4pitaux+de+Paris+(AP-HP)+-+Si%C3%A8ge!8m2!3d48.8568376!4d2.3504305!4m7!1m0!1m5!1m1!1s0x47e67031f8c20147:0xa6a9af76b1e2d899!2m2!1d2.3504327!2d48.8568361"
                        >
                          Get directions
                        </a>
                      </div>
                      <ul>
                        <li>
                          <span className="loc_closed">Now Closed</span>
                        </li>
                        <li>
                          <div className="score">
                            <span>
                              Superb<em>350 Reviews</em>
                            </span>
                            <strong>9.0</strong>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* /strip grid */}
                  <div className="col-md-6">
                    <div className="strip grid">
                      <figure>
                        <a href="#0" className="wish_bt" />
                        <a href="detail-hotel.html">
                          <img
                            src="img/location_5.jpg"
                            className="img-fluid"
                            alt=""
                          />
                          <div className="read_more">
                            <span>Read more</span>
                          </div>
                        </a>
                        <small>Hotel</small>
                      </figure>
                      <div className="wrapper">
                        <h3>
                          <a href="detail-hotel.html">Mariott Hotel</a>
                        </h3>
                        <small>213 Malden Road, New Malden</small>
                        <p>
                          Id placerat tacimates definitionem sea, prima quidam
                          vim no. Duo nobis persecuti cu.
                        </p>
                        <a
                          className="address"
                          href="https://www.google.com/maps/dir//Assistance+%E2%80%93+H%C3%B4pitaux+De+Paris,+3+Avenue+Victoria,+75004+Paris,+Francia/@48.8606548,2.3348734,14z/data=!4m15!1m6!3m5!1s0x47e66e1de36f4147:0xb6615b4092e0351f!2sAssistance+Publique+-+H%C3%B4pitaux+de+Paris+(AP-HP)+-+Si%C3%A8ge!8m2!3d48.8568376!4d2.3504305!4m7!1m0!1m5!1m1!1s0x47e67031f8c20147:0xa6a9af76b1e2d899!2m2!1d2.3504327!2d48.8568361"
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
                              Good<em>350 Reviews</em>
                            </span>
                            <strong>7.5</strong>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* /strip grid */}
                  <div className="col-md-6">
                    <div className="strip grid">
                      <figure>
                        <a href="#0" className="wish_bt" />
                        <a href="detail-restaurant.html">
                          <img
                            src="img/location_6.jpg"
                            className="img-fluid"
                            alt=""
                          />
                          <div className="read_more">
                            <span>Read more</span>
                          </div>
                        </a>
                        <small>Event</small>
                      </figure>
                      <div className="wrapper">
                        <h3>
                          <a href="detail-restaurant.html">Six Pistols</a>
                        </h3>
                        <small>Coverdale Road, Willesden</small>
                        <p>
                          Id placerat tacimates definitionem sea, prima quidam
                          vim no. Duo nobis persecuti cu.
                        </p>
                        <a
                          className="address"
                          href="https://www.google.com/maps/dir//Assistance+%E2%80%93+H%C3%B4pitaux+De+Paris,+3+Avenue+Victoria,+75004+Paris,+Francia/@48.8606548,2.3348734,14z/data=!4m15!1m6!3m5!1s0x47e66e1de36f4147:0xb6615b4092e0351f!2sAssistance+Publique+-+H%C3%B4pitaux+de+Paris+(AP-HP)+-+Si%C3%A8ge!8m2!3d48.8568376!4d2.3504305!4m7!1m0!1m5!1m1!1s0x47e67031f8c20147:0xa6a9af76b1e2d899!2m2!1d2.3504327!2d48.8568361"
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
                              Good<em>350 Reviews</em>
                            </span>
                            <strong>7.8</strong>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* /strip grid */}
                </div>
                {/* /row */}
                <p className="text-center">
                  <a href="#0" className="btn_1 rounded add_top_30">
                    Load more
                  </a>
                </p>
              </div>
              {/* /col */}
            </div>
          </div>
          {/* /container */}
        </main>
      </FrontLayout>
    </>
  );
};

export default listing;
