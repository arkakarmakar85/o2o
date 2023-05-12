import Script from 'next/script';
import AdminMeta from './../components/AdminMenu';
import LogoutModal from './../components/LogoutModal';
import AdminNav from '../components/AdminNav';
import AdminFooter from '../components/AdminFooter';

export default function admin() {
  return (
    <>
        <AdminMeta />
        <AdminNav />
        <div className="content-wrapper">
          <div className="container-fluid">
            {/* Breadcrumbs*/}
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Dashboard</a>
              </li>
              <li className="breadcrumb-item active">Add listing</li>
            </ol>
            <div className="box_general padding_bottom">
              <div className="header_box version_2">
                <h2>
                  <i className="fa fa-file" />
                  Basic info
                </h2>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Listing Title</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Hotel Mariott"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Category</label>
                    <div className="styled-select">
                      <select>
                        <option>Hotel</option>
                        <option>Shops</option>
                        <option>Restaurant</option>
                        <option>Bar</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              {/* /row*/}
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Keywords</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Keywords should be separated by commas"
                    />
                  </div>
                </div>
              </div>
              {/* /row*/}
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label>Description</label>
                    <div className="editor" />
                  </div>
                </div>
              </div>
              {/* /row*/}
              <div className="row">
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Phone (Optional)</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Web site (Optional)</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Email (Optional)</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>
              {/* /row*/}
              <div className="row">
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Facebook link (Optional)</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Twitter link (Optional)</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Google + (Optional)</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>
              {/* /row*/}
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label>Photos</label>
                    <form action="/file-upload" className="dropzone" />
                  </div>
                </div>
              </div>
              {/* /row*/}
            </div>
            {/* /box_general*/}
            <div className="box_general padding_bottom">
              <div className="header_box version_2">
                <h2>
                  <i className="fa fa-map-marker" />
                  Location
                </h2>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Select City</label>
                    <div className="styled-select">
                      <select>
                        <option>Miami</option>
                        <option>New York</option>
                        <option>Los Angeles</option>
                        <option>San Francisco</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Address</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="ex. 250, Fifth Avenue..."
                    />
                  </div>
                </div>
              </div>
              {/* /row*/}
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>State</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Zip Code</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>
              {/* /row*/}
            </div>
            {/* /box_general*/}
            <div className="box_general padding_bottom">
              <div className="header_box version_2">
                <h2>
                  <i className="fa fa-clock-o" />
                  Opening
                </h2>
              </div>
              <div className="row">
                <div className="col-md-2">
                  <label className="fix_spacing">Monday</label>
                </div>
                <div className="col-md-5">
                  <div className="form-group">
                    <div className="styled-select">
                      <select>
                        <option>Opening Time</option>
                        <option>Closed</option>
                        <option>1 AM</option>
                        <option>2 AM</option>
                        <option>3 AM</option>
                        <option>4 AM</option>
                        <option>5 AM</option>
                        <option>6 AM</option>
                        <option>7 AM</option>
                        <option>8 AM</option>
                        <option>9 AM</option>
                        <option>10 AM</option>
                        <option>11 AM</option>
                        <option>12 AM</option>
                        <option>1 PM</option>
                        <option>2 PM</option>
                        <option>3 PM</option>
                        <option>4 PM</option>
                        <option>5 PM</option>
                        <option>6 PM</option>
                        <option>7 PM</option>
                        <option>8 PM</option>
                        <option>9 PM</option>
                        <option>10 PM</option>
                        <option>11 PM</option>
                        <option>12 PM</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="form-group">
                    <div className="styled-select">
                      <select>
                        <option>Closing Time</option>
                        <option>Closed</option>
                        <option>1 AM</option>
                        <option>2 AM</option>
                        <option>3 AM</option>
                        <option>4 AM</option>
                        <option>5 AM</option>
                        <option>6 AM</option>
                        <option>7 AM</option>
                        <option>8 AM</option>
                        <option>9 AM</option>
                        <option>10 AM</option>
                        <option>11 AM</option>
                        <option>12 AM</option>
                        <option>1 PM</option>
                        <option>2 PM</option>
                        <option>3 PM</option>
                        <option>4 PM</option>
                        <option>5 PM</option>
                        <option>6 PM</option>
                        <option>7 PM</option>
                        <option>8 PM</option>
                        <option>9 PM</option>
                        <option>10 PM</option>
                        <option>11 PM</option>
                        <option>12 PM</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              {/* /row*/}
              <div className="row">
                <div className="col-md-2">
                  <label className="fix_spacing">Tuesday</label>
                </div>
                <div className="col-md-5">
                  <div className="form-group">
                    <div className="styled-select">
                      <select>
                        <option>Opening Time</option>
                        <option>Closed</option>
                        <option>1 AM</option>
                        <option>2 AM</option>
                        <option>3 AM</option>
                        <option>4 AM</option>
                        <option>5 AM</option>
                        <option>6 AM</option>
                        <option>7 AM</option>
                        <option>8 AM</option>
                        <option>9 AM</option>
                        <option>10 AM</option>
                        <option>11 AM</option>
                        <option>12 AM</option>
                        <option>1 PM</option>
                        <option>2 PM</option>
                        <option>3 PM</option>
                        <option>4 PM</option>
                        <option>5 PM</option>
                        <option>6 PM</option>
                        <option>7 PM</option>
                        <option>8 PM</option>
                        <option>9 PM</option>
                        <option>10 PM</option>
                        <option>11 PM</option>
                        <option>12 PM</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="form-group">
                    <div className="styled-select">
                      <select>
                        <option>Closing Time</option>
                        <option>Closed</option>
                        <option>1 AM</option>
                        <option>2 AM</option>
                        <option>3 AM</option>
                        <option>4 AM</option>
                        <option>5 AM</option>
                        <option>6 AM</option>
                        <option>7 AM</option>
                        <option>8 AM</option>
                        <option>9 AM</option>
                        <option>10 AM</option>
                        <option>11 AM</option>
                        <option>12 AM</option>
                        <option>1 PM</option>
                        <option>2 PM</option>
                        <option>3 PM</option>
                        <option>4 PM</option>
                        <option>5 PM</option>
                        <option>6 PM</option>
                        <option>7 PM</option>
                        <option>8 PM</option>
                        <option>9 PM</option>
                        <option>10 PM</option>
                        <option>11 PM</option>
                        <option>12 PM</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              {/* /row*/}
              <div className="row">
                <div className="col-md-2">
                  <label className="fix_spacing">Wednesday</label>
                </div>
                <div className="col-md-5">
                  <div className="form-group">
                    <div className="styled-select">
                      <select>
                        <option>Opening Time</option>
                        <option>Closed</option>
                        <option>1 AM</option>
                        <option>2 AM</option>
                        <option>3 AM</option>
                        <option>4 AM</option>
                        <option>5 AM</option>
                        <option>6 AM</option>
                        <option>7 AM</option>
                        <option>8 AM</option>
                        <option>9 AM</option>
                        <option>10 AM</option>
                        <option>11 AM</option>
                        <option>12 AM</option>
                        <option>1 PM</option>
                        <option>2 PM</option>
                        <option>3 PM</option>
                        <option>4 PM</option>
                        <option>5 PM</option>
                        <option>6 PM</option>
                        <option>7 PM</option>
                        <option>8 PM</option>
                        <option>9 PM</option>
                        <option>10 PM</option>
                        <option>11 PM</option>
                        <option>12 PM</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="form-group">
                    <div className="styled-select">
                      <select>
                        <option>Closing Time</option>
                        <option>Closed</option>
                        <option>1 AM</option>
                        <option>2 AM</option>
                        <option>3 AM</option>
                        <option>4 AM</option>
                        <option>5 AM</option>
                        <option>6 AM</option>
                        <option>7 AM</option>
                        <option>8 AM</option>
                        <option>9 AM</option>
                        <option>10 AM</option>
                        <option>11 AM</option>
                        <option>12 AM</option>
                        <option>1 PM</option>
                        <option>2 PM</option>
                        <option>3 PM</option>
                        <option>4 PM</option>
                        <option>5 PM</option>
                        <option>6 PM</option>
                        <option>7 PM</option>
                        <option>8 PM</option>
                        <option>9 PM</option>
                        <option>10 PM</option>
                        <option>11 PM</option>
                        <option>12 PM</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              {/* /row*/}
              <div className="row">
                <div className="col-md-2">
                  <label className="fix_spacing">Thursday</label>
                </div>
                <div className="col-md-5">
                  <div className="form-group">
                    <div className="styled-select">
                      <select>
                        <option>Opening Time</option>
                        <option>Closed</option>
                        <option>1 AM</option>
                        <option>2 AM</option>
                        <option>3 AM</option>
                        <option>4 AM</option>
                        <option>5 AM</option>
                        <option>6 AM</option>
                        <option>7 AM</option>
                        <option>8 AM</option>
                        <option>9 AM</option>
                        <option>10 AM</option>
                        <option>11 AM</option>
                        <option>12 AM</option>
                        <option>1 PM</option>
                        <option>2 PM</option>
                        <option>3 PM</option>
                        <option>4 PM</option>
                        <option>5 PM</option>
                        <option>6 PM</option>
                        <option>7 PM</option>
                        <option>8 PM</option>
                        <option>9 PM</option>
                        <option>10 PM</option>
                        <option>11 PM</option>
                        <option>12 PM</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="form-group">
                    <div className="styled-select">
                      <select>
                        <option>Closing Time</option>
                        <option>Closed</option>
                        <option>1 AM</option>
                        <option>2 AM</option>
                        <option>3 AM</option>
                        <option>4 AM</option>
                        <option>5 AM</option>
                        <option>6 AM</option>
                        <option>7 AM</option>
                        <option>8 AM</option>
                        <option>9 AM</option>
                        <option>10 AM</option>
                        <option>11 AM</option>
                        <option>12 AM</option>
                        <option>1 PM</option>
                        <option>2 PM</option>
                        <option>3 PM</option>
                        <option>4 PM</option>
                        <option>5 PM</option>
                        <option>6 PM</option>
                        <option>7 PM</option>
                        <option>8 PM</option>
                        <option>9 PM</option>
                        <option>10 PM</option>
                        <option>11 PM</option>
                        <option>12 PM</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              {/* /row*/}
            </div>
            {/* /box_general*/}
            <div className="box_general padding_bottom">
              <div className="header_box version_2">
                <h2>
                  <i className="fa fa-dollar" />
                  Pricing
                </h2>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <h6>Item</h6>
                  <table id="pricing-list-container" style={{ width: "100%" }}>
                    <tbody>
                      <tr className="pricing-list-item">
                        <td>
                          <div className="row">
                            <div className="col-md-4">
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Title"
                                />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Description"
                                />
                              </div>
                            </div>
                            <div className="col-md-2">
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Price"
                                />
                              </div>
                            </div>
                            <div className="col-md-2">
                              <div className="form-group">
                                <a className="delete" href="#">
                                  <i className="fa fa-fw fa-remove" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <a href="#0" className="btn_1 gray add-pricing-list-item">
                    <i className="fa fa-fw fa-plus-circle" />
                    Add Item
                  </a>
                </div>
              </div>
              {/* /row*/}
            </div>
            {/* /box_general*/}
            <p>
              <a href="#0" className="btn_1 medium">
                Save
              </a>
            </p>
          </div>
          {/* /.container-fluid*/}
        </div>
        <AdminFooter />
        <LogoutModal />
        
      

      
    <Script src="admin_section/vendor/jquery/jquery.min.js" />
    <Script src="admin_section/vendor/bootstrap/js/bootstrap.bundle.min.js" />
    
    <Script src="admin_section/vendor/jquery-easing/jquery.easing.min.js" />
    <Script src="admin_section/vendor/chart.js/Chart.min.js" />
    <Script src="admin_section/vendor/datatables/jquery.dataTables.js" />
    <Script src="admin_section/vendor/datatables/dataTables.bootstrap4.js" />
	<Script src="admin_section/vendor/jquery.selectbox-0.2.js" />
	<Script src="admin_section/vendor/retina-replace.min.js" />
	<Script src="admin_section/vendor/jquery.magnific-popup.min.js" />
    
    <Script src="admin_section/js/admin.js" />
	
	<Script src="admin_section/vendor/dropzone.min.js" />
	<Script src="admin_section/vendor/bootstrap-datepicker.js" />
	
	
	<Script src="admin_section/js/editor/summernote-bs4.min.js" />
	
    </>
  );
}
