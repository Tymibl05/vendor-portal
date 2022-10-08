import React from 'react';
import { Toggle } from '../components/Toggle';
import { useTasks } from '../contexts/TasksContext';

export const Task = ({ task }) => {
  const { vendorCheckIn, vendorCheckOut } = useTasks();

  const checkHandler = (e, action, emp) => {
    e.stopPropagation();
    vendorCheckIn(task.id, emp.name);
    console.log(`check ${action} ${emp.name}`);
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
                  <b>In:</b> 10/05/22 12:30
                </p>
                <p className="outTime">
                  <b>Out:</b> 10/05/22 15:35
                </p>
              </div>
              <div className="buttons">
                <button onClick={(e) => checkHandler(e, 'IN', emp)}>
                  Check in
                </button>
                <button onClick={(e) => checkHandler(e, 'OUT', emp)}>
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
