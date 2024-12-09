import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTools,
  faDrill,
  faTruck,
  faBroom,
  faTree,
  faHammer,
  faPaintRoller,
   } from '@fortawesome/free-solid-svg-icons';
 

// Importing the images
import FurnitureAssemblyImage from "../assets/Images/Furniture_Assembly.jpg";
import MountTVImage from "../assets/Images/Mount_TV.jpg";
import HelpMovingImage from "../assets/Images/Help_Moving.jpg";
import MinorRepairsImage from "../assets/Images/Plumbing_Help.jpg";
import MountArtorShelves from "../assets/Images/Hang_Pictures.jpg";
import HomeApartmentClean from "../assets/Images/Home_Apartment_Cleaning.jpg";
import ElectricalHelp from "../assets/Images/Electrical_Help.jpg";
import HeavyLifting from "../assets/Images/Furniture_Removal.jpg";
import HeavyLifting1 from "../assets/Images/Furniture_Removal.jpg";
import HeavyLifting2 from "../assets/Images/Furniture_Removal.jpg";
import HeavyLifting3 from "../assets/Images/Furniture_Removal.jpg";
import rating from "../assets/Images/trustpilot.jpg";



const Home = () => {
  return (
    <>
      <Header />
      <section className="text-center py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold">Book trusted help for home tasks</h2>
          <form className="mt-4">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="What do you need help with?" />
              <button className="btn btn-success">Search</button>
            </div>
          </form>

          {/* Service Categories with Icons */}
          <div className="mt-4 d-flex justify-content-center flex-wrap">
            <div className="m-3 text-center">
              <FontAwesomeIcon icon={faTools} size="2x" /><br />
              <button className="btn btn-outline-secondary m-2">Assembly</button>
            </div>
            <div className="m-3 text-center">
              <FontAwesomeIcon icon={faTruck} size="2x" /><br />
              <button className="btn btn-outline-secondary m-2">Moving</button>
            </div>
            <div className="m-3 text-center">
              <FontAwesomeIcon icon={faBroom} size="2x" /><br />
              <button className="btn btn-outline-secondary m-2">Cleaning</button>
            </div>
            <div className="m-3 text-center">
              <FontAwesomeIcon icon={faHammer} size="2x" /><br />
              <button className="btn btn-outline-secondary m-2">Home Repairs</button>
            </div>
            <div className="m-3 text-center">
              <FontAwesomeIcon icon={faPaintRoller} size="2x" /><br />
              <button className="btn btn-outline-secondary m-2">Painting</button>
            </div>
          </div>
        </div>
      </section>
  


      {/* <!-- Popular Projects (Slider) --> */}
      <section className="py-5">
        <div className="container">
          <h3 className="text-center mb-4">Popular Projects</h3>

          <div
            id="projectsCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
           
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-md-3 mb-4">
                    <div className="card">
                      <img
                        src={FurnitureAssemblyImage}
                        className="card-img-top img-fluid"
                        alt="Furniture Assembly"
                        style={{
                          width: "240px",
                          height: "255px",
                          objectFit: "cover",
                        }}
                      />
                      <div className="card-body">
                        <h5 className="card-title">Furniture Assembly</h5>
                        <p className="card-text">Projects starting at $60</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 mb-4">
                    <div className="card">
                      <img
                        src={MountTVImage}
                        className="card-img-top img-fluid"
                        alt="Mount TV"
                        style={{
                          width: "240px",
                          height: "255px",
                          objectFit: "cover",
                        }}
                      />
                      <div className="card-body">
                        <h5 className="card-title">Mount TV</h5>
                        <p className="card-text">Projects starting at $70</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 mb-4">
                    <div className="card">
                      <img
                        src={HelpMovingImage}
                        className="card-img-top img-fluid"
                        alt="Help Moving"
                        style={{
                          width: "240px",
                          height: "255px",
                          objectFit: "cover",
                        }}
                      />
                      <div className="card-body">
                        <h5 className="card-title">Help Moving</h5>
                        <p className="card-text">Projects starting at $50</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 mb-4">
                    <div className="card">
                      <img
                        src={MinorRepairsImage}
                        className="card-img-top img-fluid"
                        alt="Minor Repairs"
                        style={{
                          width: "240px",
                          height: "255px",
                          objectFit: "cover",
                        }}
                      />
                      <div className="card-body">
                        <h5 className="card-title">Minor Repairs</h5>
                        <p className="card-text">Projects starting at $55</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

          
              <div className="carousel-item">
                <div className="row">
                  <div className="col-md-3 mb-4">
                    <div className="card">
                      <img
                        src={FurnitureAssemblyImage}
                        className="card-img-top img-fluid"
                        alt="Card Image 1"
                        style={{
                          width: "240px",
                          height: "255px",
                          objectFit: "cover",
                        }}
                      />
                      <div className="card-body">
                        <h5 className="card-title">New Project 1</h5>
                        <p className="card-text">Projects starting at $60</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 mb-4">
                    <div className="card">
                      <img
                        src={FurnitureAssemblyImage}
                        className="card-img-top img-fluid"
                        alt="Card Image 2"
                        style={{
                          width: "240px",
                          height: "255px",
                          objectFit: "cover",
                        }}
                      />
                      <div className="card-body">
                        <h5 className="card-title">New Project 2</h5>
                        <p className="card-text">Projects starting at $70</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 mb-4">
                    <div className="card">
                      <img
                        src={FurnitureAssemblyImage}
                        className="card-img-top img-fluid"
                        alt="Card Image 3"
                        style={{
                          width: "240px",
                          height: "255px",
                          objectFit: "cover",
                        }}
                      />
                      <div className="card-body">
                        <h5 className="card-title">New Project 3</h5>
                        <p className="card-text">Projects starting at $50</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 mb-4">
                    <div className="card">
                      <img
                        src={FurnitureAssemblyImage}
                        className="card-img-top img-fluid"
                        alt="Card Image 4"
                        style={{
                          width: "240px",
                          height: "255px",
                          objectFit: "cover",
                        }}
                      />
                      <div className="card-body">
                        <h5 className="card-title">New Project 4</h5>
                        <p className="card-text">Projects starting at $55</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

             
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#projectsCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#projectsCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
  


         

      
      {/* <!-- Ratings Section -->  */}
      <section class="ratings-section py-5">
        <div class="container">
          <h3 class="text-center mb-5">
            See what happy customers are saying about TaskRabbit
          </h3>
          <div class="row">
            {/* <!-- Customer Reviews --> */}
            <div class="col-md-4 mb-4">
              <h5>
                Elizabeth P. <span class="text-warning">★★★★★</span>
              </h5>
              <p>
                Vitalii assembled the IKEA Norli drawer chest for me in less
                than 30 minutes, and he assembled a metal wire shelving unit as
                well in about 10 minutes. He also fixed a drawer...
              </p>
              <a href="#" class="text-success">
                IKEA Furniture Assembly
              </a>
            </div>
            <div class="col-md-4 mb-4">
              <h5>
                Tiffany B. <span class="text-warning">★★★★★</span>
              </h5>
              <p>
                David did an awesome job assembling crib and dresser for
                nursery. Really appreciate this! He cleaned up the area after
                his work...
              </p>
              <a href="#" class="text-success">
                Furniture Assembly
              </a>
            </div>
            <div class="col-md-4 mb-4">
              <h5>
                Amanda L. <span class="text-warning">★★★★★</span>
              </h5>
              <p>
                I hired Joe to patch 2 holes on my wall and 1 hole on my
                ceiling. Joe was great with communication, was fast,
                professional, and did a fantastic job...
              </p>
              <a href="#" class="text-success">
                Home Repairs
              </a>
            </div>
            <div class="col-md-4 mb-4">
              <h5>
                Sabrina K. <span class="text-warning">★★★★★</span>
              </h5>
              <p>
                Aleksandr was fantastic! He came with all the equipment to do
                the job, even the hardware I didn't know I would need. He hung a
                heavy chandelier perfectly...
              </p>
              <a href="#" class="text-success">
                Electrical Help
              </a>
            </div>
            <div class="col-md-4 mb-4">
              <h5>
                Jana T. <span class="text-warning">★★★★★</span>
              </h5>
              <p>
                Jose fixed my AC drain line which was clogging my master
                bathroom sink. He was prompt, communicative, and efficient.
                Highly recommend!
              </p>
              <a href="#" class="text-success">
                Plumbing
              </a>
            </div>
            <div class="col-md-4 mb-4">
              <h5>
                Elisa R. <span class="text-warning">★★★★★</span>
              </h5>
              <p>
                Michael did a great job helping us install frameless glass
                hinged shower doors with an unusual set-up. He was patient and
                willing to help...
              </p>
              <a href="#" class="text-success">
                General Mounting
              </a>
            </div>
          </div>
          {/* <!-- Trustpilot Rating --> */}
          <div class="text-center mt-5">
            <img src={rating} alt="Trustpilot Logo" />
          </div>

          {/* <!-- How it Works Screen --> */}
          <div class="container-fluid py-5 bg-light" id="how-it-works">
            <div class="text-center p-4 bg-white shadow rounded">
              <h2 class="mb-4">How it works</h2>
              <ul class="list-unstyled">
                <li class="mb-3">
                  1. Choose a Tasker by price, skills, and reviews.
                </li>
                <li class="mb-3">2. Schedule a Tasker as early as today.</li>
                <li>3. Chat, pay, tip, and review all in one place.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
