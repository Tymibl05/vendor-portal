import React from 'react';
import { Link } from 'react-router-dom';
import './active.scss';

export const Active = ({ requests }) => {
  return (
    <div id="Active">
      <div className="nav">
        <div className="left">
          <h2>|||</h2>
          <h2>Requests</h2>
        </div>
        <div className="filters">
          <h4>Today</h4>
          <h4>This Week</h4>
          <h4>This Month</h4>
          <h4>This Year</h4>
        </div>
      </div>
      {requests && (
        <div className="requests">
          {requests.map((req) => (
            <Link to={`/request/${req._id}`} key={req._id}>
              <div className="request">
                <div className="info">
                  <p>
                    <strong>{req.name}</strong>
                  </p>
                  <p className="time">
                    {req.timeframe.start_date !== req.timeframe.end_date ? (
                      <span>
                        {req.timeframe.start_date} - {req.timeframe.end_date}
                      </span>
                    ) : (
                      <span>{req.timeframe.start_date}</span>
                    )}
                    <span>
                      {req.timeframe.start_time} - {req.timeframe.end_time}
                    </span>
                  </p>
                </div>
                <div className="visitors">
                  {req.visitors.map((vis) => (
                    <p key={vis.user_name}>{vis.user_name}</p>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
