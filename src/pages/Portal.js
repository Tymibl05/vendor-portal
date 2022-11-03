import React, { useEffect, useState } from 'react';
import { Task } from '../components/Task';
import { AddTaskModal } from '../components/AddTaskModal';
import axios from 'axios';

export const Portal = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const [vendor, setVendor] = useState();
  useEffect(() => {
    (async () => {
      try {
        axios.get('/1').then((response) => setVendor(response.data));
      } catch (error) {
        console.log(error);
      }
    })();
  }, []); // fetch user info

  const [filter, setFilter] = useState('active');
  const [filteredTasks, setFilteredTasks] = useState();
  useEffect(() => {
    (async () => {
      try {
        axios
          .get(`/1/tasks/${filter}`)
          .then((response) => setFilteredTasks(response.data));
      } catch (error) {
        console.log(error);
      }
    })();
  }, [isModalOpen, filteredTasks]); // fetch filtered tasks

  return (
    <div id="Portal">
      {isModalOpen && <AddTaskModal setModalOpen={setModalOpen} />}
      {vendor && (
        <div>
          <nav>
            <h1>
              Vendor Portal | <span>{vendor.name}</span>
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
              <p>Timeframe</p>
            </div>
            {filteredTasks &&
              filteredTasks.map((task) => <Task task={task} key={task.id} />)}
          </div>
        </div>
      )}
    </div>
  );
};
