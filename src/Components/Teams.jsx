import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Supermarket.css';
import team4 from '../images/t4.jpg';
import team2 from '../images/t2.jpg';
import team3 from '../images/t3.jpg';
import team1 from '../images/t1.jpg';

function Teams() {
  return (
    <>
      <div className="about-team">
        <div className="container">
          <h3 className="w3_agile_header">Meet Our Team</h3>
          <div className="team-agileitsinfo">
            <div className="row">
              <div className="col-lg-3 about-team-grids">
                <img src={team1} alt="" />
                <div className="team-w3lstext">
                  <h4>
                    <span>ANDERSON,</span> Manager
                  </h4>
                  <p>
                    Odio dignissimos vero eos voluptatem accusantium doloremque laudantium reader will be distracted.
                  </p>
                </div>
                <div className="social-icons caption">
                  <ul>
                    <li>
                      <a href="#" className="fa fa-facebook facebook">
                        {' '}
                      </a>
                    </li>
                    <li>
                      <a href="#" className="fa fa-twitter twitter">
                        {' '}
                      </a>
                    </li>
                    <li>
                      <a href="#" className="fa fa-google-plus googleplus">
                        {' '}
                      </a>
                    </li>
                  </ul>
                  <div className="clearfix"> </div>
                </div>
              </div>
              <div className=" col-lg-3 about-team-grids">
                <img src={team2} alt="" />
                <div className="team-w3lstext">
                  <h4>
                    <span>ELIFS,</span> Director
                  </h4>
                  <p>
                    Odio dignissimos vero eos voluptatem accusantium doloremque laudantium reader will be distracted.
                  </p>
                </div>
                <div className="social-icons caption">
                  <ul>
                    <li>
                      <a href="#" className="fa fa-facebook facebook">
                        {' '}
                      </a>
                    </li>
                    <li>
                      <a href="#" className="fa fa-twitter twitter">
                        {' '}
                      </a>
                    </li>
                    <li>
                      <a href="#" className="fa fa-google-plus googleplus">
                        {' '}
                      </a>
                    </li>
                  </ul>
                  <div className="clearfix"> </div>
                </div>
              </div>
              <div className="col about-team-grids">
                <img src={team1} alt="" />
                <div className="team-w3lstext">
                  <h4>
                    <span>ANDERSON,</span> Manager
                  </h4>
                  <p>
                    Odio dignissimos vero eos voluptatem accusantium doloremque laudantium reader will be distracted.
                  </p>
                </div>
                <div className="social-icons caption">
                  <ul>
                    <li>
                      <a href="#" className="fa fa-facebook facebook">
                        {' '}
                      </a>
                    </li>
                    <li>
                      <a href="#" className="fa fa-twitter twitter">
                        {' '}
                      </a>
                    </li>
                    <li>
                      <a href="#" className="fa fa-google-plus googleplus">
                        {' '}
                      </a>
                    </li>
                  </ul>
                  <div className="clearfix"> </div>
                </div>
              </div>

              <div className="col-lg-3 about-team-grids">
                <img src={team4} alt="" />
                <div className="team-w3lstext">
                  <h4>
                    <span>RACKHAM,</span> Staff
                  </h4>
                  <p>
                    Odio dignissimos vero eos voluptatem accusantium doloremque laudantium reader will be distracted.
                  </p>
                </div>
                <div className="social-icons caption">
                  <ul>
                    <li>
                      <a href="#" className="fa fa-facebook facebook">
                        {' '}
                      </a>
                    </li>
                    <li>
                      <a href="#" className="fa fa-twitter twitter">
                        {' '}
                      </a>
                    </li>
                    <li>
                      <a href="#" className="fa fa-google-plus googleplus">
                        {' '}
                      </a>
                    </li>
                  </ul>
                  <div className="clearfix"> </div>
                </div>
              </div>
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Teams;
