import React, { useEffect } from 'react';
import { useCompany } from '../../../../contexts/CompanyContext';
import './info.scss';

export const Info = ({ req }) => {
  const { urlBase } = useCompany();
  const updateRequest = (value) => {
    const url = `${urlBase}/visitor-kiosk/requests/update/${req._id}`;
    const body = {};
    if (value === 'approve') req.status = 'active';
    if (value === 'deny') req.status = 'closed';
    body.status = req.status;
    try {
      fetch(url, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...body }),
      });
      console.log(`${req.name} has been updated`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div id="Info">
      <header>
        <h2>{req.name}</h2>
        {req.status === 'pending' && (
          <div className="actions">
            <button
              value="approve"
              onClick={(e) => updateRequest(e.target.value)}
              className="approve"
            >
              Approve
            </button>
            <button
              value="deny"
              onClick={(e) => updateRequest(e.target.value)}
              className="deny"
            >
              Deny
            </button>
          </div>
        )}
      </header>
      <h4 className={`status ${req.status}`}>{req.status}</h4>
      <h3>
        {req.timeframe.start_date}
        {req.timeframe.start_date !== req.timeframe.end_date &&
          ` - ${req.timeframe.end_date}`}{' '}
        | {req.timeframe.start_time} - {req.timeframe.end_time}
      </h3>
      <h3>Description: {req.description}</h3>
    </div>
  );
};
