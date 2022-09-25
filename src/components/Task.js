import React from 'react';
import { Toggle } from '../components/Toggle';

export const Task = ({ task }) => {
  const checkHandler = (e, action) => {
    e.stopPropagation();
    console.log(`check ${action} test`);
  };
  return (
    <div id="Task">
      <Toggle>
        <div className="info">
          <p className="id">
            <button>^</button>
            {`TASK${task.id}`}
          </p>
          <p className="desc">{task.description}</p>
          <p className="timeframe">
            {task.timeframe.startDate} {task.timeframe.startTime} -{' '}
            {task.timeframe.endTime}
          </p>
        </div>
        <ul className="employees">
          {task.employees.map((emp) => (
            <li className="emp" key={emp.name}>
              <p className="name">{emp.name}</p>
              <p className="inTime">in: </p>
              <p className="outTime">out:</p>
              <div className="buttons">
                <button onClick={(e) => checkHandler(e, 'IN')}>Check in</button>
                <button onClick={(e) => checkHandler(e, 'OUT')}>
                  Check out
                </button>
              </div>
            </li>
          ))}
        </ul>
      </Toggle>
    </div>
  );
};
