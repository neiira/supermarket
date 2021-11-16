import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Supermarket.css';
import SectionHeader from '../Components/SectionHeader';
import Teams from '../Components/Teams';
import AboutUsSlide from '../Components/AboutUsSlide';
import abtImg1 from '../images/p3.jpg';
import abtImg2 from '../images/p4.jpg';

function AboutUsBody() {
  return (
    <>
      <div class="about">
        <div className="container">
          <SectionHeader sectionTitle="about us" />
          <div class="about-agileinfo w3layouts row">
            <div class="col-md-8 about-wthree-grids grid-top">
              <h4>Blanditiis praesentium deleniti atque corrupti quos </h4>
              <p class="top">
                Gnissimos voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi. atque corrupti
                quos dolores et quas molestias excepturi sint occaecat officia deserunt mollitia laborum et dolorum fuga
              </p>
              <p>
                Dignissimos at vero eos et accusamus et iusto odio ducimus qui blanditiis praesentium voluptatum
                deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecat officia deserunt mollitia
                laborum et dolorum fuga. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecat
                atque corrupti quos dolores et quas molestias excepturi sint occaecat officia deserunt mollitia laborum
                et dolorum{' '}
              </p>
              <div class="about-w3agilerow row">
                <div class="col-md-4 about-w3imgs">
                  <img src={abtImg1} alt="" class="img-responsive zoom-img" />
                </div>
                <div class="col-md-4 about-w3imgs">
                  <img src={abtImg2} alt="" class="img-responsive zoom-img" />
                </div>
                <div class="col-md-4 about-w3imgs">
                  <img src={abtImg1} alt="" class="img-responsive zoom-img" />
                </div>
                <div class="clearfix"> </div>
              </div>
            </div>
            <div class="col-md-4 about-wthree-grids">
              <div class="offic-time">
                <div class="time-top">
                  <h4>Praesentium :</h4>
                </div>
                <div class="time-bottom">
                  <h5>At vero eos </h5>
                  <h5>Accusamus et</h5>
                  <p>Dignissimos at vero eos et accusamus et iusto odio ducimus qui accusamus et. </p>
                </div>
              </div>
              <div class="testi">
                <h3 class="w3_agile_header">Testimonial</h3>
                <div id="top" class="callbacks_container">
                  <ul class="rslides" id="slider5">
                    <li>
                      <div class="testi-slider">
                        <h4>" I AM VERY PLEASED.</h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu magna dolor, quisque
                          semper.
                        </p>
                        <div class="testi-subscript">
                          <p>
                            <a href="#1">John Doe,</a>Adipiscing
                          </p>
                          <span class="w3-agilesub"> </span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="testi-slider">
                        <h4>" I AM LOREM IPSUM.</h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu magna dolor, quisque
                          semper.
                        </p>
                        <div class="testi-subscript">
                          <p>
                            <a href="#2">elit semper,</a>Dolor Elit
                          </p>
                          <span class="w3-agilesub"> </span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="testi-slider">
                        <h4>" CONSECTETUR PIMAGNA.</h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu magna dolor, quisque
                          semper.
                        </p>
                        <div class="testi-subscript">
                          <p>
                            <a href="#3">Amet Doe,</a>Suspendisse
                          </p>
                          <span class="w3-agilesub"> </span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <AboutUsSlide />
          <Teams />
        </div>
      </div>
    </>
  );
}

export default AboutUsBody;
