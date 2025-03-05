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

      {/* Certificates Section Start */}
      <section className="certificates-section">
        <div className="heading">
          <h2>We are Certified by</h2>
        </div>

        <div className="certificates-logos">
          <img src="/img/certificatelogo1.png" alt="Certificate 1" />
          <img src="/img/certificatelogo2.webp" alt="Certificate 2" />
          <img src="/img/certificatelogo3.webp" alt="Certificate 3" />
        </div>
      </section>
      {/* Certificates Section End */}

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
