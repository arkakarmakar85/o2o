import Script from 'next/script';

export default function AdminFooter() {
  return (
    <>
      <footer className="sticky-footer">
        <div className="container">
          <div className="text-center">
            <small>Copyright © SPARKER 2018</small>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button*/}
      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fa fa-angle-up" />
      </a>
      {/* Logout Modal*/}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Ready to Leave?
              </h5>
              <button
                className="close"
                type="button"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              Select "Logout" below if you are ready to end your current
              session.
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-secondary"
                type="button"
                data-dismiss="modal"
              >
                Cancel
              </button>
              <a className="btn btn-primary" href="login.html">
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>

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
