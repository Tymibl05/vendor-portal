import React from 'react';
import { Link } from 'react-router-dom';
import './pending.scss';

export const Pending = ({ requests }) => {
  return (
    <div id="Pending">
      <h2>Pending Approvals</h2>
      {requests && (
        <div className="requests">
          {requests.map((req) => (
            <Link to={`/request/${req._id}`} key={req._id} className="req">
              <h3>{req.name}</h3>
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
              <p>{req.description}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
