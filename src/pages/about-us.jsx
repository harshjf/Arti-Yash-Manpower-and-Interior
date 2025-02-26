import Layouts from "@layouts/Layouts";

import PageBanner from "@components/PageBanner";
import AboutSection from "@components/sections/About";
import CallToActionSection from "@components/sections/CallToAction";
import ImageView from "@components/ImageView";

const AboutUs = () => {
  return (
    <Layouts>
      <ImageView />

      <PageBanner
        pageTitle={"About Us"}
        pageDesc={
          "Our principles drive excellence, setting us apart in the industry."
        }
      />

      <AboutSection />

      {/* Core Values Start */}
      <section className="gap no-top core-values">
        <div className="heading">
          <figure>
            <img src="/images/heading-icon.png" alt="Heading Icon" />
          </figure>
          <span>MAKE A DIFFERENCE</span>
          <h2>Our Core Values</h2>
        </div>
        <div className="container">
          <div className="row">
            <ul>
              <li>
                <div className="data">
                  <h3>Integrity</h3>
                  <p>
                    We uphold honesty and transparency in everything we do,
                    ensuring trust and ethical practices in our work and
                    relationships.
                  </p>
                </div>
                <div className="image">
                  <figure>
                    <img
                      className="w-100"
                      src="/img/core-1.png"
                      alt="Core Values Image 1"
                    />
                  </figure>
                </div>
              </li>
              <li>
                <div className="image">
                  <figure>
                    <img
                      className="w-100"
                      src="/img/core-2.png"
                      alt="Core Values Image 2"
                    />
                  </figure>
                </div>
                <div className="data">
                  <h3>Responsibility</h3>
                  <p>
                    We take ownership of our commitments, delivering quality
                    solutions with dedication and accountability for long-term
                    success.
                  </p>
                </div>
              </li>
              <li>
                <div className="data">
                  <h3>Excellence</h3>
                  <p>
                    We strive for the highest standards in craftsmanship,
                    service, and innovation to ensure superior results in every
                    project.
                  </p>
                </div>
                <div className="image">
                  <figure>
                    <img
                      className="w-100"
                      src="/img/core-3.png"
                      alt="Core Values Image 3"
                    />
                  </figure>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* Core Values End */}

      {/* Gallery Style One Start */}
      {/* <div className="gallery-style-one">
        <div className="container-fluid g-0">
          <div className="row g-0">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <figure>
                <a data-fancybox="gallery" href="/img/gallery-1.jpeg">
                  <img
                    className="img-fluid w-100"
                    src="/img/gallery-1.jpeg"
                    alt="Gallery 1"
                  />
                </a>
              </figure>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <figure>
                <a data-fancybox="gallery" href="/img/gallery-2.jpeg">
                  <img
                    className="img-fluid w-100"
                    src="/img/gallery-2.jpeg"
                    alt="Gallery 2"
                  />
                </a>
              </figure>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <figure>
                <a data-fancybox="gallery" href="/img/gallery-3.jpeg">
                  <img
                    className="img-fluid w-100"
                    src="/img/gallery-3.jpeg"
                    alt="Gallery 3"
                  />
                </a>
              </figure>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <figure>
                <a data-fancybox="gallery" href="/img/gallery-4.jpeg">
                  <img
                    className="img-fluid w-100"
                    src="/img/gallery-4.jpeg"
                    alt="Gallery 4"
                  />
                </a>
              </figure>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <figure>
                <a data-fancybox="gallery" href="/img/gallery-5.jpeg">
                  <img
                    className="img-fluid w-100"
                    src="/img/gallery-5.jpeg"
                    alt="Gallery 5"
                  />
                </a>
              </figure>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <figure>
                <a data-fancybox="gallery" href="/img/gallery-6.jpeg">
                  <img
                    className="img-fluid w-100"
                    src="/img/gallery-6.jpeg"
                    alt="Gallery 6"
                  />
                </a>
              </figure>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <figure>
                <a data-fancybox="gallery" href="/img/gallery-7.jpeg">
                  <img
                    className="img-fluid w-100"
                    src="/img/gallery-7.jpeg"
                    alt="Gallery 7"
                  />
                </a>
              </figure>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <figure>
                <a data-fancybox="gallery" href="/img/gallery-8.jpeg">
                  <img
                    className="img-fluid w-100"
                    src="/img/gallery-8.jpeg"
                    alt="Gallery 8"
                  />
                </a>
              </figure>
            </div>
          </div>
        </div>
      </div> */}
      {/* Gallery Style One End */}

      {/* Innovation Start */}
      <section
        className="innovation"
        style={{ paddingTop: "50px", paddingBottom: "50px" }}
      >
        <div className="heading">
          <span>MAKE A DIFFERENCE</span>
          <h2>Innovation in Action</h2>
        </div>
        <div className="container">
          <div className="row">
            <ul>
              <li>
                <i className="fa-solid fa-check" />
                <p>
                  Delivering excellence in every project with top-tier
                  craftsmanship.
                </p>
              </li>
              <li>
                <i className="fa-solid fa-check" />
                <p>
                  A team of trained professionals ensuring efficient and
                  reliable execution.
                </p>
              </li>
              <li>
                <i className="fa-solid fa-check" />
                <p> Prioritizing client needs with personalized solutions.</p>
              </li>
              <li>
                <i className="fa-solid fa-check" />
                <p>
                  Implementing modern techniques and technology for superior
                  results.
                </p>
              </li>
              <li>
                <i className="fa-solid fa-check" />
                <p>
                  Ensuring timely completion of projects without compromising
                  quality.
                </p>
              </li>
              <li>
                <i className="fa-solid fa-check" />
                <p>
                  Offering a complete range of interior, construction, and
                  manpower solutions.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* Innovation End */}

      <CallToActionSection />
    </Layouts>
  );
};
export default AboutUs;
