import React from 'react';

function Team({ teams }) {
  const { name, position, image, description } = teams;
  return (
    <>
      <div className="about-team-grids">
        <img src={image} alt="" />
        <div className="team-w3lstext">
          <h4>
            <span>{`${name.toUpperCase()},`}</span>
            {position}
          </h4>
          <p>{description}</p>
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
    </>
  );
}

export default Team;
