import React from 'react';
import { Link } from 'react-router-dom';
import './onsite.scss';

export const Onsite = ({ onsite }) => {
  return (
    <div id="Onsite">
      <h3>On-Site</h3>
      {onsite && (
        <div className="visitors">
          {onsite.map((vis) => (
            <Link
              to={`/request/${vis.req}`}
              className="visitor"
              key={vis.user_name}
            >
              <div className="info">
                <strong>{vis.user_name}</strong>
                <p>{vis.company_name}</p>
              </div>
              <div className="badges">
                <p>Badges:</p>
                {vis.badges.map((badge) => (
                  <div className="badge" key={badge}>
                    {badge}
                  </div>
                ))}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
