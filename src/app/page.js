"use client"
import HomeHeader from './components/HomeHeader';
import FrontFooter from './components/FrontFooter';
import SignInDialog from './components/SignInDialog';
import Meta from './components/Meta';
import OpenApi from './components/OpenApi'
import { useEffect } from 'react';

export default function Home() {

  const getflagedServices = async () => {
    //console.log("env", process.env.NEXT_PUBLIC_BASE_URL);
    try {
      await OpenApi.get("/flaged-services/is_popular");
    } catch (error) {
      console.log({error});
    }
  }

  useEffect(()=> {
    getflagedServices();
  }, []);

  return (
    <>
      <div>
        <Meta />
        <div id="page">
          <HomeHeader />
          <main className="pattern">
            <section className="hero_single version_2">
              <div className="wrapper">
                <div className="container">
                  <h3>Find what you need!</h3>
                  <p>Discover top rated hotels, shops and restaurants around the world</p>
                  <form method="post" action="grid-listings-filterscol.html">
                    <div className="row no-gutters custom-search-input-2">
                      <div className="col-lg-6">
                        <div className="form-group">
                           {/* code add hoba */}
                          <input className="form-control" type="text" placeholder="What are you looking for..." />
                          <i className="icon_search" />
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="form-group">
                          <input className="form-control" type="text" placeholder="Where" />
                          <i className="icon_pin_alt" />
                        </div>
                      </div>
                      {/* <div className="col-lg-3">
                        <select className="wide">
                          <option>All Categories</option>
                          <option>Shops</option>
                          <option>Hotels</option>
                          <option>Restaurants</option>
                          <option>Bars</option>
                          <option>Events</option>
                          <option>Fitness</option>
                        </select>
                      </div> */}
                      <div className="col-lg-2">
                        <input type="submit" defaultValue="Search" />
                      </div>
                    </div>
                    {/* /row */}
                  </form>
                </div>
              </div>
            </section>
            {/* /hero_single */}
            <div className="main_categories">
              <div className="container">
                <ul className="clearfix">
                  <li>
                    <a href="grid-listings-filterscol.html">
                      <i className="icon-shop" />
                      <h3>Shops</h3>
                    </a>
                  </li>
                  <li>
                    <a href="grid-listings-filterscol.html">
                      <i className="icon-lodging" />
                      <h3>Hotels</h3>
                    </a>
                  </li>
                  <li>
                    <a href="grid-listings-filterscol.html">
                      <i className="icon-restaurant" />
                      <h3>Restaurants</h3>
                    </a>
                  </li>
                  <li>
                    <a href="grid-listings-filterscol.html">
                      <i className="icon-bar" />
                      <h3>Bars</h3>
                    </a>
                  </li>
                  <li>
                    <a href="grid-listings-filterscol.html">
                      <i className="icon-dot-3" />
                      <h3>More</h3>
                    </a>
                  </li>
                </ul>
              </div>
              {/* /container */}
            </div>
            {/* /main_categories */}
            <div className="container margin_60_35">
              <div className="main_title_3">
                <span />
                <h2>Famous Shops</h2>
                <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
                <a href="grid-listings-filterscol.html">See all</a>
              </div>
              <div className="row add_bottom_30">
                <div className="col-lg-3 col-sm-6">
                  <a href="detail-shop.html" className="grid_item small">
                    <figure>
                      <img src="img/shop_1.jpg" alt="" />
                      <div className="info">
                        <h3>Victoria Secretes</h3>
                      </div>
                    </figure>
                  </a>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <a href="detail-shop.html" className="grid_item small">
                    <figure>
                      <img src="img/shop_2.jpg" alt="" />
                      <div className="info">
                        <h3>Louis Vuitton</h3>
                      </div>
                    </figure>
                  </a>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <a href="detail-shop.html" className="grid_item small">
                    <figure>
                      <img src="img/shop_3.jpg" alt="" />
                      <div className="info">
                        <h3>Burberry</h3>
                      </div>
                    </figure>
                  </a>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <a href="detail-shop.html" className="grid_item small">
                    <figure>
                      <img src="img/shop_4.jpg" alt="" />
                      <div className="info">
                        <h3>Pinko</h3>
                      </div>
                    </figure>
                  </a>
                </div>
              </div>
              {/* /row */}
              <div className="main_title_3">
                <span />
                <h2>Popular Hotels</h2>
                <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
                <a href="grid-listings-filterscol.html">See all</a>
              </div>
              <div className="row add_bottom_30">
                <div className="col-lg-3 col-sm-6">
                  <a href="detail-hotel.html" className="grid_item small">
                    <figure>
                      <img src="img/hotel_1.jpg" alt="" />
                      <div className="info">
                        <div className="cat_star"><i className="icon_star" /><i className="icon_star" /><i className="icon_star" /><i className="icon_star" /></div>
                        <h3>Hotel Mariott</h3>
                      </div>
                    </figure>
                  </a>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <a href="detail-hotel.html" className="grid_item small">
                    <figure>
                      <img src="img/hotel_2.jpg" alt="" />
                      <div className="info">
                        <div className="cat_star"><i className="icon_star" /><i className="icon_star" /><i className="icon_star" /><i className="icon_star" /></div>
                        <h3>Hotel Concorde</h3>
                      </div>
                    </figure>
                  </a>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <a href="detail-hotel.html" className="grid_item small">
                    <figure>
                      <img src="img/hotel_3.jpg" alt="" />
                      <div className="info">
                        <div className="cat_star"><i className="icon_star" /><i className="icon_star" /><i className="icon_star" /><i className="icon_star" /></div>
                        <h3>Hotel La Defanse</h3>
                      </div>
                    </figure>
                  </a>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <a href="detail-hotel.html" className="grid_item small">
                    <figure>
                      <img src="img/hotel_4.jpg" alt="" />
                      <div className="info">
                        <div className="cat_star"><i className="icon_star" /><i className="icon_star" /><i className="icon_star" /><i className="icon_star" /></div>
                        <h3>Hotel Carlton</h3>
                      </div>
                    </figure>
                  </a>
                </div>
              </div>
              {/* /row */}
              <div className="main_title_3">
                <span />
                <h2>Top Restaurants</h2>
                <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
                <a href="grid-listings-filterscol.html">See all</a>
              </div>
              <div className="row ">
                <div className="col-lg-3 col-sm-6">
                  <a href="detail-restaurant.html" className="grid_item small">
                    <figure>
                      <img src="img/restaurant_1.jpg" alt="" />
                      <div className="info">
                        <h3>Da Alfredo</h3>
                      </div>
                    </figure>
                  </a>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <a href="detail-restaurant.html" className="grid_item small">
                    <figure>
                      <img src="img/restaurant_2.jpg" alt="" />
                      <div className="info">
                        <h3>Bistroter</h3>
                      </div>
                    </figure>
                  </a>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <a href="detail-restaurant.html" className="grid_item small">
                    <figure>
                      <img src="img/restaurant_3.jpg" alt="" />
                      <div className="info">
                        <h3>Da Luigi</h3>
                      </div>
                    </figure>
                  </a>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <a href="detail-restaurant.html" className="grid_item small">
                    <figure>
                      <img src="img/restaurant_4.jpg" alt="" />
                      <div className="info">
                        <h3>Marco King</h3>
                      </div>
                    </figure>
                  </a>
                </div>
              </div>
              {/* /row */}
            </div>
            {/* /container */}
            <div className="call_section">
              <div className="wrapper">
                <div className="container margin_80_55">
                  <div className="main_title_2">
                    <span><em /></span>
                    <h2>How it Works</h2>
                    <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="box_how">
                        <i className="pe-7s-search" />
                        <h3>Search Locations</h3>
                        <p>An nec placerat repudiare scripserit, temporibus complectitur at sea, vel ignota fierent eloquentiam id.</p>
                        <span />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="box_how">
                        <i className="pe-7s-info" />
                        <h3>View Location Info</h3>
                        <p>An nec placerat repudiare scripserit, temporibus complectitur at sea, vel ignota fierent eloquentiam id.</p>
                        <span />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="box_how">
                        <i className="pe-7s-like2" />
                        <h3>Book, Reach or Call</h3>
                        <p>An nec placerat repudiare scripserit, temporibus complectitur at sea, vel ignota fierent eloquentiam id.</p>
                      </div>
                    </div>
                  </div>
                  {/* /row */}
                  <p className="text-center add_top_30 wow bounceIn" data-wow-delay="0.5s"><a href="account.html" className="btn_1 rounded">Register Now</a></p>
                </div>
                <canvas id="hero-canvas" width={1920} height={1080} />
              </div>
              {/* /wrapper */}
            </div>
            {/*/call_section*/}
            <div className="container margin_80_55">
              <div className="main_title_2">
                <span><em /></span>
                <h2>Sparker App Available</h2>
                <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
              </div>
              <div className="row justify-content-center text-center">
                <div className="col-md-6">
                  <img src="img/mobile.svg" alt className="img-fluid add_bottom_45" />
                  <div className="app_icons">
                    <a href="#0" className="pr-lg-2"><img src="img/app_android.svg" alt="" /></a>
                    <a href="#0" className="pl-lg-2"><img src="img/app_apple.svg" alt="" /></a>
                  </div>
                  <div className="add_bottom_15"><small>*An eum dolores tractatos, aeterno menandri deseruisse ut eum.</small></div>
                </div>
              </div>
            </div>
            {/* /container */}
          </main>
          <FrontFooter />
        </div>
        <SignInDialog />
      </div>
    </>
  )
}
