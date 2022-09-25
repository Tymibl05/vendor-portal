import React, { useState } from 'react';
import { useTasks } from '../contexts/TasksContext';
import { Task } from '../components/Task';

export const Portal = () => {
  const { vendorInfo } = useTasks();

  const [filter, setFilter] = useState('active');
  // use filter state to call the correct task group from context.
  // new task group call in useEffect(()=>{},[filterState])

  return (
    <div id="Portal">
      <div>
        <nav>
          <h1>
            Vendor Portal | <span>{vendorInfo.name}</span>
          </h1>
          <button>add task</button>
        </nav>

        <div className="tasks">
          <div className="filter">
            <p onClick={() => setFilter('active')}>Active</p>
            <p onClick={() => setFilter('completed')}>Completed</p>
            <p onClick={() => setFilter('pending')}>Pending</p>
          </div>
          <div className="labels">
            <p>Task</p>
            <p>Description</p>
            <p>Timeframe</p>
          </div>
          {vendorInfo.tasks.map((task) => (
            <Task task={task} key={task.id} />
          ))}
        </div>
      </div>
    </div>
  );
};
