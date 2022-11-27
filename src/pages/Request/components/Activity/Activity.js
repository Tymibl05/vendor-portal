import React from 'react';
import './activity.scss';

export const Activity = ({ activity }) => {
  return (
    <div id="Activity">
      <header>
        <h2>Activity Log</h2>
      </header>
      <div className="logs">
        {activity.map((log) => (
          <div key={log.message} className="log">
            <p>
              <strong>{log.time} :</strong> {log.message}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
