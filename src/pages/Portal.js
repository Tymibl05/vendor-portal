import React, { useContext, useEffect, useState } from 'react';
import { Task } from '../components/Task';
import { Store } from '../Store';
import { useAuth } from '../contexts/AuthContext';

export const Portal = () => {
  const { currentUser } = useAuth();
  const { state, dispatch } = useContext(Store);
  const [tasks, setTasks] = useState([]);
  // only pass the specified company's tasks

  useEffect(() => {
    (async () => {
      await setTasks(state.Dell.tasks.active);
      // await setTasks(state.Dell.tasks + `.${filter}`);
      // await setTasks(dispatch({ type: 'GET_TASKS' }));
    })();
  }, [tasks]);

  const [filter, setFilter] = useState('active');
  // use filter state to call the correct task group from context.
  // new task group call in useEffect(()=>{},[filterState])

  return (
    <div id="Portal">
      <div>
        <h1>
          Vendor Portal | <span>{currentUser.email}</span>
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
          {tasks && tasks.map((task) => <Task task={task} key={task.id} />)}
        </div>
      </div>
    </div>
  );
};
