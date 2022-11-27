import React from 'react';
import { useCompany } from '../../../../contexts/CompanyContext';
import './confirmModal.scss';

export const ConfirmModal = ({
  req,
  confirmModal,
  setConfirmModal,
  selected,
  setSelected,
}) => {
  const { urlBase } = useCompany();
  const submitCheck = () => {
    const url = `${urlBase}/visitor-kiosk/requests/update/${req._id}`;
    const body = {};

    req.visitors.map((vis) => {
      selected.map((sel) => {
        if (vis.user_id === sel.user_id && confirmModal.action === 'In') {
          vis.is_onsite = true;
          vis.badges = [];
        }
        if (vis.user_id === sel.user_id && confirmModal.action === 'Out') {
          vis.is_onsite = false;
          vis.badges = [];
        }
      });
    });

    body.visitors = req.visitors;

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

    setConfirmModal({ is_open: false, action: '' });
    setSelected([]);
  };
  return (
    <div className="modal">
      <div id="ConfirmModal">
        <header>
          <h1>{`Check ${confirmModal.action}`}</h1>
          <button
            onClick={() => setConfirmModal({ is_open: false, action: '' })}
          >
            X
          </button>
        </header>
        <div className="visitors">
          {selected.map((vis) => (
            <div key={vis.user_id}>
              <h3>{vis.user_name}</h3>
              {vis.badges.map((badge) => (
                <span key={badge} className="badge">
                  {badge}
                </span>
              ))}
            </div>
          ))}
        </div>
        {confirmModal.action === 'Out' && (
          <div className="badges">
            <p>Badges Returned?</p>
            {selected.map((vis) =>
              vis.badges.map((badge) => (
                <span key={badge} className="badge">
                  {badge}
                </span>
              ))
            )}
          </div>
        )}
        <div className="actions">
          <button className="confirm" onClick={() => submitCheck()}>
            Confirm
          </button>
          <button
            className="cancel"
            onClick={() => setConfirmModal({ is_open: false, action: '' })}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
