import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Supermarket.css';
import { Carousel } from 'react-bootstrap';
import SectionHeader from '../Components/SectionHeader';
import Teams from '../Components/Teams';
import AboutUsSlide from '../Components/AboutUsSlide';
import abtImg1 from '../images/p3.jpg';
import abtImg2 from '../images/p4.jpg';

function AboutUsBody() {
  return (
    <>
      <div className="about">
        <div className="container">
          <SectionHeader sectionTitle="about us" />
          <div className="about-agileinfo w3layouts">
            <div className="row">
              <div className="col-md-8 about-wthree-grids grid-top">
                <h4>Blanditiis praesentium deleniti atque corrupti quos </h4>
                <p className="top">
                  Gnissimos voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi. atque corrupti
                  quos dolores et quas molestias excepturi sint occaecat officia deserunt mollitia laborum et dolorum
                  fuga
                </p>
                <p>
                  Dignissimos at vero eos et accusamus et iusto odio ducimus qui blanditiis praesentium voluptatum
                  deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecat officia deserunt
                  mollitia laborum et dolorum fuga. At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi
                  sint occaecat atque corrupti quos dolores et quas molestias excepturi sint occaecat officia deserunt
                  mollitia laborum et dolorum{' '}
                </p>
                <div className="about-w3agilerow row">
                  <div className="col-md-4 about-w3imgs">
                    <img src={abtImg1} alt="" className="img-responsive zoom-img" />
                  </div>
                  <div className="col-md-4 about-w3imgs">
                    <img src={abtImg2} alt="" className="img-responsive zoom-img" />
                  </div>
                  <div className="col-md-4 about-w3imgs">
                    <img src={abtImg1} alt="" className="img-responsive zoom-img" />
                  </div>
                  <div className="clearfix"> </div>
                </div>
              </div>
              <div className="col-md-4 about-wthree-grids">
                <div className="offic-time">
                  <div className="time-top">
                    <h4>Praesentium :</h4>
                  </div>
                  <div className="time-bottom">
                    <h5>At vero eos </h5>
                    <h5>Accusamus et</h5>
                    <p>Dignissimos at vero eos et accusamus et iusto odio ducimus qui accusamus et. </p>
                  </div>
                </div>
                <div className="testi">
                  <h3 className="w3_agile_header">Testimonial</h3>
                  <div id="top" className="callbacks_container">
                    <Carousel fade controls={false} indicators={false} interval={3000}>
                      <Carousel.Item>
                        <div className="testi-slider" style={{ fontSize: '14px' }}>
                          <h4>" I AM VERY PLEASED.</h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu magna dolor, quisque
                            semper.
                          </p>
                          <div className="testi-subscript">
                            <p>
                              <a href="#1">John Doe,</a>Adipiscing
                            </p>
                            <span className="w3-agilesub"> </span>
                          </div>
                        </div>
                      </Carousel.Item>
                      <Carousel.Item>
                        <div className="testi-slider" style={{ fontSize: '14px' }}>
                          <h4>" I AM LOREM IPSUM.</h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu magna dolor, quisque
                            semper.
                          </p>
                          <div className="testi-subscript">
                            <p>
                              <a href="#2">elit semper,</a>Dolor Elit
                            </p>
                            <span className="w3-agilesub"> </span>
                          </div>
                        </div>
                      </Carousel.Item>
                      <Carousel.Item>
                        <div className="testi-slider" style={{ fontSize: '14px' }}>
                          <h4>" CONSECTETUR PIMAGNA.</h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu magna dolor, quisque
                            semper.
                          </p>
                          <div className="testi-subscript">
                            <p>
                              <a href="#3">Amet Doe,</a>Suspendisse
                            </p>
                            <span className="w3-agilesub"> </span>
                          </div>
                        </div>
                      </Carousel.Item>
                    </Carousel>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutUsSlide />
      <Teams />
    </>
  );
}

export default AboutUsBody;
