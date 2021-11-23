import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Supermarket.css';
import Team from '../Components/Team';
import team4 from '../images/t4.jpg';
import team2 from '../images/t2.jpg';
import team3 from '../images/t3.jpg';
import team1 from '../images/t1.jpg';

function Teams() {
  const teams = [
    {
      id: 1,
      name: 'jessica',
      position: 'Manager',
      image: team1,
      description: 'Odio dignissimos vero eos voluptatem accusantium doloremque laudantium reader will be distracted.'
    },
    {
      id: 2,
      name: 'samy',
      position: 'Staff',
      image: team2,
      description: 'Odio dignissimos vero eos voluptatem accusantium doloremque laudantium reader will be distracted.'
    },
    {
      id: 3,
      name: 'rackham',
      position: 'Director',
      image: team3,
      description: 'Odio dignissimos vero eos voluptatem accusantium doloremque laudantium reader will be distracted.'
    },
    {
      id: 4,
      name: 'elifs',
      position: 'Developer',
      image: team4,
      description: 'Odio dignissimos vero eos voluptatem accusantium doloremque laudantium reader will be distracted.'
    }
  ];
  return (
    <>
      <div className="about-team">
        <div className="container">
          <h3 className="w3_agile_header">Meet Our Team</h3>
          <div className="team-agileitsinfo">
            <div className="row">
              {teams.map(d => (
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <Team teams={d} key={d.id} />
                </div>
              ))}
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Teams;
