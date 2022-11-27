import React, { useState } from 'react';
import { useCompany } from '../../../../contexts/CompanyContext';
import { ConfirmModal } from '../ConfirmModal/ConfirmModal';
import './visitors.scss';

export const Visitors = ({ req }) => {
  const { company } = useCompany();
  const [confirmModal, setConfirmModal] = useState({
    is_open: false,
    action: '',
  });
  const [selected, setSelected] = useState([]);
  const isSelected = (vis) => {
    const current = selected.filter((item) => item.user_id === vis.user_id);
    if (current.length > 0) return true;
    return false;
  };
  const selectHandler = (vis) => {
    if (isSelected(vis)) {
      const update = selected.filter((item) => item.user_id !== vis.user_id);
      setSelected(update);
      return;
    }
    setSelected([...selected, vis]);
  };
  const selectAll = () => {
    setSelected(req.visitors);
  };
  const modalHandler = (action) => {
    if (selected.length === 0) {
      alert('You must select a visitor!');
      return;
    }
    let errMessage = '';
    let isError = false;
    switch (action) {
      case 'In':
        selected.map((item) => {
          if (item.is_onsite === true) {
            errMessage = `${item.user_name} is ALREADY checked in!`;
            isError = true;
          }
          return;
        });
        if (isError) {
          alert(errMessage);
          break;
        } else {
          setConfirmModal({ is_open: true, action: action });
          break;
        }
      case 'Out':
        selected.map((item) => {
          if (item.is_onsite !== true) {
            errMessage = `${item.user_name} is NOT checked in!`;
            isError = true;
          }
          return;
        });
        if (isError) {
          alert(errMessage);
          break;
        } else {
          setConfirmModal({ is_open: true, action: action });
          break;
        }
      default:
        break;
    }
  };

  return (
    <div id="Visitors">
      {confirmModal.is_open && (
        <ConfirmModal
          req={req}
          selected={selected}
          setSelected={setSelected}
          confirmModal={confirmModal}
          setConfirmModal={setConfirmModal}
          badges={company.badges}
        />
      )}
      <header>
        <h2>Visitors</h2>
        {req.status === 'active' && (
          <div className="active">
            <div className="actions">
              <button onClick={() => modalHandler('In')}>Check In</button>
              <button onClick={() => modalHandler('Out')}>Check Out</button>
            </div>
            <div>{`${selected.length} Selected`}</div>
          </div>
        )}
      </header>
      <div className="cards">
        {req.visitors.map((visitor) => (
          <div
            key={visitor.user_id}
            className={isSelected(visitor) ? 'card selected' : 'card'}
            onClick={() => selectHandler(visitor)}
          >
            {req.status === 'active' && (
              <div className="status">
                <p className={visitor.is_onsite ? 'in' : 'out'}>
                  {visitor.is_onsite ? 'In' : 'Out'}
                </p>
              </div>
            )}
            <h3>{visitor.user_name}</h3>
            <h4>{visitor.company_name}</h4>
            <div className="badges">
              {visitor.badges.map((badge) => (
                <p key={badge} className="badge">
                  {badge}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
