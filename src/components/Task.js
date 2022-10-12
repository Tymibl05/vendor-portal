import React from 'react';
import { Toggle } from '../components/Toggle';
import axios from 'axios';

export const Task = ({ task }) => {
  const checkHandler = (e, action, empId) => {
    e.stopPropagation();
    const stamp = '11/11/11 11:11';
    if (action == 'IN')
      axios.patch(`/1/${task.id}/${empId}`, { checkIn: stamp });
    if (action == 'OUT')
      axios.patch(`/1/${task.id}/${empId}`, { checkOut: stamp });
    // axios.patch('/:userId/:taskId/:empId', req.body)
  };
  return (
    <div id="Task">
      <Toggle>
        <div className="info">
          <p className="id">
            <button>^</button>
            {`T${task.id}`}
          </p>
          <div className="timeframe">
            <p>{task.timeframe.startDate}</p>
            <p>
              {task.timeframe.startTime} - {task.timeframe.endTime}
            </p>
          </div>
        </div>
        <ul className="employees">
          <p className="desc">{task.description}</p>
          {task.employees.map((emp) => (
            <li className="emp" key={emp.name}>
              <div className="text">
                <p className="name">{emp.name}</p>
                <p className="inTime">
                  <b>In:</b> {emp.checkIn[emp.checkIn.length - 1]}
                </p>
                <p className="outTime">
                  <b>Out:</b>{' '}
                  {emp.checkOut.length == emp.checkIn.length
                    ? emp.checkOut[emp.checkOut.length - 1]
                    : ''}
                </p>
              </div>
              {task.status == 'active' && (
                <div className="buttons">
                  <button onClick={(e) => checkHandler(e, 'IN', emp.id)}>
                    Check in
                  </button>
                  <button onClick={(e) => checkHandler(e, 'OUT', emp.id)}>
                    Check out
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      </Toggle>
    </div>
  );
};
