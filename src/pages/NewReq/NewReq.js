import React, { useState } from 'react';
import { useCompany } from '../../contexts/CompanyContext';
import './newReq.scss';

export const NewReq = () => {
  const { urlBase } = useCompany();
  const initForm = {
    description: '',
    timeframe: {
      start_date: '',
      end_date: null,
      start_time: '',
      end_time: '',
    },
    visitors: [],
  };
  const [form, setForm] = useState(initForm);
  const [multiDay, setMultiDay] = useState(false);
  const submitReq = (e) => {
    e.preventDefault();
    const url = `${urlBase}/visitor-kiosk/requests/new`;
    try {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
    } catch (error) {
      console.log(error);
    }
    setForm(initForm);
    setMultiDay(false);
  };
  const updateMultiDay = () => {
    setMultiDay(!multiDay);
    setForm({ ...form, timeframe: { ...form.timeframe, end_date: null } });
  };
  return (
    <div id="NewReq">
      <h1>New Req</h1>
      <form action="">
        <div className="checkbox">
          <input
            type="checkbox"
            checked={multiDay}
            onChange={() => updateMultiDay()}
          />
          <label htmlFor="">Multiple days?</label>
        </div>
        <div className="description">
          <label htmlFor="">Description</label>
          <textarea
            rows={2}
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="">Start Date</label>
          <input
            type="date"
            value={form.timeframe.start_date}
            onChange={(e) =>
              setForm({
                ...form,
                timeframe: { ...form.timeframe, start_date: e.target.value },
              })
            }
          />
        </div>
        {multiDay && (
          <div>
            <label htmlFor="">End Date</label>
            <input
              type="date"
              value={form.timeframe.end_date}
              onChange={(e) =>
                setForm({
                  ...form,
                  timeframe: { ...form.timeframe, end_date: e.target.value },
                })
              }
            />
          </div>
        )}
        <div>
          <label htmlFor="">Start Time</label>
          <input
            type="time"
            value={form.timeframe.start_time}
            onChange={(e) =>
              setForm({
                ...form,
                timeframe: { ...form.timeframe, start_time: e.target.value },
              })
            }
          />
        </div>
        <div>
          <label htmlFor="">End Time</label>
          <input
            type="time"
            value={form.timeframe.end_time}
            onChange={(e) =>
              setForm({
                ...form,
                timeframe: { ...form.timeframe, end_time: e.target.value },
              })
            }
          />
        </div>
        <div>
          <label htmlFor="">Visitors</label>
        </div>
      </form>
      <button type="submit" onClick={(e) => submitReq(e)}>
        Submit Request
      </button>
    </div>
  );
};
