"use client"
import { useEffect } from 'react';
import FrontLayout from '../../components/FrontLayout';
import { useState } from "react";
//import OpenApi from "./components/OpenApi";
import OpenApi from "../../components/OpenApi";
//console.log("--------",OpenApi)
const allServices = ({ params }) => {
    const [services, setServises] = useState("");
   console.log("------------------------=========++",params.category); // print 1st param of query string / url




    const getflagedServices = async (flag) => {
       //console.log("env======", process.env.NEXT_PUBLIC_BASE_URL);
        try {
          let datas = await OpenApi.get("/flaged-services/" + flag);     
         console.log("----",datas.data.services)
         setServises(datas.data.services)
        }
         catch (error) {
            setServises([]);
          console.log({ error });
        }
      };








    useEffect(()=>{
        getflagedServices(params.category);
    }, []);

    return (
        <FrontLayout>
            <main>
                <div className="container margin_60_35">
               
                  <div className="row">
                  {services && services.map((item, index) => (
                        <div className="col-xl-4 col-lg-6 col-md-6" key={item.id}>
                            <div className="strip grid">
                                <figure>
                                    
                                 <a href="detail.html"><img src={process.env.NEXT_PUBLIC_BASE_IMG_URL + item.f_img} className="img-fluid" alt /><div className="read_more"><span>Read more</span></div></a>
                                    
                                </figure>
                                <div className="wrapper">
                                    <h3><a href="detail.html">{item.name}</a></h3>
                                    <small>{item.address !="" ? item.address : " " }</small>
                                    <p> {item.slug !="" ? item.slug : " " }</p>
                                    {/* এখানে lat & long  টা স্ট্যাটিক দেয়া আছে । api থেকে ভ্যালু নিয়ে চেঞ্জ করে দিতে হবে। */}
                                    <a className="address" href={`https://www.google.com/maps/dir/?api=1&destination=${item.lat !== "" ? item.lng : " "},-118.368152`} target="_blank">Get directions</a>
                                </div>

                                <ul>
                              {item && item.is_online=="online" && <li>
                                <span className="loc_open">Now Open</span>
                              </li>}
                              {item && item.is_online=="offline" && <li>
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







                                {/* <ul>
                                    <li><span className="loc_open">Now {item.is_online}</span></li>
                                    <li><div className="score"><span>Superb<em>350 Reviews</em></span><strong>8.9</strong></div></li>
                                </ul> */}
                            </div>
                        </div>
                        ))}
                    {services?.length===0 && <h1 className="text-center">Sorry no result found.</h1>}
                    </div>
             
           

                    {/* /row */}
                </div>
                {/* /container */}
            </main>
            {/*/main*/}

        </FrontLayout>
    );
}

export default allServices;