import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../Supermarket.css';
import team2 from '../images/t2.jpg';
import team3 from '../images/t3.jpg';
import team1 from '../images/t1.jpg';
import team4 from '../images/t4.jpg';

function Teams() {
  return (
    <>
      <div class="about-team">
        <div class="container">
          <h3 class="w3_agile_header">Meet Our Team</h3>
          <div class="team-agileitsinfo row">
            <div class="col-md-3 about-team-grids">
              <img src={team4} alt="" />
              <div class="team-w3lstext">
                <h4>
                  <span>ANDERSON,</span> Manager
                </h4>
                <p>Odio dignissimos vero eos voluptatem accusantium doloremque laudantium reader will be distracted.</p>
              </div>
              <div class="social-icons caption">
                <ul>
                  <li>
                    <a href="#" class="fa fa-facebook facebook">
                      {' '}
                    </a>
                  </li>
                  <li>
                    <a href="#" class="fa fa-twitter twitter">
                      {' '}
                    </a>
                  </li>
                  <li>
                    <a href="#" class="fa fa-google-plus googleplus">
                      {' '}
                    </a>
                  </li>
                </ul>
                <div class="clearfix"> </div>
              </div>
            </div>
            <div class=" col-md-3 about-team-grids">
              <img src={team2} alt="" />
              <div class="team-w3lstext">
                <h4>
                  <span>ELIFS,</span> Director
                </h4>
                <p>Odio dignissimos vero eos voluptatem accusantium doloremque laudantium reader will be distracted.</p>
              </div>
              <div class="social-icons caption">
                <ul>
                  <li>
                    <a href="#" class="fa fa-facebook facebook">
                      {' '}
                    </a>
                  </li>
                  <li>
                    <a href="#" class="fa fa-twitter twitter">
                      {' '}
                    </a>
                  </li>
                  <li>
                    <a href="#" class="fa fa-google-plus googleplus">
                      {' '}
                    </a>
                  </li>
                </ul>
                <div class="clearfix"> </div>
              </div>
            </div>
            <div class="col-md-3 about-team-grids">
              <img src={team1} alt="" />
              <div class="team-w3lstext">
                <h4>
                  <span>JESSICA,</span> Supervisior
                </h4>
                <p>Odio dignissimos vero eos voluptatem accusantium doloremque laudantium reader will be distracted.</p>
              </div>
              <div class="social-icons caption">
                <ul>
                  <li>
                    <a href="#" class="fa fa-facebook facebook">
                      {' '}
                    </a>
                  </li>
                  <li>
                    <a href="#" class="fa fa-twitter twitter">
                      {' '}
                    </a>
                  </li>
                  <li>
                    <a href="#" class="fa fa-google-plus googleplus">
                      {' '}
                    </a>
                  </li>
                </ul>
                <div class="clearfix"> </div>
              </div>
            </div>
            <div class="col-md-3 about-team-grids">
              <img src={team3} alt="" />
              <div class="team-w3lstext">
                <h4>
                  <span>RACKHAM,</span> Staff
                </h4>
                <p>Odio dignissimos vero eos voluptatem accusantium doloremque laudantium reader will be distracted.</p>
              </div>
              <div class="social-icons caption">
                <ul>
                  <li>
                    <a href="#" class="fa fa-facebook facebook">
                      {' '}
                    </a>
                  </li>
                  <li>
                    <a href="#" class="fa fa-twitter twitter">
                      {' '}
                    </a>
                  </li>
                  <li>
                    <a href="#" class="fa fa-google-plus googleplus">
                      {' '}
                    </a>
                  </li>
                </ul>
                <div class="clearfix"> </div>
              </div>
            </div>
            <div class="clearfix"> </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Teams;
