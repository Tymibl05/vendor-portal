import React, { useState } from 'react';
import { useTasks } from '../contexts/TasksContext';
import { Task } from '../components/Task';
import { AddTaskModal } from '../components/AddTaskModal';

export const Portal = () => {
  const { vendorInfo } = useTasks();
  const [isModalOpen, setModalOpen] = useState(false);

  const [filter, setFilter] = useState('active');
  // filter tasks from vendorInfo based on 'status' field (to be added)

  return (
    <div id="Portal">
      {isModalOpen && <AddTaskModal setModalOpen={setModalOpen} />}
      <div>
        <nav>
          <h1>
            Vendor Portal | <span>{vendorInfo.name}</span>
          </h1>
          <button onClick={() => setModalOpen(!isModalOpen)}>add task</button>
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
