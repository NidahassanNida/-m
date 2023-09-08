import React from "react";
class Footer extends React.Component {
  render() {
    return (
      <>
        <footer className="shadow-lg p-3 bg-body rounded d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <span className="text-muted">© 2023 Company, Inc</span>
          </div>
          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex icons">
            <li className="ms-3">
              <a className="text-muted" href="#">
              <i className="bi bi-twitter" />
              </a>
            </li>
            <li className="ms-3">
              <a className="text-muted" href="#">
              <i className="bi bi-instagram" />
              </a>
            </li>
            <li className="ms-3">
              <a className="text-muted" href="#">
              <i className="bi bi-facebook" />
              </a>
            </li>
          </ul>
        </footer>
      </>
    );
  }
}

export default Footer;
