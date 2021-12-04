import React from 'react';
import '../Supermarket.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import '../icon/icon.css';
function ContactBody() {
  const location =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.3905851087434!2d-34.90500565012194!3d-8.061582082752993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab18d90992e4ab%3A0x8e83c4afabe39a3a!2sSport+Club+Do+Recife!5e0!3m2!1sen!2sin!4v1478684415917';
  return (
    <>
      <div className="about">
        <div className="w3_agileits_contact_grids">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="w3_agileits_contact_grid_left">
                <div className="agile_map">
                  <iframe title="hello" src={location} style={{ border: '0' }}></iframe>
                </div>
                <div className="agileits_w3layouts_map_pos">
                  <div className="agileits_w3layouts_map_pos1">
                    <h3>Contact Info</h3>
                    <p>1234k Avenue, 4th block, New York City.</p>
                    <ul className="wthree_contact_info_address">
                      <li>
                        <FontAwesomeIcon icon={faEnvelope} className="contact-card" />
                        <a href="mailto:info@example.com">info@example.com</a>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faPhone} rotation={90} className="contact-card" />
                        +(0123) 232 232
                      </li>
                    </ul>
                    <div className="w3_agile_social_icons w3_agile_social_icons_contact">
                      <ul>
                        <li>
                          <a
                            href="https://www.w3schools.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="icon icon-cube agile_facebook"
                          >
                            {''}
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.w3schools.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="icon icon-cube agile_rss"
                          >
                            {''}
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.w3schools.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="icon icon-cube agile_t"
                          >
                            {''}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="w3_agileits_contact_grid_right">
                <h2 className="w3_agile_header">
                  Leave a<span> Message</span>
                </h2>

                <form action="#" method="post">
                  <span className="input input--ichiro">
                    <input
                      className="input__field input__field--ichiro"
                      type="text"
                      id="input-25"
                      name="Name"
                      placeholder=" "
                      required=""
                    />
                    <label className="input__label input__label--ichiro" htmlFor="input-25">
                      <span className="input__label-content input__label-content--ichiro">Your Name</span>
                    </label>
                  </span>
                  <span className="input input--ichiro">
                    <input
                      className="input__field input__field--ichiro"
                      type="email"
                      id="input-26"
                      name="Email"
                      placeholder=" "
                      required=""
                    />
                    <label className="input__label input__label--ichiro" htmlFor="input-26">
                      <span className="input__label-content input__label-content--ichiro">Your Email</span>
                    </label>
                  </span>
                  <textarea name="Message" placeholder="Your message here..." required=""></textarea>
                  <input type="submit" value="Submit" />
                </form>
              </div>
              <div className="clearfix"> </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactBody;
