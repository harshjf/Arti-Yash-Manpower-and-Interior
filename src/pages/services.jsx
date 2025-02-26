import { useState } from "react";
import PageBanner from "@components/PageBanner";
import Layouts from "@layouts/Layouts";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import Link from "next/link";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

import { getSortedServicesData } from "@library/services";

import CallToActionSection from "@components/sections/CallToAction";
import ServicesSection from "@components/sections/Services";
import CountersSection from "@components/sections/Counters";

const Services = (props) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <Layouts>
      <PageBanner
        pageTitle={"Services"}
        pageDesc={"our values and vaulted us to the top of our industry."}
      />

      {/*   <ServicesSection />
       */}
      {/* Construction Services Start */}
      <section
        className="gap no-top construction-services"
        style={{ paddingTop: "50px" }}
      >
        <div className="container">
          <Tab.Container
            id="services-tab-content"
            defaultActiveKey="tab-service-0"
          >
            <div className="row align-items-center">
              <div className="col-lg-4">
                <div className="services-nav">
                  <h2>Services We Offer!</h2>
                  <Nav variant="pills" className="nav nav-pills mb-3">
                    <Nav.Item>
                      <Nav.Link eventKey="tab-service-0">
                        Interior & Fit-Out Solutions
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="tab-service-1">
                        Fabrication & Finishing Works
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="tab-service-2">
                        Manpower & Industrial Services
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
              </div>
              <div className="col-lg-8">
                <Tab.Content>
                  <Tab.Pane
                    eventKey="tab-service-0"
                    title="General Contracting"
                  >
                    <figure>
                      <img
                        className="w-100"
                        src="/img/serviceCat-1.png"
                        alt="Services Nav Image 1"
                      />
                      <figcaption>
                        <h3> Interior & Fit-Out Solutions</h3>
                        <p>
                          Transforming spaces with expertly designed partitions,
                          ceilings, flooring, and modular setups for enhanced
                          functionality and aesthetics.
                        </p>
                      </figcaption>
                    </figure>
                  </Tab.Pane>
                  <Tab.Pane
                    eventKey="tab-service-1"
                    title="Construction Consultant"
                  >
                    <figure>
                      <img
                        className="w-100"
                        src="/img/serviceCat-2.png"
                        alt="Services Nav Image 2"
                      />
                      <figcaption>
                        <h3>Fabrication & Finishing Works</h3>
                        <p>
                          Delivering precision-crafted aluminium, fabrication,
                          painting, and epoxy flooring solutions for durable and
                          high-quality finishes.
                        </p>
                      </figcaption>
                    </figure>
                  </Tab.Pane>
                  <Tab.Pane eventKey="tab-service-2" title="Metal Roofin">
                    <figure>
                      <img
                        className="w-100"
                        src="/img/serviceCat-3.png"
                        alt="Services Nav Image 3"
                      />
                      <figcaption>
                        <h3>Manpower & Industrial Services</h3>
                        <p>
                          Providing skilled labor, housekeeping, and facility
                          management to ensure smooth operations across
                          industries.
                        </p>
                      </figcaption>
                    </figure>
                  </Tab.Pane>
                </Tab.Content>
              </div>
            </div>
          </Tab.Container>
        </div>
      </section>
      {/* Construction Services End */}

      <CountersSection />

      {/* Video PopUp Start */}
      <div className="video-popup">
        <div className="container-fluid g-0">
          <div className="row">
            <figure>
              <img
                className="w-100"
                src="/img/all-services.png"
                alt="Video PopUp Image"
              />
            </figure>
            {/*  <a
              className="video-play-btn"
              onClick={() => setOpen(true)}
              style={{ cursor: "pointer" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="35"
                height="56"
                viewBox="0 0 35 56"
              >
                {" "}
                <defs>
                  {" "}
                  <clipPath id="clip-video_arrow">
                    {" "}
                    <rect width="35" height="56" />{" "}
                  </clipPath>{" "}
                </defs>{" "}
                <g
                  id="video_arrow"
                  data-name="video arrow"
                  clipPath="url(#clip-video_arrow)"
                >
                  {" "}
                  <path
                    id="Shape_1"
                    data-name="Shape 1"
                    d="M1362,5000.8,1327,4972V5027Z"
                    transform="translate(-1326.998 -4971.996)"
                    fill="rgba(0,0,0,0)"
                  />{" "}
                  <path
                    id="Shape_1_-_Outline"
                    data-name="Shape 1 - Outline"
                    d="M1333,5015.017l19.29-14.437L1333,4984.7v30.313M1327,5027V4972l35,28.807Z"
                    transform="translate(-1326.998 -4971.996)"
                  />{" "}
                </g>{" "}
              </svg>
            </a> */}
          </div>
        </div>
      </div>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="uemObN8_dcw"
        onClose={() => setOpen(false)}
      />
      {/* Video PopUp Start */}

      {/* Service Style Two Start */}
      <section className="gap service-style-two">
        <div className="heading">
          <figure>
            <img src="/images/heading-icon.png" alt="heading-icon" />
          </figure>
          <span>What We Provide</span>
          <h2>Exclusive Services</h2>
        </div>
        <div className="container">
          <div className="row g-0">
            {props.services.map((item, key) => (
              <div
                key={`services-item-${key}`}
                className="col-lg-4 col-md-6 col-sm-12"
              >
                <div className="service-two-box">
                  <h3>
                    <Link href={`/services/${item.id}`}>{item.title}</Link>
                  </h3>
                  <p>{item.short}</p>
                  <div className="service-two-icon d-flex-all justify-content-start">
                    <img src={item.image} alt={item.title} />
                    {/* <Link href={`/services/${item.id}`}>
                      <i className="fa-solid fa-arrow-up-long"></i>
                    </Link> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Service Style Two End */}

      <CallToActionSection />
    </Layouts>
  );
};
export default Services;

export async function getStaticProps() {
  const allServices = getSortedServicesData();

  return {
    props: {
      services: allServices,
    },
  };
}
