import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "../App.css";

export default function Home() {
  return (
    <div>
      {/* <!-- Navbar --> */}
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              id="Urban logo"
              src=""
              alt="Urban Plan"
              draggable="false"
              height="30"
            />
           
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-3">
              <li className="nav-item">
                <a
                  className="nav-link active d-flex align-items-center"
                  aria-current="page"
                  href="#"
                >
                  <i className="fas fa-bars pe-2"></i>Menu
                </a>
              </li>
            </ul>
            <form className="d-flex align-items-center w-100 form-search">
              <div className="input-group">
                <button
                  className="btn btn-light dropdown-toggle shadow-0"
                  type="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                  style={{ paddingBottom: "0.4rem" }}
                >
                  All
                </button>
                
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search"
                  aria-label="Search"
                />
              </div>
              <a href="#!" className="text-white">
                <i className="fas fa-search ps-3"></i>
              </a>
            </form>

            <ul className="navbar-nav ms-3">
              <li className="nav-item" style={{ width: "65px" }}>
                <a className="nav-link d-flex align-items-center" href="#!">
                  Sign In
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <!-- Navbar --> */}
      {/* ----------------- */}

      <Carousel>
        <div>
          <img
            src="https://images.pexels.com/photos/8895652/pexels-photo-8895652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Image 1"
          />
        </div>
        <div>
          <img src="https://images.pexels.com/photos/13348436/pexels-photo-13348436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image 2" />
        </div>
        <div>
          <img src="https://images.pexels.com/photos/11089197/pexels-photo-11089197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image 3" />
        </div>
        {/* Add more images as needed */}
      </Carousel>

   
    </div>
  );
}
