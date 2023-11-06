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
              src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/dribbble-square-color-icon.png"
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
                  <i className="fas fa-bars pe-2"></i>UrbanPlan
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
        <div class="image-container">
          <img
            src="https://images.pexels.com/photos/8895652/pexels-photo-8895652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Image 1"
          />
        </div>
        <div class="image-container">
          <img
            src="https://images.pexels.com/photos/13348436/pexels-photo-13348436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Image 2"
          />
        </div>
        <div class="image-container">
          <img
            src="https://images.pexels.com/photos/11089197/pexels-photo-11089197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Image 3"
          />
        </div>
        {/* Add more images as needed */}
      </Carousel>

      

      {/* circle images */}
      <section class="features-icons bg-light text-center">
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div class="features-icons-icon d-flex">
                  <i class="bi-window m-auto text-primary"></i>
                </div>
                <h3>Fully Responsive</h3>
                <p class="lead mb-0">
                  This theme will look great on any device, no matter the size!
                </p>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div class="features-icons-icon d-flex">
                  <i class="bi-layers m-auto text-primary"></i>
                </div>
                <h3>Bootstrap 5 Ready</h3>
                <p class="lead mb-0">
                  Featuring the latest build of the new Bootstrap 5 framework!
                </p>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="features-icons-item mx-auto mb-0 mb-lg-3">
                <div class="features-icons-icon d-flex">
                  <i class="bi-terminal m-auto text-primary"></i>
                </div>
                <h3>Easy to Use</h3>
                <p class="lead mb-0">
                  Ready to use with your own content, or customize the source
                  files!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* testimonials section  */}
      <section class="testimonials text-center bg-light">
        <div class="container">
          <h2 class="mb-5">What people are saying...</h2>
          <div class="row">
            <div class="col-lg-4">
              <div class="testimonial-item mx-auto mb-5 mb-lg-0">
                <img
                  class="img-fluid rounded-circle mb-3"
                  src="assets/img/testimonials-1.jpg"
                  alt="..."
                />
                <h5>Margaret E.</h5>
                <p class="font-weight-light mb-0">
                  "This is fantastic! Thanks so much guys!"
                </p>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="testimonial-item mx-auto mb-5 mb-lg-0">
                <img
                  class="img-fluid rounded-circle mb-3"
                  src="assets/img/testimonials-2.jpg"
                  alt="..."
                />
                <h5>Fred S.</h5>
                <p class="font-weight-light mb-0">
                  "Bootstrap is amazing. I've been using it to create lots of
                  super nice landing pages."
                </p>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="testimonial-item mx-auto mb-5 mb-lg-0">
                <img
                  class="img-fluid rounded-circle mb-3"
                  src="assets/img/testimonials-3.jpg"
                  alt="..."
                />
                <h5>Sarah W.</h5>
                <p class="font-weight-light mb-0">
                  "Thanks so much for making these free resources available to
                  us!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer class="footer bg-light">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 h-100 text-center text-lg-start my-auto">
              <ul class="list-inline mb-2">
                <li class="list-inline-item">
                  <a href="#!">About</a>
                </li>
                <li class="list-inline-item">⋅</li>
                <li class="list-inline-item">
                  <a href="#!">Contact</a>
                </li>
                <li class="list-inline-item">⋅</li>
                <li class="list-inline-item">
                  <a href="#!">Terms of Use</a>
                </li>
                <li class="list-inline-item">⋅</li>
                <li class="list-inline-item">
                  <a href="#!">Privacy Policy</a>
                </li>
              </ul>
              <p class="text-muted small mb-4 mb-lg-0">
                &copy; Your Website 2023. All Rights Reserved.
              </p>
            </div>
            <div class="col-lg-6 h-100 text-center text-lg-end my-auto">
              <ul class="list-inline mb-0">
                <li class="list-inline-item me-4">
                  <a href="#!">
                    <i class="bi-facebook fs-3"></i>
                  </a>
                </li>
                <li class="list-inline-item me-4">
                  <a href="#!">
                    <i class="bi-twitter fs-3"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#!">
                    <i class="bi-instagram fs-3"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
