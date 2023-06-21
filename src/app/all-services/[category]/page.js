import FrontLayout from '../../components/FrontLayout';

const allServices = ({ params }) => {

    console.log(params.category[0]); // print 1st param of query string / url

    return (
        <FrontLayout>
            <main>
                <div className="container margin_60_35">
                    <div className="row">
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="strip grid">
                                <figure>
                                    
                                    <a href="detail.html"><img src="img/location_1.jpg" className="img-fluid" alt /><div className="read_more"><span>Read more</span></div></a>
                                    
                                </figure>
                                <div className="wrapper">
                                    <h3><a href="detail.html">Da Alfredo</a></h3>
                                    <small>27 Old Gloucester St</small>
                                    <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cu.</p>
                                    {/* এখানে lat & long  টা স্ট্যাটিক দেয়া আছে । api থেকে ভ্যালু নিয়ে চেঞ্জ করে দিতে হবে। */}
                                    <a className="address" href={"https://www.google.com/maps/dir/?api=1&destination="+34.059808+","+-118.368152} target="_blank">Get directions</a>
                                </div>
                                <ul>
                                    <li><span className="loc_open">Now Open</span></li>
                                    <li><div className="score"><span>Superb<em>350 Reviews</em></span><strong>8.9</strong></div></li>
                                </ul>
                            </div>
                        </div>
                        {/* /strip grid */}
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="strip grid">
                                <figure>
                                    
                                    <a href="detail.html"><img src="img/location_2.jpg" className="img-fluid" alt /><div className="read_more"><span>Read more</span></div></a>
                                    
                                </figure>
                                <div className="wrapper">
                                    <h3><a href="detail.html">Limon Bar</a></h3>
                                    <small>438 Rush Green Road, Romford</small>
                                    <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cu.</p>
                                    <a className="address" href="https://www.google.com/maps/dir//Assistance+%E2%80%93+H%C3%B4pitaux+De+Paris,+3+Avenue+Victoria,+75004+Paris,+Francia/@48.8606548,2.3348734,14z/data=!4m15!1m6!3m5!1s0x47e66e1de36f4147:0xb6615b4092e0351f!2sAssistance+Publique+-+H%C3%B4pitaux+de+Paris+(AP-HP)+-+Si%C3%A8ge!8m2!3d48.8568376!4d2.3504305!4m7!1m0!1m5!1m1!1s0x47e67031f8c20147:0xa6a9af76b1e2d899!2m2!1d2.3504327!2d48.8568361" target="_blank">Get directions</a>
                                </div>
                                <ul>
                                    <li><span className="loc_open">Now Open</span></li>
                                    <li><div className="score"><span>Good<em>350 Reviews</em></span><strong>7.0</strong></div></li>
                                </ul>
                            </div>
                        </div>
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