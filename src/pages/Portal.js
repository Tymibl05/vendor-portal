import React, { useState } from 'react';
import { Task } from '../components/Task';
import { useAuth } from '../contexts/AuthContext';
import { useTasks } from '../contexts/TasksContext';

export const Portal = () => {
  const { currentUser } = useAuth();
  const { companyInfo } = useTasks();
  console.log(currentUser.uid);

  const [filter, setFilter] = useState('active');
  // use filter state to call the correct task group from context.
  // new task group call in useEffect(()=>{},[filterState])

  return (
    <div id="Portal">
      <div>
        <h1>
          Vendor Portal | <span>{companyInfo.name}</span>
        </h1>

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
          {companyInfo.tasks.map((task) => (
            <Task task={task} key={task.id} />
          ))}
        </div>
      </div>
    </div>
  );
};
