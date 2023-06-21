"use client"
import { useEffect, useState } from "react";
import FrontLayout from "../components/FrontLayout";
import OpenApi from "@/app/components/OpenApi";
import { useSearchParams  } from 'next/navigation';
import Common from "../components/Common";
import Link from "next/link";



const listing = ({ params }) => {
  const [leads, setLeads] = useState(null);

  const queryParams = useSearchParams();
  const place = queryParams.get('place');
  const category = queryParams.get('category');


  const getSearch = async (id) => {
    try {
      const paramsObj = {
        place: decodeURIComponent(place===null?'':place),
        category: decodeURIComponent(category===null?'':category), 
      };
      const searchParams = new URLSearchParams(paramsObj); //from core javascript
      console.log(searchParams.toString())

      let details = await OpenApi.get("/search?"+searchParams.toString());
      if(details.data?.leads) {
        setLeads(details.data.leads);
      }

    } catch (error) {
      setLeads([]);
      console.log({ error });
    }
  }

  useEffect(()=>{
    getSearch();
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
                    <strong>{leads?leads.length: 0}</strong> result(s) found
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
                    {/* <div className="filter_type">
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
                    </div> */}
                    {/* <div className="filter_type">
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
                    </div> */}
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
                  {leads && leads.map((lead, index)=> {
                      return (
                        <div className="col-md-6" key={index}>
                          <div className="strip grid">
                            <figure>
                              {/* <a href="#0" className="wish_bt" /> */}
                              <Link href={"/details/" + Common.slugify(lead.lead_name) + "/" + lead.lead_id}>
                                <img
                                  src={process.env.NEXT_PUBLIC_BASE_IMG_URL + lead.f_img} alt={lead.f_img}
                                  className="img-fluid"
                                />
                                <div className="read_more">
                                  <span>Read more</span>
                                </div>
                              </Link>
                              <small>{Common.ucWord(lead?.category_name)}</small>
                            </figure>
                            <div className="wrapper">
                              <h3>
                                <a href={"/details/" + Common.slugify(lead.lead_name) + "/" + lead.id}>{Common.ucWord(lead.lead_name)}</a>
                              </h3>
                              <small>{Common.ucWord(lead?.address)} {Common.ucWord(lead?.city_name)}</small>
                              <p dangerouslySetInnerHTML={{ __html: (lead.short_description) }}></p>
                              <a
                                className="address" target="_blank"
                                href={"https://www.google.com/maps/dir/?api=1&destination="+lead?.lat+","+lead?.lng}
                               >
                                Get directions
                              </a>
                            </div>
                            <ul>
                              {lead && lead.is_online=="online" && <li>
                                <span className="loc_open">Now Open</span>
                              </li>}
                              {lead && lead.is_online=="offline" && <li>
                                <span className="loc_closed">Now Closed</span>
                              </li>}
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
                        </div>)
                  })}
                 
                </div>
                {leads?.length===0 && <h1 className="text-center">Sorry no result found.</h1>}
                {/* /row */}
                {/* <p className="text-center">
                  <a href="#0" className="btn_1 rounded add_top_30">
                    Load more
                  </a>
                </p> */}
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
